# Project structure

The portfolio uses Next.js App Router with application code under `src/`.
Keep route files small, group components by page or shared responsibility, and
keep typed content separate from rendering. No services or hooks directories
are needed for the current application.

```text
portfolio/
├── .agents/skills/           Repository-local agent skills
├── .github/                 Dependabot configuration
├── .impeccable/design.json   Design-tool configuration
├── archive/cv/              Original CV documents and historical assets
├── docs/
│   ├── AGENTS.md             Next.js and project agent instructions
│   ├── CLAUDE.md             References adjacent AGENTS.md
│   ├── DESIGN.md             Visual contract and tokens
│   ├── PRODUCT.md            Product scope and content rules
│   ├── cv/
│   │   ├── previews/        Preserved PDF preview images
│   │   └── Kasra_Janesar_CV_2026_Two_Page.pdf
│   ├── reports/DEPENDENCY_AUDIT.txt
│   └── project-structure.md
├── public/images/           Public images and asset provenance
├── public/_headers          Cloudflare Pages production security headers
├── scripts/serve-static.mjs  Dependency-free local preview of out/
├── scripts/fix-static-export.mjs  Windows-only generated-payload correction
├── scripts/cv/
│   ├── build_cv.py          Optional offline PDF generator
│   └── cv.json              Preserved generator input snapshot
├── src/
│   ├── app/                 Route pages, root layout/template, global CSS
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── projects/page.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── about/           Profile rail, biography/background, CV preview
│   │   ├── contact/         Contact content and clipboard action
│   │   ├── home/            Homepage hero and overview
│   │   ├── layout/          Navigation, footer, route reveal behavior
│   │   ├── projects/        Project list and cards
│   │   └── ui/              Shared icons, titles, section, theme toggle
│   ├── data/                Typed portfolio content
│   ├── lib/                 Shared theme behavior
│   └── types/               Shared portfolio types
├── README.md                Setup and verification entry point
├── skills-lock.json         Installed local skill provenance
└── Root configuration      package*.json, tsconfig.json, next.config.ts,
                            eslint.config.mjs, postcss.config.mjs,
                            .gitignore, .prettierignore
```

Cloudflare Pages uses the static export in ignored `out/`. Deployment settings
and the `npm start` static-preview command are documented in
[cloudflare-pages.md](cloudflare-pages.md). No Workers/OpenNext adapter is needed.

Component CSS modules stay beside their components. `src/app/globals.css`
remains the shared theme and motion token owner. The `@/*` alias continues to
resolve to `src/*`. Routes and public asset URLs retain their existing paths.

## Local files and Git hygiene

| Location                                   | Treatment                                                                                                   |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| `node_modules/`                            | Installed dependencies; keep locally, ignore in Git.                                                        |
| `.next/`, `next-env.d.ts`, `*.tsbuildinfo` | Next.js and TypeScript generated files; keep locally, ignore in Git.                                        |
| `.verification/`                           | Local checks, screenshots, audit evidence, and separately installed browser/PDF tools; preserve and ignore. |
| `.impeccable/design.json`                  | Tracked tool configuration; retain its location.                                                            |
| `.impeccable/review/`                      | Generated local design reviews; ignore.                                                                     |
| `.agents/`, `skills-lock.json`             | Tracked skill instructions and provenance; retain their locations.                                          |
| `archive/`                                 | Preserve all original documents and historical assets. Do not delete or replace without owner approval.     |
| `docs/cv/`                                 | Preserved export and previews relocated from working-output folders; keep tracked.                          |
| `scripts/cv/`                              | Preserved generator and input; keep tracked.                                                                |
| `output/`, `tmp/`                          | Reserved for future disposable working files; ignore. Their empty directories were removed during cleanup.  |
| `coverage/`, `.vercel/`, Python bytecode   | Local generated artifacts; ignore.                                                                          |

Ignore rules do not untrack existing files. The cleanup does not stage changes,
alter Git history, or remove existing uncommitted work. Configuration and
tool configurations remain at their expected locations. The owner requested
that AGENTS.md and CLAUDE.md live in docs/, with README.md remaining at the
root. Assistants may require explicit configuration or a direct reference to
these relocated instructions. Next.js's development-time agent integration can
recreate a root AGENTS.md; no framework code or configuration was changed to
suppress that behavior. There are no manually maintained duplicate root copies.

## Offline CV tooling

`scripts/cv/build_cv.py` uses its adjacent `cv.json` snapshot and writes
`output/pdf/Kasra_Janesar_CV_2026_Two_Page.pdf`, creating the directory if needed.
It requires Python with `reportlab` and `pypdf`; these are optional offline tools,
not application dependencies. Run it from the repository root with:

```powershell
python scripts/cv/build_cv.py
```

