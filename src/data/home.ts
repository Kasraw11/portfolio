import { profile } from "@/data/profile";

// Homepage copy follows the owner's supplied minimal portfolio reference.
export const home = {
  tagline: ["Software developer.", "Probably overthinking the details."],
  about: profile.about,
  character: {
    src: "/images/hero/kasra-character.png",
    alt: "A 3D illustration of Kasra wearing glasses and a black vest, waving hello.",
  },
} as const;
