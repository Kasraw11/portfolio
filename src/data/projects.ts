import type { Project } from "@/types/portfolio";

// Projects and contribution scope from Kasra_Janesar_CV_2026.docx and owner updates.
export const projects: readonly Project[] = [
  {
    id: "pathfolio",
    workType: "group",
    name: "PathFolio",
    category: "Career navigation platform",
    year: 2026,
    status: "CV project",
    description:
      "Australian students can explore careers, compare employment outlooks, and see which skills to develop for a role that interests them.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "MySQL",
      "AWS EC2",
      "AWS RDS",
    ],
    overviewTitle: "From career options to a plan",
    overview:
      "For our Monash capstone, we connected Australian labour-market data with a student’s interests, education, and skills. The tools let students weigh a role’s prospects alongside what it would take to pursue it.",
    contribution:
      "I led development of Career Suggestions and the Personalised Roadmap across the frontend and backend. After mentor feedback, our team combined them on one page so choosing a role and seeing the next steps became part of the same flow.",
    demoUrl: "https://path-folio.com/",
    image: "/images/projects/pathfolio.webp",
    imageAlt:
      "PathFolio homepage artwork showing a student at a branching path",
  },
  {
    id: "auditrax",
    workType: "group",
    name: "Auditrax",
    category: "AI-assisted compliance management",
    year: 2026,
    status: "CV project",
    description:
      "Preparing for an ISO 27001 audit means knowing which controls have evidence and where gaps remain. Auditrax gives teams one place to do both.",
    technologies: ["Next.js", "JavaScript", "TypeScript", "CSS", "Python"],
    overviewTitle: "Making evidence easier to trace",
    overview:
      "As a team gathers policies, records, and other evidence, it can see which controls those documents support and where more evidence is needed before the audit.",
    contribution:
      "My work centred on how teams collect evidence, connect it to controls, and identify gaps. I designed those workflows, built interface and application components, and contributed to the architecture and backend.",
    demoUrl: "https://auditrax.vercel.app/",
    image: "/images/projects/auditrax.webp",
    imageAlt: "Auditrax homepage introducing its audit-readiness platform",
  },
  {
    id: "faunalens",
    workType: "group",
    name: "FaunaLens / Aussie EcoLens",
    category: "AI-assisted wildlife observation",
    year: 2026,
    status: "CV project",
    description:
      "Upload a wildlife photo, get an AI-assisted species identification, and manage your sightings in one library.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Python",
      "AWS S3",
      "AWS Cognito",
      "Google Cloud",
    ],
    overviewTitle: "What happens after an upload",
    overview:
      "The media library connects to a team-built species detection pipeline that spans AWS and Google Cloud. Users can manage their photos and revisit their observations from the same app.",
    contribution:
      "On the frontend, I built the media library, upload, notifications, and settings screens. I also integrated sign-in and secure AWS uploads, then tested those flows with the team’s detection pipeline.",
    demoUrl: "https://fauna-lens.vercel.app/",
    image: "/images/projects/faunalens.webp",
    imageAlt: "FaunaLens homepage artwork featuring Australian wildlife",
  },
  {
    id: "smartloop",
    workType: "individual",
    name: "SmartLoop",
    category: "Sustainability web application",
    year: 2026,
    status: "CV project",
    description:
      "Where can I recycle this, get it repaired, or find a local workshop? SmartLoop brings those everyday questions together in one place.",
    technologies: [
      "Vue.js 3",
      "JavaScript",
      "Firebase",
      "Cloud Firestore",
      "Cloud Functions",
      "Bootstrap",
    ],
    overviewTitle: "Local recycling and reuse",
    overview:
      "Residents can look up what to do with household items, find nearby services, and discover sustainability events they can join and rate.",
    contribution:
      "I built SmartLoop independently with Vue and Firebase. The two dashboards serve residents and administrators, with role-based access and Firebase services handling registration, ratings, and data storage.",
    demoUrl: "https://smartloop-two.vercel.app/",
    image: "/images/projects/smartloop.webp",
    imageAlt: "SmartLoop homepage with recycling guidance and community events",
  },
];
