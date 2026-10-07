import Link from "next/link";
import { featuredProjectId, projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";

export function FeaturedProject() {
  const project =
    projects.find((item) => item.id === featuredProjectId) ?? projects[0];
  return (
    <section className="section-shell" aria-labelledby="featured-title">
      <div className="section-heading">
        <h2 id="featured-title">Featured project</h2>
        <Link className="text-link" href="/projects">
          All projects
        </Link>
      </div>
      {project ? (
        <ProjectCard project={project} featured />
      ) : (
        <p className="supporting-copy">
          A featured project will be added soon.
        </p>
      )}
    </section>
  );
}
