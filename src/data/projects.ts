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
      "Helps Australian students explore careers and identify the skills they need. I led development of the career suggestions and personalised roadmap.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "MySQL",
      "AWS",
    ],
    featuredTechnologies: ["Next.js", "FastAPI", "MySQL"],
    overview:
      "PathFolio is a career navigation platform for young people in Australia. It combines labour-market indicators with individual skills, education, and career goals to support career exploration, forecasting, and personalised roadmaps. It is my capstone project at Monash University.",
    contribution:
      "I led development of Career Suggestions and the Personalised Roadmap across the frontend and backend. I helped bring both features into a single Personalisation page so students could choose a suggested career and see what to work on next.",
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
      "Helps teams organise evidence and map it to ISO 27001 controls. I designed the evidence and control-mapping workflows and built application components.",
    technologies: ["JavaScript", "TypeScript", "CSS", "Python"],
    featuredTechnologies: ["TypeScript", "Python"],
    overview:
      "Auditrax helps teams prepare for ISO 27001 audits by bringing compliance evidence, control mapping, and audit-readiness gaps into a central platform. Its workflows support organising evidence and identifying areas that need attention before an audit.",
    contribution:
      "I contributed to system architecture, frontend design, and backend development for an ISO 27001 audit-readiness platform. I designed workflows for centralised compliance evidence, control mapping, and identifying audit-readiness gaps, and built interface and application components in a JavaScript and TypeScript codebase.",
    demoUrl: "https://auditrax.vercel.app/",
    logo: "/images/projects/auditrax.webp",
  },
  {
    id: "faunalens",
    workType: "group",
    name: "FaunaLens / Aussie EcoLens",
    category: "AI-assisted wildlife observation",
    year: 2026,
    status: "CV project",
    description:
      "Helps users organise wildlife observations and identify species. I built media management interfaces and integrated authentication and secure AWS uploads.",
    technologies: ["Next.js", "TypeScript", "Python", "AWS", "GCP"],
    featuredTechnologies: ["Next.js", "AWS", "GCP"],
    overview:
      "FaunaLens, also called Aussie EcoLens, connects an image library and media uploads with a team-built species-detection pipeline. The platform includes authentication, media management, notifications, and settings, with frontend flows integrated into serverless AWS and GCP services.",
    contribution:
      "I developed frontend features for media management, the image library, uploads, notifications, and settings. I integrated authentication and implemented secure media uploads using AWS, then tested interfaces and integrated frontend flows with the team's serverless AWS/GCP species-detection pipeline.",
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
      "Helps people find local recycling, reuse and repair services and sustainability events. I built registration, authentication and separate user and admin dashboards.",
    featuredTechnologies: ["Vue.js 3", "Firebase", "Cloud Firestore"],
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
    demoUrl: "https://smartloop-two.vercel.app/",
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
