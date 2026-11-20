import type { Metadata } from "next";
import { Projects } from "@/components/projects/projects";

export const metadata: Metadata = {
  title: "Projects - Kasra",
  description: "Explore Kasra's projects and the technologies behind them.",
};

export default function ProjectsPage() {
  return <Projects />;
}
