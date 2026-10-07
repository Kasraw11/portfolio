import type { SVGProps, ReactNode } from "react";

export type IconName =
  | "sun"
  | "moon"
  | "pin"
  | "code"
  | "server"
  | "database"
  | "cloud"
  | "download"
  | "mail"
  | "github"
  | "linkedin";

const paths: Record<IconName, ReactNode> = {
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
    </>
  ),
  moon: <path d="M20.5 13.5A8.5 8.5 0 0 1 10.5 3.5 8.5 8.5 0 1 0 20.5 13.5Z" />,
  pin: (
    <>
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  code: <path d="m7 6-5 6 5 6m10-12 5 6-5 6M14 3l-4 18" />,
  server: (
    <>
      <rect x="3" y="3" width="18" height="7" rx="2" />
      <rect x="3" y="14" width="18" height="7" rx="2" />
      <path d="M7 6.5h.01M7 17.5h.01M11 6.5h6m-6 11h6" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" />
    </>
  ),
  cloud: <path d="M6 19a4 4 0 0 1-1-7.9A7 7 0 0 1 18.6 9a5 5 0 0 1 0 10H6Z" />,
  download: <path d="M12 3v12m-4-4 4 4 4-4M4 16v5h16v-5" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
  github: (
    <path d="M9 19c-4 1-4-2-5-2m10 5v-4c0-1-.4-1.7-1-2 3-.4 6-1.5 6-6a4.8 4.8 0 0 0-1.3-3.3A4.5 4.5 0 0 0 17.6 3S16.5 2.6 14 4a12 12 0 0 0-6 0C5.5 2.6 4.4 3 4.4 3a4.5 4.5 0 0 0-.1 3.7A4.8 4.8 0 0 0 3 10c0 4.5 3 5.6 6 6-.6.3-1 1-1 2v4" />
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7m0-10v.01M11 17v-7m0 3c0-4 6-4 6 0v4" />
    </>
  ),
};

export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
