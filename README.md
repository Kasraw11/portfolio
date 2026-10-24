# Kasra portfolio

A Next.js App Router portfolio using TypeScript, Tailwind CSS, native system typography, persistent dark/light themes, and restrained glass surfaces.

## Run locally

Use Node.js 22.18+ (developed with Node.js 24).

```powershell
cd D:\Projects\portfolio
npm.cmd install
npm.cmd run dev
```

Open http://localhost:3000. On PowerShell, use npm.cmd to avoid script execution restrictions.

## Pages and files

- src/app: Home, About, Projects, Contact; global CSS theme and motion tokens.
- src/components: modular layout, home, about, project, and UI components.
- src/data/profile.ts: biography, contacts, and independent Home/About photo paths.
- src/data/home.ts: homepage introduction, about copy, and character asset.
- src/data/background.ts: experience, education, six soft skills, other tools, certificates, languages, and interests. No courses.
- src/data/skills.ts: Programming, Frontend, Backend & APIs, Databases, Cloud & Tools.
- src/data/projects.ts: current project descriptions, contributions, and technologies.
- src/data/cv.ts: structured CV identity, education, experience, project entries, skill groups, and languages, shown inside a closed-by-default disclosure with section dividers.
- archive/cv/Kasra_Janesar_CV_2026.docx: preserved source document, outside the public web root.
- public/images/portraits/homepage.jpeg and about.jpeg: supplied photos, framed through CSS.
- public/images/hero/kasra-character.png: transparent 3D-style illustration generated from the owner's photo. The adjacent provenance JSON records the built-in image generation prompt and references.
- docs/DESIGN.md: visual contract and theme tokens.
- docs/PRODUCT.md: product scope and content rules.
- docs/project-structure.md: folder responsibilities, local artifacts, and maintenance decisions.
- docs/reports/DEPENDENCY_AUDIT.txt: preserved dependency maintenance report.
- docs/cv: preserved two-page CV export and its preview images.
- scripts/cv: optional PDF generator and its preserved input snapshot.

Keep Next.js, TypeScript, ESLint, PostCSS, and package configuration at the repository root, alongside README.md, skills-lock.json, .agents/, and .impeccable/design.json. All other project Markdown lives in docs/, including [AGENTS.md](docs/AGENTS.md) and [CLAUDE.md](docs/CLAUDE.md). Coding assistants may need to be pointed explicitly to these relocated instructions. Next.js may recreate a root AGENTS.md through its development-time agent integration. See [the project structure guide](docs/project-structure.md) for the directory tree and cleanup decisions.

The latest source is Kasra_Janesar_CV_2026.docx. It supplies Monash education, updated employment dates, confirmed project contributions/technologies, and the LinkedIn URL. Supporting tools, certificates, and interests are retained from the earlier CV. Older CV documents and page images are preserved in archive/cv, outside the public web root. Do not reintroduce stale PDF text when updating the current document.

## Design

Dark retains its black/gray palette, neutral radial glow, and light-gray actions. Light uses a white canvas with dark navy accents and actions. Only light-mode primary buttons have the new navy glow. Variables in src/app/globals.css centralize colors, radial card gradients, glass material, typography, radii, and motion. Static gradient cards avoid visual noise. Interactive cards lift slightly on hover; introductions and disclosure content use brief entrance animations. Reduced motion, reduced transparency, and forced colors are supported. See [docs/DESIGN.md](docs/DESIGN.md) for the current layout contract.

Technical and soft skills occupy two visible cards, stacking on narrow screens. Other Tools is independent. The CV preview stays collapsed until opened. CV downloads are not offered; source documents are preserved outside public.

## Verify

```powershell
npm.cmd run build
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run format:check
npm.cmd audit --omit=dev
```

The former tests/ directory and its npm commands were removed at the owner's request. TypeScript checking, ESLint, and production builds remain available. Use local browser checks to verify routes, asset loading, and both themes after changes. Historical test results in the dependency report describe the repository before test removal.

Production hosting must redirect HTTP to HTTPS; verify TLS and security headers again on the deployed domain. The CSP permits inline scripts for static Next.js hydration, so it does not fully prevent inline script injection. CV documents are not served publicly; the About page retains the HTML preview. Files in archive are not served by Next.js, but remain visible to anyone with repository access.

Security review (7 October 2026): the production dependency audit reported zero vulnerabilities. The full audit reported five high-severity package entries from one unpatched development-only braces advisory, [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm), through eslint-config-next. No website request input reaches this linting chain in the current source. Run lint only against trusted project configuration and revisit the advisory before future deployments. Do not force npm's suggested downgrade to Next.js 14 tooling.

## Next refinements

Add real project screenshots, a PathFolio public link when available, social metadata and a favicon. Keep contribution wording accurate and avoid claiming unconfirmed deployment or outcomes. No database, authentication, CMS, or deployment has been added.

The About toolkit uses skillGroups in src/data/skills.ts. Unused homepage highlights and the retired featured-project layout have been removed.

Project cards show a short summary directly below the title, followed by technology tags. View project opens separate About the project and My contribution sections from the overview and contribution data fields; the control changes to Hide details. Newest projects remain first, without year labels.

The footer displays only copyright and accessible email, LinkedIn, and GitHub icons. The root template provides route transitions; PageContent progressively enhances marked cards with one-time viewport reveals. Reduced-motion settings and no-JavaScript rendering keep content immediately usable.

Home follows the supplied minimal portfolio reference: a centered “Hi, I’m Kasra.” introduction, short tagline, full-body illustrated character, Melbourne location and Contact me link. A divided about section leads to About, with labelled GitHub and LinkedIn links below. Projects and detailed skills live on their dedicated routes. The shared header has a KJ home link, right-aligned navigation, and a persistent theme toggle; navigation collapses into a menu on mobile. The character is a static transparent PNG, served responsively through Next.js Image, with a brief entrance that respects reduced motion.
