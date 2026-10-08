import { profile } from "@/data/profile";
import { Arrow } from "@/components/ui/arrow";
import { Icon } from "@/components/ui/icon";
import { CopyEmail } from "./copy-email";
import { PageIntro } from "@/components/ui/page-intro";

export function ContactContent() {
  const email = profile.contacts.find((contact) => contact.label === "Email");
  const socials = profile.contacts.filter((contact) =>
    ["LinkedIn", "GitHub"].includes(contact.label),
  );

  return (
    <div className="contact-page">
      <PageIntro
        title="Contact"
        meta={
          <p className="contact-location">
            <Icon name="pin" />
            {profile.location}
          </p>
        }
      />
      <div className="contact-destinations">
        {email && (
          <section
            className="contact-email-panel"
            data-reveal
            aria-labelledby="email-heading"
          >
            <div className="contact-panel-label">
              <span className="contact-icon">
                <Icon name="mail" />
              </span>
              <h2 id="email-heading">Email</h2>
            </div>
            <p className="contact-email-address">{email.value}</p>
            <p className="contact-email-caption">
              A direct line for opportunities and collaborations.
            </p>
            <div className="contact-email-actions">
              {email.href && (
                <a className="button button-primary" href={email.href}>
                  Send an email
                </a>
              )}
              <CopyEmail email={email.value} />
            </div>
          </section>
        )}
        <div className="contact-social-grid">
          {socials.map((contact) => {
            const contents = (
              <>
                <div className="contact-social-top">
                  <Icon
                    name={contact.label === "GitHub" ? "github" : "linkedin"}
                  />
                  {contact.href && <Arrow diagonal />}
                </div>
                <h2>{contact.label}</h2>
                <span className="contact-social-identity">{contact.value}</span>
              </>
            );
            return contact.href ? (
              <a
                key={contact.label}
                className="contact-card contact-social-card"
                data-reveal
                href={contact.href}
              >
                {contents}
              </a>
            ) : (
              <div
                key={contact.label}
                className="contact-card contact-social-card"
                data-reveal
              >
                {contents}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
