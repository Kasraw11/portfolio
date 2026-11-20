import Image from "next/image";
import type { Project } from "@/types/portfolio";
import styles from "./project-list.module.css";

const technologyLogos: Partial<Record<string, string>> = {
  "Next.js": "nextjs-icon",
  TypeScript: "typescript-icon",
  Python: "python",
  FastAPI: "fastapi-icon",
  MySQL: "mysql-icon",
  "AWS EC2": "aws-ec2",
  "AWS RDS": "aws-rds",
  JavaScript: "javascript",
  CSS: "css",
  "AWS S3": "aws-s3",
  "AWS Cognito": "aws-cognito",
  "Google Cloud": "google-cloud",
  "Vue.js 3": "vue",
  Firebase: "firebase-icon",
  "Cloud Firestore": "firebase-icon",
  "Cloud Functions": "google-cloud-functions",
  Bootstrap: "bootstrap",
};

export function ProjectRow({ project }: { project: Project }) {
  const thumbnail = project.image ?? project.logo;

  return (
    <article id={project.id} className={styles.row}>
      <div className={styles.copy}>
        <h2 className={styles.title}>{project.name}</h2>
        <p>{project.description}</p>
        {project.technologies.length > 0 && (
          <ul className={styles.tags} aria-label="Technologies">
            {project.technologies.map((technology) => {
              const logo = technologyLogos[technology];

              return (
                <li key={technology}>
                  {logo && (
                    <Image
                      className={styles.tagLogo}
                      src={`/images/technologies/${logo}.svg`}
                      alt=""
                      width={14}
                      height={14}
                    />
                  )}
                  {technology}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {(thumbnail || project.demoUrl) && (
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
          {project.demoUrl && (
            <a className={styles.visit} href={project.demoUrl}>
              Visit project<span className="sr-only">: {project.name}</span>
            </a>
          )}
        </div>
      )}
      <details className={styles.disclosure}>
        <summary className={styles.summary}>
          <span className={styles.expandLabel}>View details</span>
          <span className={styles.collapseLabel}>Hide details</span>
          <span className="sr-only">: {project.name}</span>
        </summary>
        <div className={styles.detailBody}>
          <p className={styles.context}>
            {project.category && `${project.category} · `}
            {project.workType === "group"
              ? "Group project"
              : "Individual project"}
          </p>
          <section>
            <h3>{project.overviewTitle}</h3>
            <p>{project.overview}</p>
          </section>
          <section>
            <h3>
              {project.workType === "group" ? "My contribution" : "My work"}
            </h3>
            <p>{project.contribution}</p>
          </section>
          {project.githubUrl && (
            <a className={styles.source} href={project.githubUrl}>
              GitHub
            </a>
          )}
        </div>
      </details>
    </article>
  );
}
