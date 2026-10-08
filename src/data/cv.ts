// Website CV adapted from Kasra_Janesar_CV_2026.docx; coursework is omitted per owner preference.
export interface CvEntry {
  title: string;
  subtitle?: string;
  location?: string;
  period?: string;
  technologies?: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  link?: { label: string; href: string };
}

export interface CvSection {
  id: string;
  title: string;
  paragraphs?: readonly string[];
  entries?: readonly CvEntry[];
  groups?: readonly { label: string; value: string }[];
  items?: readonly string[];
}

export const cvIdentity = {
  name: "Kasra Janesar",
  headline: "Software development / Full-stack / Cloud technologies",
};

export const cvSections: readonly CvSection[] = [
  {
    id: "profile",
    title: "Profile",
    paragraphs: [
      "Master of Information Technology student at Monash University with experience in full-stack development, frontend design, system architecture and design, data analytics, and cloud technologies. Strong problem-solving skills with an interest in building practical technical solutions. Seeking opportunities in DevOps or software engineering.",
    ],
  },
  {
    id: "education",
    title: "Education",
    entries: [
      {
        title: "Master of Information Technology",
        subtitle: "Monash University",
        location: "Melbourne, Australia",
        period: "Feb 2025 - Dec 2026",
        paragraphs: [
          "Capstone project: PathFolio - career guidance and planning for young Australians.",
        ],
      },
      {
        title: "Bachelor of Computer Engineering",
        subtitle: "Islamic Azad University",
        location: "Shiraz, Iran",
        period: "2017 - 2022",
        paragraphs: ["Specialized in software engineering"],
      },
    ],
  },
  {
    id: "technical-skills",
    title: "Technical skills",
    groups: [
      {
        label: "Programming",
        value: "Python, JavaScript, TypeScript, C#, Java, R, C++",
      },
      {
        label: "Frontend",
        value: "React, Next.js, Vue.js, HTML, CSS",
      },
      {
        label: "Backend and APIs",
        value: "FastAPI, REST APIs, C# Web API",
      },
      {
        label: "Databases",
        value: "PostgreSQL, Microsoft SQL Server, MySQL",
      },
      {
        label: "Cloud",
        value: "AWS, Google Cloud Platform",
      },
      {
        label: "Development tools",
        value: "Git, GitHub, Vercel",
      },
    ],
  },
  {
    id: "work-experience",
    title: "Work experience",
    entries: [
      {
        title: "IT Specialist",
        subtitle: "Dena Laboratory",
        location: "Yasuj, Iran",
        period: "Jan 2023 - Feb 2025",
        bullets: [
          "Contributed to an online patient laboratory-results portal using C#, web APIs, Microsoft SQL Server and React as part of a development team.",
          "Supported users after rollout, troubleshooting application issues and resolving day-to-day operational requests.",
          "Provided hardware and software support, maintained the website and assisted end users.",
        ],
      },
      {
        title: "IT Department Intern",
        subtitle: "Shiraz University of Medical Sciences",
        location: "Shiraz, Iran",
        period: "Jun - Sep 2022",
        bullets: [
          "Contributed to a web-based course registration system using C#, web APIs, Microsoft SQL Server and React.",
          "Assisted with internal network administration and supported students during course registration.",
        ],
      },
      {
        title: "IT Support Intern",
        subtitle: "Dena Laboratory",
        location: "Yasuj, Iran",
        period: "Jul - Oct 2021",
        bullets: [
          "Assisted with computer maintenance, website updates and routine IT troubleshooting.",
          "Worked alongside the IT team to learn the organisation's systems and internal network operations.",
        ],
      },
    ],
  },
  {
    id: "projects",
    title: "Projects",
    entries: [
      {
        title: "PathFolio",
        subtitle: "Career navigation platform",
        period: "2026",
        technologies: "Next.js, TypeScript, Python, FastAPI, AWS",
        bullets: [
          "Designed and implemented the frontend.",
          "Implemented the backend for several features.",
        ],
      },
      {
        title: "Auditrax",
        subtitle: "AI-assisted compliance platform",
        period: "2026",
        technologies: "JavaScript, TypeScript, CSS, Python",
        bullets: [
          "Contributed to system architecture, frontend design and backend development for an ISO 27001 audit-readiness platform.",
          "Designed workflows for centralised compliance evidence, control mapping and identifying audit-readiness gaps.",
          "Built interface and application components in a JavaScript and TypeScript codebase.",
        ],
      },
      {
        title: "FaunaLens / Aussie EcoLens",
        subtitle: "Wildlife AI Assisted observation platform",
        period: "2026",
        technologies: "Next.js, TypeScript, Python, AWS, GCP",
        bullets: [
          "Developed frontend features for media management, the image library, uploads, notifications and settings.",
          "Integrated authentication and implemented secure media uploads using AWS.",
          "Tested interfaces and integrated frontend flows with a team-built serverless AWS/GCP species-detection pipeline.",
        ],
        link: {
          label: "fauna-lens.vercel.app/login",
          href: "https://fauna-lens.vercel.app/login",
        },
      },
      {
        title: "SmartLoop",
        subtitle: "Sustainability Web Application",
        period: "2026",
        technologies:
          "Vue.js 3, JavaScript, Firebase, Cloud Firestore, Cloud Functions, Bootstrap",
        bullets: [
          "Developed a sustainability platform to help users find recycling, reuse and repair services and discover community events.",
          "Implemented responsive interfaces, authentication, role-based access, routing, form validation, user/admin dashboards, event registration and ratings.",
          "Integrated Cloud Firestore and Firebase Cloud Functions to support database operations and server-side functionality.",
        ],
      },
      {
        title: "Online Course Selection and Registration",
        technologies: "React.js",
        bullets: [
          "Developed a web application for students to select and manage courses, with admin tools for managing courses and students.",
        ],
      },
      {
        title: "Android Calculator",
        technologies: "Java",
        bullets: [
          "Built an Android application to perform basic mathematical calculations.",
        ],
      },
      {
        title: "Online Food Ordering System Design",
        technologies: "Rational Rose",
        bullets: [
          "Analysed and designed an online food ordering system, documenting system structure, workflows, and interactions using UML diagrams in Rational Rose.",
        ],
      },
    ],
  },
  {
    id: "soft-skills",
    title: "Soft skills",
    items: [
      "Problem solving",
      "Analytical thinking",
      "Teamwork",
      "Adaptability",
      "Initiative",
      "Attention to detail",
    ],
  },
  {
    id: "languages",
    title: "Languages",
    groups: [
      {
        label: "English",
        value: "IELTS Overall 7",
      },
      {
        label: "Persian",
        value: "Native",
      },
    ],
  },
];
