import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/portfolio";
import styles from "./project-list.module.css";

export function ProjectRow({ project }: { project: Project }) {
  const thumbnail = project.image ?? project.logo;

  return (
    <article id={project.id} className={styles.row}>
      <div className={styles.copy}>
        <h2 className={styles.title}>{project.name}</h2>
        <p>{project.description}</p>
        {project.technologies.length > 0 && (
          <ul className={styles.tags} aria-label="Technologies">
            {(project.featuredTechnologies ?? project.technologies).map(
              (technology) => (
                <li key={technology}>{technology}</li>
              ),
            )}
          </ul>
        )}
        {project.demoUrl && (
          <a className={styles.website} href={project.demoUrl}>
            Live website<span className="sr-only"> for {project.name}</span>
          </a>
        )}
      </div>
      <div className={styles.actions}>
        {thumbnail && (
          <Image
            className={project.image ? styles.preview : styles.logo}
            src={thumbnail}
            alt={project.imageAlt ?? ""}
            width={144}
            height={81}
          />
        )}
        <Link className={styles.visit} href={`/projects/${project.id}`}>
          Visit project<span className="sr-only">: {project.name}</span>
        </Link>
      </div>
    </article>
  );
}
