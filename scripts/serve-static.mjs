// Local preview of the exported site. Cloudflare Pages serves out/ in production.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, sep, extname } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../out/", import.meta.url));
try {
  await stat(resolve(root, "index.html"));
} catch {
  console.error("Static export not found. Run npm run build first.");
  process.exit(1);
}

// The repository's _headers uses one global /* block. Mirror it for local preview.
const headers = Object.fromEntries(
  (await readFile(resolve(root, "_headers"), "utf8"))
    .split(/\r?\n/)
    .filter((line) => /^\s+[^#\s].*:/.test(line))
    .map((line) => {
      const colon = line.indexOf(":");
      return [line.slice(0, colon).trim(), line.slice(colon + 1).trim()];
    }),
);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

createServer(async (request, response) => {
  for (const [name, value] of Object.entries(headers))
    response.setHeader(name, value);
  response.setHeader("Cache-Control", "no-store");
  if (!["GET", "HEAD"].includes(request.method)) {
    response.writeHead(405, { Allow: "GET, HEAD" }).end();
    return;
  }
  let pathname;
  try {
    pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
  } catch {
    response.writeHead(400).end();
    return;
  }
  const target = resolve(root, `.${pathname}`);
  let found;
  if (
    (target === resolve(root) || target.startsWith(resolve(root) + sep)) &&
    !pathname.includes("\\") &&
    !pathname.includes("\0") &&
    !pathname
      .split("/")
      .some(
        (part) =>
          part.startsWith(".") ||
          ["_headers", "_redirects", "_worker.js"].includes(part),
      )
  ) {
    for (const candidate of [
      target,
      `${target}.html`,
      resolve(target, "index.html"),
    ]) {
      try {
        if ((await stat(candidate)).isFile()) {
          found = candidate;
          break;
        }
      } catch {
        // Try clean URLs, then directory index files.
      }
    }
  }
  try {
    const file = found ?? resolve(root, "404.html");
    const body = await readFile(file);
    response.writeHead(found ? 200 : 404, {
      "Content-Type": types[extname(file)] ?? "application/octet-stream",
    });
    response.end(request.method === "HEAD" ? undefined : body);
  } catch {
    response.writeHead(500).end("Unable to serve the static export.");
  }
}).listen(Number(process.env.PORT ?? 3000), "127.0.0.1", function () {
  console.log(`Static preview: http://127.0.0.1:${this.address().port}`);
});
