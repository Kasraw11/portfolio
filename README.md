# Kasra portfolio

A Next.js App Router portfolio using TypeScript, Tailwind CSS, native system typography, persistent dark/light themes, and restrained glass surfaces.

## Run locally

Use Node.js 22.18+ (developed with Node.js 24).

```powershell
cd D:\Projects\Protfolio
npm.cmd install
npm.cmd run dev
```

Open http://localhost:3000. On PowerShell, use npm.cmd to avoid script execution restrictions.

## Pages and files

- src/app: Home, About, Projects, Contact; global CSS theme and motion tokens.
- src/components: modular layout, home, about, project, and UI components.
- src/data/profile.ts: biography, contacts, resume URL, and independent Home/About photo paths.
- src/data/background.ts: experience, education, six soft skills, other tools, certificates, languages, and interests. No courses.
- src/data/skills.ts: Programming, Frontend, Backend & APIs, Databases, Cloud & Tools.
- src/data/projects.ts: current CV projects; featuredProjectId chooses PathFolio for Home.
- src/data/cv.ts: readable transcription of the current CV, shown inside a closed-by-default disclosure.
- public/Kasra_Janesar_CV_2026.docx: unchanged source document downloaded from About.
- public/images/portraits/homepage.jpeg and about.jpeg: supplied photos, framed through CSS.
- tests/theme.test.mjs: theme persistence and fallback tests.

The latest source is Kasra_Janesar_CV_2026.docx. It supplies Monash education, updated employment dates, confirmed project contributions/technologies, and the LinkedIn URL. Supporting tools, certificates, and interests are retained from the earlier CV. The old PDF and rendered page assets remain unused. Do not reintroduce stale PDF text when updating the current document.

## Design

Dark retains its black/gray palette, neutral radial glow, and light-gray actions. Light uses a white canvas with dark navy accents and actions. Only light-mode primary buttons have the new navy glow. Variables in src/app/globals.css centralize colors, radial card gradients, glass material, typography, radii, and motion. Static gradient cards avoid visual noise. Interactive cards lift slightly on hover; introductions and disclosure content use brief entrance animations. Reduced motion, reduced transparency, and forced colors are supported. See DESIGN.md for the current layout contract.

Technical and soft skills occupy two visible cards, stacking on narrow screens. Other Tools is independent. The CV preview stays collapsed until opened, and downloads the original Word file. Home has no CV download control.

## Verify

```powershell
npm.cmd run build
npm.cmd run lint
npm.cmd run format:check
npm.cmd test
```

## Next refinements

Add real project screenshots, a PathFolio public link when available, social metadata and a favicon. Keep contribution wording accurate and avoid claiming unconfirmed deployment or outcomes. No database, authentication, CMS, or deployment has been added.

Homepage skillHighlights are maintained independently from the full About skillGroups in src/data/skills.ts: Programming (Java, Python), Frontend (JavaScript, Next.js), APIs (FastAPI), Databases (MySQL), Cloud (AWS, GCP).

Project cards show a short summary directly below the title, followed by technology tags. View project opens separate About the project and My contribution sections from the overview and contribution data fields; the control changes to Hide details. Newest projects remain first, without year labels.
