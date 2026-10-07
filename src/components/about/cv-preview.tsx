import { cvIdentity, cvSections, type CvEntry } from "@/data/cv";
import { profile } from "@/data/profile";

function CvEntryContent({ entry }: { entry: CvEntry }) {
  return (
    <div className="cv-entry">
      <div className="cv-entry-heading">
        <h4>{entry.title}</h4>
        {entry.period && <span className="cv-date">{entry.period}</span>}
      </div>
      {(entry.subtitle || entry.location) && (
        <p className="cv-entry-meta">
          {entry.subtitle && <span>{entry.subtitle}</span>}
          {entry.location && <span>{entry.location}</span>}
        </p>
      )}
      {entry.technologies && (
        <p className="cv-technologies">
          <span>Technologies</span> {entry.technologies}
        </p>
      )}
      {entry.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {entry.bullets && (
        <ul className="cv-bullets">
          {entry.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
      {entry.link && (
        <a className="cv-entry-link" href={entry.link.href}>
          {entry.link.label}
        </a>
      )}
    </div>
  );
}

export function CvPreview() {
  return (
    <section
      id="cv"
      className="section-shell cv-section"
      aria-labelledby="cv-title"
    >
      <div className="section-heading">
        <div>
          <h2 id="cv-title">My CV</h2>
          <p className="supporting-copy">Read my current CV.</p>
        </div>
      </div>
      <details className="cv-disclosure">
        <summary className="cv-button">
          <span className="cv-show-label">View CV</span>
          <span className="cv-hide-label">Hide CV</span>
        </summary>
        <article className="cv-document" aria-label="Curriculum vitae">
          <header className="cv-identity">
            <p className="cv-name">{cvIdentity.name}</p>
            <p className="cv-headline">{cvIdentity.headline}</p>
            <p>{profile.location}</p>
            <ul className="cv-contacts" aria-label="Contact details">
              {profile.contacts.map((contact) => (
                <li key={contact.label}>
                  {contact.href ? (
                    <a href={contact.href}>
                      {contact.label === "Email"
                        ? contact.value
                        : contact.label}
                    </a>
                  ) : (
                    contact.value
                  )}
                </li>
              ))}
            </ul>
          </header>
          {cvSections.map((section) => (
            <section
              className="cv-content-section"
              key={section.id}
              aria-labelledby={`cv-${section.id}`}
            >
              <h3 id={`cv-${section.id}`}>{section.title}</h3>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.entries?.map((entry) => (
                <CvEntryContent key={entry.title} entry={entry} />
              ))}
              {section.groups && (
                <dl className="cv-facts">
                  {section.groups.map((group) => (
                    <div key={group.label}>
                      <dt>{group.label}</dt>
                      <dd>{group.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {section.items && (
                <ul className="cv-skills-list">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
      </details>
    </section>
  );
}
