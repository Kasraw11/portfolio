import Link from "next/link";
import { profile } from "@/data/profile";
import { skillHighlights } from "@/data/skills";
import { Arrow } from "@/components/ui/arrow";
import { Icon } from "@/components/ui/icon";

export function HomeOverview() {
  return (
    <section
      className="home-highlights"
      aria-label="About and skills highlights"
    >
      <div className="home-highlight">
        <h2>About me</h2>
        <p>{profile.aboutSummary}</p>
        <Link className="text-link" href="/about">
          More about me
        </Link>
      </div>
      <div className="home-highlight">
        <h2>Skills at a glance</h2>
        <dl className="home-skill-list">
          {skillHighlights.map((group) => (
            <div key={group.name}>
              <dt>{group.name}</dt>
              <dd>{group.skills.join(" · ")}</dd>
            </div>
          ))}
        </dl>
        <Link className="text-link" href="/about#skills">
          My skills
        </Link>
      </div>
    </section>
  );
}

export function HomeContact() {
  const contacts = ["LinkedIn", "Email"]
    .map((label) => profile.contacts.find((contact) => contact.label === label))
    .filter((contact) => contact !== undefined);
  return (
    <section className="home-contact" aria-label="Connect with Kasra">
      <div className="contact-cards">
        {contacts.map((contact) => {
          const content = (
            <>
              <Icon name={contact.label === "LinkedIn" ? "linkedin" : "mail"} />
              <div>
                <h2>{contact.label}</h2>
                <p>{contact.value}</p>
              </div>
              {contact.href && <Arrow diagonal />}
            </>
          );
          return contact.href ? (
            <a
              key={contact.label}
              className="contact-card contact-card-compact"
              href={contact.href}
            >
              {content}
            </a>
          ) : (
            <div
              key={contact.label}
              className="contact-card contact-card-compact contact-card-pending"
            >
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