The generator does not run during the Next.js build. Its JSON is a historical
snapshot, not the live content source: the website uses `src/data/`. The saved
export and previews in `docs/cv/` are preserved separately from future output.
Neither `docs/` nor `archive/` is served as a static directory by Next.js.

## Documentation ownership and deferred work

README owns setup, [PRODUCT.md](PRODUCT.md) owns product rules,
[DESIGN.md](DESIGN.md) owns visual decisions, and supporting reports live in
`docs/`. The dependency audit is historical
evidence and was moved without rewriting its findings or original paths.

The owner subsequently requested removal of unused code and assets. The unused
`components/home/featured-project.tsx`, `components/home/skills.tsx`,
`data/media.ts`, and `ui/section.tsx` modules were removed, along with the
retired featured card branch and obsolete homepage exports. Unreferenced
generated workspace images and three project concept SVGs were removed.
Their original provenance is preserved in
`reports/retired-asset-provenance.json`. Supplied portrait photos, the current
character and its provenance, CV documents, offline tooling, and tool-specific
configuration remain preserved.

Some existing PRODUCT and design-tool descriptions refer to earlier homepage/CV
layouts. Historical descriptions are retained as context. Cleanup of the retired
components removes their unused styles only; active theme tokens, animations,
content, layout, and dependencies remain unchanged.

## Test removal and local maintenance

The owner requested removal of `tests/theme.test.mjs` and
`tests/security.http.mjs`, along with the `test` and `test:security` npm scripts.
Both files were confirmed to match their committed versions before removal and
remain recoverable through Git history (`git log -- tests/`). No CI workflow
references them, and there is no test-only configuration or application
dependency to remove: the tests used Node's built-in modules. The optional
Playwright peer declaration in Next.js's lockfile metadata is framework metadata,
not a direct test dependency; the lockfile stays unchanged.

Keep TypeScript checking, ESLint, formatting, and production build commands.
Do not recreate the deleted automated tests. Existing ignored local browser
tools and captures can be used for manual verification without adding a suite
to the repository. Historical test results in the dependency audit remain
unchanged as evidence of the earlier review.

The disposable `.verification/npm-cache/` directory contained npm's `_cacache`,
`_logs`, and update-notifier marker. It was removed; browser/PDF tools, dependency
reports, screenshots, and original CV archives are preserved. `.next/` and
`node_modules/` remain installed locally and ignored. `tsconfig.tsbuildinfo` is
generated incremental compiler metadata and is already excluded by
`*.tsbuildinfo`; it is not tracked.

The optional offline PDF generator still requires Python; it is independent of
the portfolio build. Its input snapshot and saved export remain preserved.

## Verification after test removal (24 October 2026)

TypeScript checking, ESLint, production build, changed-file formatting, and
`git diff --check` pass. All four routes and all five source image references
resolve. Existing local Chrome checks pass across 16 route/theme/viewport
combinations, including theme switching and persistence; the pre-existing
missing favicon request is excluded from console-error checks.

Checksums confirm all 50 files under `src/` and `public/` are unchanged from
the beginning of this cleanup, alongside both relocated documents, archives,
tool configuration, dependencies, and lockfile. Documentation paths and the
package scripts are the only edited file contents. No files were staged, and
the removed tests were not recreated.

## Unused-code cleanup

The TypeScript import graph identified four unreachable modules; after their
removal all 32 remaining source modules are reachable from App Router entries.
The unused `featuredProjectId` and `skillHighlights` exports and the featured
ProjectCard branch were removed. The active project-card rendering and the
About toolkit retain their content.

The following generated assets had no remaining application references and
were removed: `workspace-dark.png`, `workspace-light.png`, `projects/escape.svg`,
`projects/pathfolio.svg`, and `projects/studyhub.svg`. The empty
`public/images/projects/` directory was removed. Both supplied portrait photos
and the current character remain preserved, including their original metadata.

The initial broad CSS scan was rejected by automatic approval review because
of possible dynamic/CSS-module class matches. A narrower audit removed 27 rules
owned by 11 exact class names from the retired featured-project and skills
components; navigation and other unrelated styles were retained.

TypeScript checking, ESLint, the production build, asset-path checks, and
`git diff --check` pass. Dependencies and the lockfile are unchanged; nothing is
staged. Local audit evidence remains in ignored `.verification/`, without
recreating the deleted test suite or saving screenshot images.

Browser checks confirm unchanged page text, links, loaded images, and theme
behavior across all 16 route/theme/viewport combinations. Exact screenshot-hash
comparison was inconsistent: two runs of the same final build differed from
baseline on different pages. Pixel-identical rendering is therefore not claimed;
the repeated mismatch is retained as a verification limitation.
