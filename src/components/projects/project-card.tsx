import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/portfolio";

export function ProjectCard({
  project,
  featured = false,
  compact = false,
}: {
  project: Project;
  featured?: boolean;
  compact?: boolean;
}) {
  const projectContext = [
    project.category,
    project.workType === "group" ? "Group project" : "Individual project",
  ]
    .filter(Boolean)
    .join(" · ");

  if (featured) {
    return (
      <article
        id={project.id}
        className={`featured-project ${compact ? "featured-project-secondary" : "featured-project-lead"}`}
        data-reveal
      >
        <div className="featured-project-copy">
          <p className="project-category">{projectContext}</p>
          <div className="project-title">
            <h3>{project.name}</h3>
            {project.status === "Placeholder" && (
              <span className="project-status">Concept</span>
            )}
            {project.status === "Details pending" && (
              <span className="project-status">Details coming soon</span>
            )}
          </div>
          <p className="supporting-copy">{project.description}</p>
          {project.technologies.length > 0 && (
            <ul className="featured-technologies" aria-label="Technologies">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          )}
        </div>
        {!compact && (
          <div className="featured-project-details">
            <section aria-labelledby={`${project.id}-featured-about`}>
              <h4 id={`${project.id}-featured-about`}>About</h4>
              <p>{project.overview}</p>
            </section>
            <section aria-labelledby={`${project.id}-featured-contribution`}>
              <h4 id={`${project.id}-featured-contribution`}>
                My contribution
              </h4>
              <p>{project.contribution}</p>
            </section>
          </div>
        )}
        <div className="featured-project-actions">
          <Link
            className="text-link"
            href={`/projects#${project.id}`}
            aria-label={`Project details for ${project.name}`}
          >
            Project details
          </Link>
          {project.demoUrl && (
            <a className="text-link" href={project.demoUrl}>
              Live demo
            </a>
          )}
        </div>
      </article>
    );
  }
  return (
    <article id={project.id} className="project-card" data-reveal>
      {project.image && (
        <div className="project-image">
          <Image
            src={project.image}
            alt={project.imageAlt ?? project.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="project-body">
        <p className="project-category">{projectContext}</p>
        <div className="project-title">
          <h2>{project.name}</h2>
          {project.status === "Placeholder" && (
            <span className="project-status">Concept</span>
          )}
          {project.status === "Details pending" && (
            <span className="project-status">Details coming soon</span>
          )}
        </div>
        <p className="supporting-copy">{project.description}</p>
        {project.technologies.length > 0 && (
          <ul className="technology-list" aria-label="Technologies">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        )}
        <details className="project-overview">
          <summary>
            <span className="project-show-label">Project details</span>
            <span className="project-hide-label">Hide details</span>
            <span className="sr-only">— {project.name}</span>
          </summary>
          <div className="project-details-content">
            <section aria-labelledby={`${project.id}-overview`}>
              <h3 id={`${project.id}-overview`}>About the project</h3>
              <p className="supporting-copy">{project.overview}</p>
            </section>
            <section aria-labelledby={`${project.id}-contribution`}>
              <h3 id={`${project.id}-contribution`}>
                {project.workType === "group" ? "My contribution" : "My work"}
              </h3>
              <p className="supporting-copy">{project.contribution}</p>
            </section>
            {(project.githubUrl || project.demoUrl) && (
              <div className="project-links">
                {project.githubUrl && (
                  <a className="text-link" href={project.githubUrl}>
                    GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a className="text-link" href={project.demoUrl}>
                    Live demo
                  </a>
                )}
              </div>
            )}
          </div>
        </details>
      </div>
    </article>
  );
}
