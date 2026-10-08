import { Hero } from "@/components/home/hero";
import { FeaturedProject } from "@/components/home/featured-project";
import { HomeOverview } from "@/components/home/home-overview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProject />
      <HomeOverview />
    </>
  );
}
