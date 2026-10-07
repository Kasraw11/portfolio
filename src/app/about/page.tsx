import type { Metadata } from "next";
import { About } from "@/components/home/about";
import { CvPreview } from "@/components/about/cv-preview";
import { AboutContent } from "@/components/about/background-sections";
import { PageIntro } from "@/components/ui/page-intro";

export const metadata: Metadata = {
  title: "About & Skills — Kasra",
  description:
    "Kasra’s background, education, interests, and technology toolkit.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro title="About me" />
      <div className="about-layout">
        <About />
        <div className="about-main">
          <AboutContent />
          <CvPreview />
        </div>
      </div>
    </>
  );
}
