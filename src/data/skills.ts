import type { SkillGroup } from "@/types/portfolio";

// Owner-selected homepage highlights; independent of the detailed About toolkit.
export const skillHighlights: readonly Pick<SkillGroup, "name" | "skills">[] = [
  { name: "Programming", skills: ["Java", "Python"] },
  { name: "Frontend", skills: ["JavaScript", "Next.js"] },
  { name: "APIs", skills: ["FastAPI"] },
  { name: "Databases", skills: ["MySQL", "MongoDB", "Firebase Firestore"] },
  { name: "Cloud", skills: ["AWS", "GCP"] },
];

// Technical skills from the CV and owner-provided updates.
export const skillGroups: readonly SkillGroup[] = [
  {
    name: "Programming",
    icon: "code",
    description: "Languages I work with",
    skills: ["Python", "JavaScript", "TypeScript", "C#", "Java", "R", "C++"],
  },
  {
    name: "Frontend",
    icon: "code",
    description: "Interfaces for the web",
    skills: [
      "React",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },
  {
    name: "Backend & APIs",
    icon: "server",
    description: "Services and application logic",
    skills: ["FastAPI", "REST APIs", "C# Web API", "Firebase Cloud Functions"],
  },
  {
    name: "Databases",
    icon: "database",
    description: "Working with information",
    skills: [
      "PostgreSQL",
      "Microsoft SQL Server",
      "MySQL",
      "MongoDB",
      "Firebase Firestore",
    ],
  },
  {
    name: "Cloud & Tools",
    icon: "cloud",
    description: "Cloud platforms and delivery",
    skills: [
      "AWS (EC2, S3, RDS, IAM, Lambda)",
      "GCP",
      "Firebase",
      "Git",
      "GitHub",
      "Vercel",
    ],
  },
];
