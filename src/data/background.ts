// Updated employment and education from Kasra_Janesar_CV_2026.docx.
export const experience = [
  {
    organisation: "Dena Laboratory",
    role: "IT Specialist",
    dates: "January 2023 - February 2025",
    location: "Yasuj, Iran",
    responsibilities: [
      "Contributed to an online patient laboratory-results portal using C#, web APIs, Microsoft SQL Server, and React as part of a development team.",
      "Supported users after rollout, troubleshooting application issues and day-to-day operational requests.",
      "Provided hardware and software support, website maintenance, and end-user assistance.",
    ],
  },
  {
    organisation: "Shiraz University of Medical Sciences",
    role: "IT Department Intern",
    dates: "June - September 2022",
    location: "Shiraz, Iran",
    responsibilities: [
      "Contributed to a web-based course registration system using C#, web APIs, Microsoft SQL Server, and React.",
      "Assisted with internal network administration and supported students during course registration.",
    ],
  },
  {
    organisation: "Dena Laboratory",
    role: "IT Support Intern",
    dates: "July - October 2021",
    location: "Yasuj, Iran",
    responsibilities: [
      "Assisted with computer maintenance, website updates, and routine IT troubleshooting.",
      "Worked alongside the IT team to understand internal systems and network operations.",
    ],
  },
] as const;
export const education = [
  {
    qualification: "Master of Information Technology",
    institution: "Monash University",
    dates: "February 2025 - December 2026 (expected)",
    detail:
      "Melbourne, Australia · Capstone: PathFolio, career guidance and planning for young Australians.",
  },
  {
    qualification: "Bachelor of Computer Engineering",
    institution: "Islamic Azad University",
    dates: "2017 - 2022",
    detail: "Shiraz, Iran · Specialised in software engineering",
  },
] as const;
export const softSkills = [
  "Analytical Thinking & Problem-Solving",
  "Critical Thinking",
  "Collaboration & Teamwork",
  "Adaptability",
  "Initiative & Accountability",
  "Attention to Detail",
] as const;
// Retained supporting details from the previously supplied CV.
export const otherTools = [
  "Microsoft Office",
  "Adobe Photoshop",
  "Adobe Premiere",
  "Adobe Lightroom",
] as const;
export const certificates = [
  {
    title: "Java programming",
    detail: "Industrial Management Organization · 2020",
  },
  {
    title: "Python programming",
    detail: "Industrial Management Organization · 2021",
  },
] as const;
export const personalInterests = [
  {
    title: "Sport",
    detail:
      "Football, table tennis, badminton, and tennis. I also played football for four years on my high school team.",
  },
  {
    title: "Photography",
    detail:
      "More than five years working with professional cameras and two photography training courses.",
  },
  { title: "Music", detail: "Mixing music and creating podcasts." },
] as const;

export const languages = [
  { title: "English", detail: "IELTS overall 7.0" },
  { title: "Persian", detail: "Native" },
] as const;
