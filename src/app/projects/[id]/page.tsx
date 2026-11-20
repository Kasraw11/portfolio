import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import styles from "@/components/projects/project-list.module.css";

type ProjectPageProps = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ id }) => ({ id }));
}

async function getProject(params: ProjectPageProps["params"]) {
  const { id } = await params;
  const project = projects.find((entry) => entry.id === id);
  if (!project) notFound();
  return project;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = await getProject(params);
  return {
    title: `${project.name} - Kasra`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject(params);
  const thumbnail = project.image ?? project.logo;

  return (
    <article className={styles.detail}>
      <Link className={styles.back} href={`/projects#${project.id}`}>
        Back to projects
      </Link>
      <h1>{project.name}</h1>
      <p className={styles.context}>
        {project.category && `${project.category} · `}
        {project.workType === "group" ? "Group project" : "Individual project"}
      </p>

      {thumbnail && (
        <Image
          className={project.image ? styles.detailImage : styles.logo}
          src={thumbnail}
          alt={project.imageAlt ?? ""}
          width={960}
          height={540}
        />
      )}

      <section aria-labelledby="project-overview">
        <h2 id="project-overview">About the project</h2>
        <p>{project.overview}</p>
      </section>
      <section aria-labelledby="project-contribution">
        <h2 id="project-contribution">
          {project.workType === "group" ? "My contribution" : "My work"}
        </h2>
        <p>{project.contribution}</p>
      </section>

      {project.technologies.length > 0 && (
        <ul className={styles.tags} aria-label="Technologies">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      )}
      {(project.demoUrl || project.githubUrl) && (
        <div className={styles.detailLinks}>
          {project.demoUrl && (
            <a className={styles.website} href={project.demoUrl}>
              Live website
            </a>
          )}
          {project.githubUrl && (
            <a className={styles.website} href={project.githubUrl}>
              GitHub
            </a>
          )}
        </div>
      )}
    </article>
  );
}
