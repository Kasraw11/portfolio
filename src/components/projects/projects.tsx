import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";

export function Projects() {
  return (
    <section
      id="projects"
      className="projects-collection"
      aria-label="Project collection"
    >
      {projects.length ? (
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="supporting-copy">
          Projects are being prepared. Check back soon to explore the work.
        </p>
      )}
    </section>
  );
}
