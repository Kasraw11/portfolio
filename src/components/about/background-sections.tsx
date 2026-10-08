import type { ReactNode } from "react";
import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";
import {
  experience,
  education,
  certificates,
  softSkills,
  otherTools,
  languages,
  personalInterests,
} from "@/data/background";

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
        <p>{profile.about}</p>
        <ul className="interest-list" aria-label="Professional interests">
          {profile.interests.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
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
      <div id="skills" className="about-skills-grid">
        <section
          className="about-skill-card"
          data-reveal
          aria-labelledby="technical-skills-title"
        >
          <h2 id="technical-skills-title">Technical Skills</h2>
          <dl className="about-toolkit">
            {skillGroups.map((group) => (
              <div key={group.name}>
                <dt>{group.name}</dt>
                <dd>{group.skills.join(" / ")}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section
          className="about-skill-card"
          aria-labelledby="soft-skills-title"
          data-reveal
        >
          <h2 id="soft-skills-title">Soft Skills</h2>
          <ul className="soft-skills-list">
            {softSkills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
      <section
        className="other-tools-section"
        aria-labelledby="other-tools-title"
      >
        <h2 id="other-tools-title">Other Tools</h2>
        <ul className="technology-list">
          {otherTools.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <div className="about-extras" aria-label="More background details">
        <BackgroundDetail title="Certificates">
          <DetailList items={certificates} />
        </BackgroundDetail>
        <BackgroundDetail title="Languages">
          <DetailList items={languages} />
        </BackgroundDetail>
        <BackgroundDetail title="Interests">
          <DetailList items={personalInterests} />
        </BackgroundDetail>
      </div>
    </>
  );
}
