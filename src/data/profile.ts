import type { Profile } from "@/types/portfolio";

// Education, experience, and email are sourced from the supplied CV.
export const profile: Profile = {
  name: "Kasra",
  fullName: "Kasra Janesar",
  role: "IT Student & Software Developer",
  location: "Melbourne, Australia",
  homePhotoUrl: "/images/portraits/homepage.jpeg",
  aboutPhotoUrl: "/images/portraits/about.jpeg",
  introduction: "Full-stack development with a cloud focus.",
  about:
    "With a Bachelor's degree in Software Engineering, I'm currently completing my Master of Information Technology at Monash University. My experience spans full-stack development, frontend design, systems analysis and architecture, data analytics, and cloud technologies.\n\nI enjoy designing and building applications, understanding how systems work, and exploring new technologies. I also have a habit of paying attention to the smallest details, sometimes more than I probably should.",
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
