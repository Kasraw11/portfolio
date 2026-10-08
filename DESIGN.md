---
name: Kasra portfolio
description: A minimal portfolio with native typography and selective glass surfaces.
colors:
  background: "#0a0a0a"
  surface: "#171717"
  surface-2: "#252525"
  foreground: "#f5f5f7"
  muted: "#adadb2"
  accent: "#e5e5e7"
  accent-2: "#d2d2d7"
  action: "#f5f5f7"
  action-hover: "#d2d2d7"
  on-accent: "#151515"
  line: "rgb(255 255 255 / 9%)"
  line-hover: "rgb(255 255 255 / 24%)"
  selection: "#383838"
  scrollbar: "#454545"
  scrollbar-hover: "#707070"
  glass-fill: "rgb(25 25 25 / 82%)"
  glass-navigation-fill: "rgb(22 22 22 / 64%)"
  glass-hover: "rgb(38 38 38 / 94%)"
  glass-border: "rgb(255 255 255 / 10%)"
  glass-highlight: "rgb(255 255 255 / 9%)"
  glass-selected: "rgb(255 255 255 / 10%)"
  canvas-glow: "rgb(255 255 255 / 11%)"
  portrait-glow: "rgb(255 255 255 / 13%)"
  light-background: "#ffffff"
  light-surface: "#ffffff"
  light-surface-2: "#f0f3f7"
  light-foreground: "#101e34"
  light-muted: "#59677a"
  light-accent: "#152d50"
  light-accent-2: "#152d50"
  light-action: "#152d50"
  light-action-hover: "#203e66"
  light-on-accent: "#ffffff"
  light-line: "rgb(29 29 31 / 10%)"
  light-line-hover: "rgb(29 29 31 / 24%)"
  light-selection: "#e0e7f0"
  light-scrollbar: "#b5b5bb"
  light-scrollbar-hover: "#85858b"
  light-glass-fill: "rgb(255 255 255 / 80%)"
  light-glass-navigation-fill: "rgb(255 255 255 / 62%)"
  light-glass-hover: "rgb(255 255 255 / 98%)"
  light-glass-border: "rgb(29 29 31 / 8%)"
  light-glass-highlight: "rgb(255 255 255 / 95%)"
  light-glass-selected: "rgb(29 29 31 / 6%)"
  light-canvas-glow: "rgb(31 56 89 / 5%)"
  light-portrait-glow: "rgb(31 56 89 / 9%)"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI Variable, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "clamp(4.3rem, 8vw, 6rem)"
    fontWeight: 600
    lineHeight: "1.03"
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI Variable, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 2.5vw, 1.9rem)"
    fontWeight: 600
    lineHeight: "1.3"
    letterSpacing: "-0.035em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI Variable, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "16px"
    lineHeight: "1.65"
rounded:
  control: "999px"
  card: "24px"
  navigation: "22px"
  technology: "8px"
spacing:
  section-mobile: "52px"
  section-desktop: "64px"
  page-mobile: "20px"
  page-desktop: "40px"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.control}"
    padding: "11px 20px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.control}"
    padding: "11px 20px"
---

# Kasra portfolio design

## Intent and source

A minimal, Apple-inspired personal portfolio: native system typography, a black-and-gray dark theme with near-white text, white light theme with dark navy accents, restrained glass and radial gradients. Dark is the first-visit default. The current content source is Kasra_Janesar_CV_2026.docx, supplied by the owner; explicitly requested soft skills and retained supporting tools supplement it.

## Canonical tokens

src/app/globals.css owns theme variables. The frontmatter mirrors the core palette, typography, radius, and spacing tokens. Components use variables rather than screen-specific colors. The --card-glow uses neutral white highlights in dark mode and a light-blue-to-white wash in light mode (149 193 245 at 32% fading through 230 242 255 at 24%). --card-gradient pairs with --glass-sheen and --glass-fill. The second skills card places its wash at the opposite corner. Primary buttons retain their original light-gray fill and control shadow in dark mode and use dark navy with a subtle navy halo in light mode; --action-glow and --action-glow-hover own this treatment. No animated backgrounds.

