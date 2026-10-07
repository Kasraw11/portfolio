import { cvSections } from "@/data/cv";
import { profile } from "@/data/profile";
import { Icon } from "@/components/ui/icon";

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
          <p className="supporting-copy">
            Read my current CV or download the Word document.
          </p>
        </div>
        {profile.resumeUrl && (
          <a
            className="button button-secondary"
            href={profile.resumeUrl}
            download
          >
            Download CV (.docx) <Icon name="download" />
          </a>
        )}
      </div>
      <details className="cv-disclosure">
        <summary className="cv-button">
          <span className="cv-show-label">View CV</span>
          <span className="cv-hide-label">Hide CV</span>
        </summary>
        <div className="cv-document">
          {cvSections.map((section) => (
            <section key={section.title}>
              <h3>{section.title}</h3>
              {section.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </details>
    </section>
  );
}
