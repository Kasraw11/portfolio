import type { ReactNode } from "react";
import { profile } from "@/data/profile";
import { experience, education, certificates } from "@/data/background";

function DetailList({
  items,
}: {
  items: readonly { title: string; detail: string }[];
}) {
  return (
    <dl className="about-detail-list">
      {items.map((item) => (
        <div key={item.title}>
          <dt>{item.title}</dt>
          <dd>{item.detail}</dd>
        </div>
      ))}
    </dl>
  );
}
function BackgroundDetail({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <details>
      <summary>
        {title}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M5 12h14M12 5v14" />
        </svg>
      </summary>
      <div className="about-extra-content">{children}</div>
    </details>
  );
}
export function AboutContent() {
  return (
    <>
      <header className="about-story">
        {profile.about.split("\n\n").map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </header>
      <section className="career-story" aria-labelledby="experience-title">
        <div className="about-heading">
          <h2 id="experience-title">Experience</h2>
        </div>
        <ol className="career-timeline">
          {experience.map((item) => (
            <li key={item.organisation + item.dates} data-reveal>
              <p className="career-date">{item.dates}</p>
              <h3>{item.role}</h3>
              <p className="career-organisation">
                {item.organisation} <span> / {item.location}</span>
              </p>
              <ul>
                {item.responsibilities.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
      <div className="about-facts-grid">
        <section aria-labelledby="education-title">
          <h2 id="education-title">Education</h2>
          <div className="education-list">
            {education.map((item) => (
              <article
                className="education-primary"
                key={item.qualification}
                data-reveal
              >
                <p className="career-date">{item.dates}</p>
                <h3>{item.qualification}</h3>
                <p>{item.institution}</p>
                <p className="supporting-copy">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
      <div className="about-extras" aria-label="More background details">
        <BackgroundDetail title="Certificates">
          <DetailList items={certificates} />
        </BackgroundDetail>
      </div>
    </>
  );
}
