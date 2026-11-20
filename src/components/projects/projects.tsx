import { projects } from "@/data/projects";
import { ProjectRow } from "./project-row";
import styles from "./project-list.module.css";

export function Projects() {
  return (
    <section
      id="projects"
      className={styles.page}
      aria-labelledby="projects-title"
    >
      <h1 id="projects-title" className={styles.heading}>
        Projects
      </h1>
      {projects.length ? (
        <div className={styles.list}>
          {projects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="supporting-copy">Projects are being prepared.</p>
      )}
    </section>
  );
}
