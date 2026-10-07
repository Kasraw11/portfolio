import { before, after, test } from "node:test";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { setTimeout as delay } from "node:timers/promises";

let server;
let origin;
let output = "";

before(async () => {
  server = spawn(
    process.execPath,
    [
      "node_modules/next/dist/bin/next",
      "start",
      "--hostname",
      "127.0.0.1",
      "--port",
      "0",
    ],
    {
      stdio: ["ignore", "pipe", "pipe"],
      env: { ...process.env, NODE_ENV: "production" },
    },
  );
  let startupError;
  server.on("error", (error) => {
    startupError = error;
  });
  for (const stream of [server.stdout, server.stderr]) {
    stream.on("data", (data) => {
      output += data.toString();
    });
  }
  for (let attempt = 0; attempt < 300; attempt++) {
    if (startupError) throw startupError;
    if (server.exitCode !== null) throw new Error(output);
    const address = output.match(/http:\/\/127\.0\.0\.1:\d+/)?.[0];
    if (address) {
      try {
        const response = await fetch(address, {
          signal: AbortSignal.timeout(1000),
        });
        await response.arrayBuffer();
        if (response.status === 200) {
          origin = address;
          return;
        }
      } catch {
        /* Wait for the listener to become ready. */
      }
    }
    await delay(100);
  }
  throw new Error(`Production server did not start: ${output}`);
});

after(async () => {
  if (server?.pid && server.exitCode === null) {
    const stopped = once(server, "exit");
    server.kill();
    await stopped;
  }
});

async function request(path, options) {
  const response = await fetch(`${origin}${path}`, {
    redirect: "manual",
    signal: AbortSignal.timeout(10000),
    ...options,
  });
  const body = await response.text();
  return { response, body };
}

for (const path of [
  "/",
  "/about",
  "/projects",
  "/contact",
  "/images/portraits/homepage.jpeg",
  "/Kasra_Janesar_CV_2026.docx",
  "/missing-security-check",
]) {
  test(`security headers and expected status: ${path}`, async () => {
    const { response } = await request(path);
    assert.equal(
      response.status,
      path === "/missing-security-check" ? 404 : 200,
    );
    assert.equal(response.headers.get("x-powered-by"), null);
    assert.equal(response.headers.get("x-content-type-options"), "nosniff");
    assert.equal(response.headers.get("x-frame-options"), "DENY");
    assert.equal(
      response.headers.get("referrer-policy"),
      "strict-origin-when-cross-origin",
    );
    assert.equal(
      response.headers.get("strict-transport-security"),
      "max-age=31536000",
    );
    assert.match(response.headers.get("permissions-policy"), /camera=\(\)/);
    const csp = response.headers.get("content-security-policy");
    for (const directive of [
      "default-src 'self'",
      "object-src 'none'",
      "base-uri 'none'",
      "frame-ancestors 'none'",
      "form-action 'none'",
      "connect-src 'self'",
    ]) {
      assert.ok(csp.includes(directive), directive);
    }
    assert.ok(!csp.includes("unsafe-eval"));
  });
}

for (const path of [
  "/.env",
  "/.env.local",
  "/.git/config",
  "/package.json",
  "/next.config.ts",
  "/src/app/layout.tsx",
  "/resume.pdf",
  "/Kasra_Janesar_CV.docx",
  "/images/cv/page-1.png",
  "/images/cv/page-2.png",
  "/archive/cv/resume.pdf",
  "/%2e%2e/%2e%2e/.env",
  "/..%2f..%2f.env",
]) {
  test(`private or retired file is not served: ${path}`, async () => {
    const { response } = await request(path);
    assert.ok(
      [400, 404].includes(response.status),
      `Unexpected status ${response.status}`,
    );
  });
}

test("query payloads are not reflected as executable HTML or redirects", async () => {
  const payload = '<script>alert("security-probe")</script>';
  const { response, body } = await request(
    `/?q=${encodeURIComponent(payload)}&next=https://example.invalid`,
  );
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("location"), null);
  assert.ok(!body.includes(payload));
  const missing = await request(`/${encodeURIComponent(payload)}`);
  assert.equal(missing.response.status, 404);
  assert.ok(!missing.body.includes(payload));
});

for (const url of [
  "https://example.invalid/probe.png",
  "http://127.0.0.1:9/probe.png",
  "http://169.254.169.254/latest/meta-data/",
]) {
  test(`image optimizer rejects unapproved remote URL: ${url}`, async () => {
    const { response, body } = await request(
      `/_next/image?url=${encodeURIComponent(url)}&w=640&q=75`,
    );
    assert.equal(response.status, 400);
    assert.match(body, /not allowed/i);
  });
}

test("local portrait optimization still works", async () => {
  const { response } = await request(
    "/_next/image?url=%2Fimages%2Fportraits%2Fhomepage.jpeg&w=640&q=75",
  );
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /^image\//);
});

test("production browser bundles do not expose source maps", async () => {
  const { body } = await request("/");
  const scripts = [
    ...new Set(
      [...body.matchAll(/src="([^"?]+\.js)(?:\?[^"]*)?"/g)].map(
        (match) => match[1],
      ),
    ),
  ];
  assert.ok(scripts.length > 0);
  for (const script of scripts) {
    const { response } = await request(`${script}.map`);
    assert.equal(response.status, 404, script);
  }
});
