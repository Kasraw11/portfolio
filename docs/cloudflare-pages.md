# Cloudflare Pages deployment

This portfolio supports static export. Its four App Router pages render from
local content at build time. There are no API routes, Server Actions, request-time
cookies/headers, authentication, database calls, middleware/proxy, ISR, or
unresolved dynamic routes. Theme persistence, clipboard actions, disclosures,
navigation, and motion remain browser-side behavior.

## Dashboard settings

In the existing **Pages** project's Settings, configure the following for the
production and preview environments:

| Setting                | Value                         |
| ---------------------- | ----------------------------- |
| Framework preset       | Next.js (Static HTML Export)  |
| Production branch      | main                          |
| Root directory         | Repository root (leave blank) |
| Build command          | npm run build                 |
| Build output directory | out                           |
| Environment variable   | NODE_VERSION = 24.16.0        |

Use a Cloudflare Pages project with Git integration. There is no deploy command,
Worker entry point, service binding, or OpenNext adapter in this setup. Normal
Pages dependency installation uses the committed npm manifests and lockfile; no
Cloudflare runtime compatibility flags or secrets are needed by the current app.
Do not publish the repository root, `.next/`, or `public/` as the build output.

The reported messages have different meanings:

- **No Wrangler configuration file found:** expected for this dashboard-managed
  Pages project. A Wrangler file is optional and has not been added just to hide
  this message.
- **No build command specified. Skipping build step:** set `npm run build` in
  the dashboard. Without it, an asset upload succeeding does not verify that
  Next.js generated the website.
- **Assets published successfully:** confirms an upload, not the contents of the
  uploaded directory. Publish only the generated `out/` directory.

If the project was created using Direct Upload rather than Git integration,
build locally and upload `out/`, or create a Git-integrated Pages project for
Cloudflare-managed builds. Workers deployment settings are a different product
path and should not be used for this static export.

## Build and preview

```powershell
npm.cmd ci
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run build
npm.cmd start
```

The dependency-free local preview binds to `127.0.0.1:3000`; set `PORT` to change
it. It serves clean HTML routes and the exported 404 page, and mirrors the single
global rule in `out/_headers`. It is a local convenience, not an implementation
of Cloudflare's complete caching, redirects, or CDN behavior.

Next.js 16.4.3 has a known Windows static-export path separator issue:
segment payloads may be written as `about/__next.about/__PAGE__.txt`, while the
browser requests `about/__next.about.__PAGE__.txt`. The npm `postbuild` hook
runs `scripts/fix-static-export.mjs` to normalise only these generated filenames
on Windows. It preserves payload contents, refuses conflicting target files,
and does nothing on Linux/macOS. Cloudflare's Linux builds are unaffected.
Use `npm run build` so this hook also runs for local Windows builds; a raw
`next build` bypasses npm lifecycle hooks. See the
[upstream Next.js issue](https://github.com/vercel/next.js/issues/85374).

`output: "export"` makes the existing build command create `out/index.html`,
`about.html`, `projects.html`, `contact.html`, `404.html`, client navigation
payloads, and `_next/` assets. Cloudflare Pages resolves the extensionless URLs
`/about`, `/projects`, and `/contact` to their HTML files. URLs are preserved;
there is no catch-all redirect to the homepage. The top-level `404.html` keeps
missing routes from becoming a single-page-app fallback.

## Images and headers

`images.unoptimized: true` keeps the existing Next.js Image components and their
layout while serving the original files under `out/images/`. There is no runtime
`/_next/image` endpoint. Original images may transfer more bytes than optimised
variants, but no image assets or component styling have been changed.

Static hosts do not execute `next.config.ts` response-header functions.
`public/_headers` therefore carries the existing production CSP, anti-framing,
MIME-sniffing, referrer, permissions, and HSTS settings into `out/_headers`.
Development retains its Next.js header policy. Confirm these headers and HTTPS
on the deployed domain after a manual deployment.

No Workers/OpenNext files, scripts, or dependencies were present when this
configuration was prepared. No migration, installation, or deployment was run.

## Local validation

On Windows with Node.js 24.16.0, `npm run build` generates the static export and
corrects four affected payload filenames. Running the correction again changes
zero files. TypeScript checking, ESLint, formatting of changed files, and
`git diff --check` pass.

The local static preview passes 16 HTTP checks for routes, assets, headers,
404/private-file handling, and request methods. Browser checks cover all four
routes in light/dark mode at 1440px and 390px, with no browser errors or horizontal
overflow. Client-side navigation preserves the document; theme persistence,
clipboard copying, CV/project disclosures, and mobile-menu dismissal pass.
No screenshots or automated test suite were added to the repository.

The application source, original images, package versions, and lockfile are
unchanged. Cloudflare edge behavior and the dashboard settings must still be
confirmed after the owner performs a deployment.

## Official references

- [Cloudflare Pages: static Next.js](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)
- [Next.js static export](https://nextjs.org/docs/app/guides/static-exports)
- [Cloudflare Pages headers](https://developers.cloudflare.com/pages/configuration/headers/)
- [Cloudflare Pages route matching](https://developers.cloudflare.com/pages/configuration/serving-pages/)
- [Cloudflare Pages Node version settings](https://developers.cloudflare.com/pages/configuration/build-image/)
