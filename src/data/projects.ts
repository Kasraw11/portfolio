import type { Project } from "@/types/portfolio";

export const featuredProjectId = "pathfolio";

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
      "Career guidance and personalised planning for young Australians.",
    technologies: ["Next.js", "TypeScript", "Python", "FastAPI", "AWS"],
    overview:
      "PathFolio is a career navigation platform for young people in Australia. It combines labour-market indicators with individual skills, education, and career goals to support career exploration, forecasting, and personalised roadmaps. It is my capstone project at Monash University.",
    contribution:
      "I designed and implemented the frontend and implemented the backend for several features.",
  },
  {
    id: "auditrax",
    workType: "group",
    name: "Auditrax",
    category: "AI-assisted compliance management",
    year: 2026,
    status: "CV project",
    description:
      "An AI-assisted platform for managing ISO 27001 audit readiness.",
    technologies: ["JavaScript", "TypeScript", "CSS", "Python"],
    overview:
      "Auditrax helps teams prepare for ISO 27001 audits by bringing compliance evidence, control mapping, and audit-readiness gaps into a central platform. Its workflows support organising evidence and identifying areas that need attention before an audit.",
    contribution:
      "I contributed to system architecture, frontend design, and backend development for an ISO 27001 audit-readiness platform. I designed workflows for centralised compliance evidence, control mapping, and identifying audit-readiness gaps, and built interface and application components in a JavaScript and TypeScript codebase.",
    demoUrl: "https://auditrax.vercel.app/",
  },
  {
    id: "faunalens",
    workType: "group",
    name: "FaunaLens / Aussie EcoLens",
    category: "AI-assisted wildlife observation",
    year: 2026,
    status: "CV project",
    description:
      "A wildlife observation platform with AI-assisted species detection.",
    technologies: ["Next.js", "TypeScript", "Python", "AWS", "GCP"],
    overview:
      "FaunaLens, also called Aussie EcoLens, connects an image library and media uploads with a team-built species-detection pipeline. The platform includes authentication, media management, notifications, and settings, with frontend flows integrated into serverless AWS and GCP services.",
    contribution:
      "I developed frontend features for media management, the image library, uploads, notifications, and settings. I integrated authentication and implemented secure media uploads using AWS, then tested interfaces and integrated frontend flows with the team's serverless AWS/GCP species-detection pipeline.",
    demoUrl: "https://fauna-lens.vercel.app/login",
  },
  {
    id: "smartloop",
    workType: "individual",
    name: "SmartLoop",
    category: "Sustainability web application",
    year: 2026,
    status: "CV project",
    description:
      "Find recycling, reuse, and repair services and local sustainability events.",
    technologies: [
      "Vue.js 3",
      "JavaScript",
      "Firebase",
      "Cloud Firestore",
      "Cloud Functions",
      "Bootstrap",
    ],
    overview:
      "SmartLoop is a sustainability web application that helps users find recycling, reuse, and repair services and discover community events. It supports event registration and ratings, with separate user and admin dashboards. Authentication and role-based access control access to the platform, while Firestore and Cloud Functions support data storage and server-side functionality.",
    contribution:
      "I developed responsive interfaces, authentication, role-based access, routing, form validation, user and admin dashboards, event registration, and ratings. I integrated Cloud Firestore and Firebase Cloud Functions to support database operations and server-side functionality.",
  },
  // Earlier projects from the original CV; years were not supplied.
  {
    id: "course-registration",
    workType: "individual",
    name: "Online Course Selection and Registration",
    category: "Web application",
    status: "CV project",
    description:
      "A course selection app with student and administration tools.",
    technologies: ["React", "JavaScript"],
    overview:
      "This web application lets students select and manage their courses. Administrators can manage courses and student records through dedicated tools. The interface is built with React.",
    contribution:
      "I developed a React web application for students to select and manage their courses, with administration tools for managing courses and student records.",
  },
  {
    id: "android-calculator",
    workType: "individual",
    name: "Android Calculator",
    category: "Android application",
    status: "CV project",
    description: "A simple Android app for everyday mathematical calculations.",
    technologies: ["Java", "Android"],
    overview:
      "An Android application for performing basic mathematical calculations. Built using Java, it focuses on straightforward calculator functionality.",
    contribution:
      "I built an Android application using Java to perform basic mathematical calculations.",
  },
  {
    id: "food-ordering-design",
    workType: "individual",
    name: "Online Food Ordering System Design",
    category: "Software design",
    status: "CV project",
    description: "A UML design study of an online food ordering system.",
    technologies: ["Rational Rose", "UML"],
    overview:
      "A software design study documenting how an online food ordering system is structured and how its ordering workflows and interactions operate. The project uses UML diagrams in Rational Rose to describe the system.",
    contribution:
      "I analysed and designed an online food ordering system, documenting its structure, workflows, and interactions using UML diagrams in Rational Rose.",
  },
];