## Layout and content

Four routes share a floating navigation capsule and footer. Home opens with a small greeting, the full name Kasra Janesar, and the role directly beneath it, followed by location and View Projects / Contact me actions. Identity and the portrait use two columns from 700px and stack below that. Selected projects follow immediately: a full-width PathFolio feature with an About section above My contribution, separated by a subtle divider, then smaller Aussie EcoLens and Auditrax text previews side by side from 768px. About and compact skill highlights follow the work. Contact icons appear only in the minimal footer; Home has no duplicate social row or contact cards. Project previews are text-only, with no image slots or placeholders. HomePhotoUrl and aboutPhotoUrl configure independent supplied portraits. Home display crop remains scale 1.5 around 60%/68% with a bottom fade; About remains scale 1.35 around 44%/42%. Originals are unchanged.

About uses a sticky 280px profile rail from 1000px and a stacked profile on smaller screens. The main column has the biography, three-role experience timeline, both degrees. Technical Skills and Soft Skills occupy two gradient cards from 700px and stack below that; all six owner-selected soft skills stay visible. Other Tools is its own section. Certificates, Languages, and Interests each have their own native disclosure. Sports include football, table tennis, badminton, and tennis. There is no Courses section. Older supporting tools, certificates, and personal interests remain from the earlier supplied CV; old reference details are not displayed.

Projects displays PathFolio, Auditrax, FaunaLens / Aussie EcoLens, and SmartLoop first. SmartLoop is a Vue 3/Firebase sustainability application with confirmed contribution details. Native disclosures explain individual contributions. PathFolio has a confirmed stack but no supplied public URL. Auditrax and FaunaLens link to the CV-provided demos. Online Course Registration, Android Calculator, and Food Ordering System Design follow the newer projects. Cards have no date/year labels. No invented results or screenshots. Contact has one minimal heading, a prominent email panel with mailto and copy actions, LinkedIn/GitHub cards, and a separate link to the About CV section. Copy reports success or a manual-copy fallback.

The CV starts collapsed at the bottom of About. Its expanded view uses a distinct name/contact header, full-width section dividers, grouped education/work/project entries, aligned dates, semantic responsibility lists, and labelled skill/language rows. Dividers use existing line tokens; typography and spacing establish hierarchy without extra cards. On mobile, dates and skill values stack beneath their labels. It opens a responsive, accessible text version of the latest document with owner-requested terminology and section updates, without a download action. The source document is preserved in archive/cv outside the public web root; its coursework line is omitted from the website preview per owner preference. Old PDF/page assets are retained but no longer referenced. Home/navigation contain no CV download.

## Motion and accessibility

Identity, hero details, and the About introduction settle by 8px over 480ms; details content fades in over 240ms. Clickable project/contact cards lift by 3px on precise-pointer hover, and text-link arrows move 3px. Content cards and the profile rail gain a slight surrounding shadow on mouse hover or keyboard focus within, using the shared card-hover-shadow token: neutral depth in dark mode and a muted navy shadow in light mode. Static skills cards do not lift or use a pointer cursor. Touch devices avoid hover-only shadows; forced colors disables decorative shadows. Use the shared ease-out and motion variables. Reduced motion disables animations and movement. Reduced transparency uses solid surfaces; forced colors restores system surfaces and visible borders. Keep keyboard focus, skip navigation, native disclosures, contrast, and theme persistence intact.

## Maintenance

Buttons and text actions use labels without decorative arrows. Linked social cards retain their external-link affordance. Contact no longer includes the CV promotion/link; CV viewing lives on About; downloads are removed.

Project card actions read "Project details"; expanded disclosures retain "Hide details". The hero navigation CTA remains "View Projects".

Keep biography, projects, experience, skills, and contact details in typed data files. Content width is capped at 1200px, with 20px mobile and 40px desktop gutters. Preserve equivalent content and layout across themes. Do not add skill percentages, heavy glow, floating logos, or unrelated decorative cards.

