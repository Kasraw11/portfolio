import Link from "next/link";
import { featuredProjectId, projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";

export function FeaturedProject() {
  const project =
    projects.find((item) => item.id === featuredProjectId) ?? projects[0];
  const supportingProjects = ["faunalens", "auditrax"]
    .map((id) => projects.find((item) => item.id === id))
    .filter((item) => item !== undefined)
    .filter((item) => item.id !== project?.id);
  return (
    <section
      className="section-shell selected-projects"
      aria-labelledby="featured-title"
    >
      <div className="section-heading">
        <h2 id="featured-title">Selected projects</h2>
        <Link className="text-link" href="/projects">
          All projects
        </Link>
      </div>
      {project ? (
        <div className="selected-projects-grid">
          <ProjectCard project={project} featured />
          {supportingProjects.map((item) => (
            <ProjectCard key={item.id} project={item} featured compact />
          ))}
        </div>
      ) : (
        <p className="supporting-copy">
          A featured project will be added soon.
        </p>
      )}
    </section>
  );
}
