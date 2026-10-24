// Next.js Windows static-export filename bug:
// https://github.com/vercel/next.js/issues/85374
// Linux/macOS exports already use the expected flat segment filenames.
import { readdir, stat, readFile, rename, unlink } from "node:fs/promises";
import { resolve, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

if (process.platform === "win32") {
  const root = fileURLToPath(new URL("../out/", import.meta.url));
  let corrected = 0;
  for (const name of await readdir(root, { recursive: true })) {
    const parts = name.split(sep);
    const index = parts.findIndex((part) => part.startsWith("__next."));
    if (index < 0 || index === parts.length - 1 || !name.endsWith(".txt"))
      continue;
    const source = resolve(root, name);
    const target = resolve(
      root,
      join(...parts.slice(0, index), parts.slice(index).join(".")),
    );
    for (const path of [source, target]) {
      const withinRoot = relative(root, path);
      if (withinRoot.startsWith("..") || resolve(root, withinRoot) !== path) {
        throw new Error("Refusing to modify a file outside the static export.");
      }
    }
    if (!(await stat(source)).isFile()) continue;
    let existing;
    try {
      existing = await readFile(target);
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    if (existing) {
      if (!existing.equals(await readFile(source))) {
        throw new Error(
          `Conflicting static payload: ${relative(root, target)}`,
        );
      }
      await unlink(source);
    } else {
      await rename(source, target);
    }
    corrected++;
  }
  console.log(
    `Corrected ${corrected} Windows static-export payload filenames.`,
  );
}
