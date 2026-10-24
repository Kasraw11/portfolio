import { profile } from "@/data/profile";

// Homepage copy follows the owner's supplied minimal portfolio reference.
export const home = {
  tagline: ["Software developer.", "Probably overthinking the details."],
  about: profile.about,
  characterScenes: [
    {
      id: "greeting",
      label: "Hello",
      src: "/images/hero/kasra-greeting.webp",
      alt: "Kasra waving hello in his original black vest, cream top, blue jeans, and off-white sneakers.",
      width: 1024,
      height: 1536,
    },
    {
      id: "coding",
      label: "Coding",
      src: "/images/hero/kasra-coding.webp",
      alt: "Kasra coding on a Lenovo ThinkPad X1 Carbon Gen 13 at a gaming-room desk, wearing an oatmeal sweater and sand chinos.",
      width: 1024,
      height: 1024,
    },
    {
      id: "architecture",
      label: "Architecture",
      src: "/images/hero/kasra-architecture.webp",
      alt: "Kasra designing software architecture at a holographic table, wearing a black T-shirt, dark blue jeans, and black shoes.",
      width: 1024,
      height: 1024,
    },
  ],
} as const;
