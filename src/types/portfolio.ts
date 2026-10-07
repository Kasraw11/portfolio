export interface Project {
  id: string;
  name: string;
  workType: "group" | "individual";
  description: string;
  technologies: readonly string[];
  status:
    | "In progress"
    | "Completed"
    | "Placeholder"
    | "CV project"
    | "Details pending";
  category?: string;
  year?: number;
  image?: string;
  imageAlt?: string;
  overview: string;
  contribution: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface SkillGroup {
  name: string;
  icon: "code" | "server" | "database" | "cloud";
  description: string;
  skills: readonly string[];
}

export interface ContactLink {
  label: string;
  value: string;
  href?: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  resumeUrl?: string;
  homePhotoUrl?: string;
  aboutPhotoUrl?: string;
  introduction: string;
  about: string;
  aboutSummary: string;
  background: string;
  interests: readonly string[];
  contacts: readonly ContactLink[];
}
