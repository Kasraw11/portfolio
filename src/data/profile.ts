import type { Profile } from "@/types/portfolio";

// Education, experience, and email are sourced from the supplied CV.
export const profile: Profile = {
  name: "Kasra",
  role: "IT Student & Software Developer",
  location: "Melbourne, Australia",
  resumeUrl: "/Kasra_Janesar_CV_2026.docx",
  homePhotoUrl: "/images/portraits/homepage.jpeg",
  aboutPhotoUrl: "/images/portraits/about.jpeg",
  introduction: "Full-stack development with a cloud focus.",
  about:
    "I’m Kasra, a Master of Information Technology student at Monash University in Melbourne. My experience spans full-stack development, frontend design, system architecture, data analytics, and cloud technologies. I enjoy solving problems and building practical technical solutions, and I’m seeking opportunities in DevOps or software engineering.",
  aboutSummary:
    "A Monash Master of IT student focused on full-stack development, system design, and cloud technologies, seeking opportunities in DevOps and software engineering.",
  background:
    "Master of Information Technology at Monash University, February 2025 to December 2026, with PathFolio as my capstone project. Bachelor of Computer Engineering, specialising in software engineering, Islamic Azad University, 2017–2022. Professional experience in healthcare IT and university systems.",
  interests: [
    "Software engineering",
    "DevOps",
    "Full-stack development",
    "Cloud technologies",
  ],
  contacts: [
    {
      label: "Email",
      value: "kasrajanesar@gmail.com",
      href: "mailto:kasrajanesar@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "Kasra Janesar",
      href: "https://www.linkedin.com/in/kasra-janesar-253630376",
    },
    {
      label: "GitHub",
      value: "Kasraw11",
      href: "https://github.com/Kasraw11",
    },
  ],
};
