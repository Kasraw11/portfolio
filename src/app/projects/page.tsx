import type { Metadata } from "next";
import { Projects } from "@/components/projects/projects";
import { PageIntro } from "@/components/ui/page-intro";

export const metadata: Metadata = {
  title: "Projects — Kasra",
  description:
    "Explore Kasra’s projects, their ideas, and the technologies behind them.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro title="Projects" />
      <Projects />
    </>
  );
}
