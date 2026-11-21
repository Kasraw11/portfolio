import Image from "next/image";
import { profile } from "@/data/profile";
import { experience, education } from "@/data/background";
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
                <Image
                  className="education-logo"
                  src={item.logo}
                  alt=""
                  width={64}
                  height={64}
                  sizes="(max-width: 480px) 44px, 64px"
                />
                <div>
                  <h3>{item.qualification}</h3>
                  <p className="education-meta">
                    {item.institution} · {item.dates}
                  </p>
                  <p className="education-detail">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