Page titles use simple labels: About me, Projects, Contact. All share a full-width PageIntro above the page content, including About above its profile/content split. Titles use a 40px-to-56px scale, 550 weight, 1.1 line height, and -0.045em tracking inside a restrained translucent glass frame. The title-glass/title-glow/title-gradient tokens create navy gradient lettering and a soft navy halo in light mode, and neutral silver-white lettering in dark mode. Frames use 18px corners, a fine highlight, and 16px blur with reduced-transparency and forced-color fallbacks. Headers have 40px/56px top space and 32px/40px below, with no subtitle or divider. Contact aligns its location metadata opposite the heading and places email/social cards side by side from 900px, eliminating the empty left column.

Homepage skillHighlights are maintained independently from the full About skillGroups in src/data/skills.ts: Programming (Java, Python), Frontend (JavaScript, Next.js), APIs (FastAPI), Databases (MySQL), Cloud (AWS, GCP).

Light primary buttons use a translucent navy fill with a 165-degree glass sheen, fine inset edges, and layered navy-blue glow. Hover increases the halo without pulsing. The action-sheen/action-glass-edge/action-glow tokens control this light-only treatment. Reduced transparency uses a solid navy fill; forced colors uses system button colors. Dark primary buttons retain their previous styling.

Project cards show a short summary directly below the title, followed by technology tags. View project opens separate About the project and My contribution sections from the overview and contribution data fields; the control changes to Hide details. Newest projects remain first, without year labels.

Project technology tags use dedicated project-tag tokens: solid dark navy (#152d50) with white (#ffffff) text in light mode; medium gray (#55585e) with light (#f5f5f7) text in dark mode. This treatment is scoped to project tags.

Project ownership is explicit: PathFolio, Auditrax, and FaunaLens are group projects with a My contribution section. SmartLoop and the three earlier projects are individual projects with a My work section. Ownership labels appear alongside project categories and are driven by the typed workType field.

Hero name and role use a shared hero-text-gradient: deep navy to muted blue in light mode, and a neutral white-to-gray gradient in dark mode. Only these two text elements receive the effect; the greeting, supporting copy, and dark background remain unchanged. Forced colors restores solid text.

Navigation page links are centered using equal flexible side columns on desktop, with the theme toggle at right. Mobile menu/theme controls and expanded links are centered. The hero role sits below the full name with balanced line wrapping, weight 500, a 1.25rem-to-1.6rem scale, 1.45 line height, and -0.02em tracking.

Light-mode active navigation uses a muted navy (#203e66) pill with white text through nav-selected tokens. Dark mode keeps its neutral active state. The hero role has no supporting summary beneath it.

Navbar glass uses 64% charcoal fill in dark and 62% white fill in light, with 28px blur and 125% saturation. Active links use a subtle glass sheen: neutral gray in dark, translucent navy in light. Dark hero text stays strictly grayscale.

CV viewing controls share a pill-shaped neon orbit border with a four-second rotation and soft static halo. The cv-fill/cv-text/cv-orbit-color/cv-orbit-trail/cv-halo tokens keep the dark version charcoal and silver, and the light version navy with a blue highlight. The homepage Contact me action reuses the orbit with its existing accent color (navy in light, silver in dark) and transparent fill. Reduced motion leaves a static highlight; forced colors removes the decorative ring and uses system button colors. No CV download action is shown.

The footer is a minimal single row: copyright year and Kasra at left, email/LinkedIn/GitHub outline icons at right. No tagline, visible contact text, extra navigation, or back-to-top label. Icon links have accessible labels, tooltips, and 44px hit areas.

Route changes use React ViewTransition through the root template: page content fades out in 140ms and arrives with a 10px settle over 320ms; the shared navigation and footer stay outside the animated boundary. Browsers without view-transition support receive a short CSS entrance. Projects, About, and Contact reveal their marked cards once when they enter the viewport, with a maximum 110ms batch stagger. Reveals use the independent translate property so hover transforms still work. Default content remains visible without JavaScript. Reduced motion disables route and card animation, including a preference change during a reveal; keyboard focus cancels a reveal immediately.
