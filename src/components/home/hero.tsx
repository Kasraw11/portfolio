import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { Icon } from "@/components/ui/icon";

export function Hero() {
  const socialLinks = profile.contacts.filter(
    (contact) =>
      contact.href && ["Email", "GitHub", "LinkedIn"].includes(contact.label),
  );
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="hero hero-portrait-layout"
    >
      <div className="hero-main">
        <h1 id="hero-title">
          <span className="hero-greeting">Hello, I’m</span>
          <span className="hero-gradient-text">{profile.name}</span>
        </h1>
        <p className="hero-location">
          <Icon name="pin" />
          {profile.location}
        </p>
        <div className="hero-actions">
          <Link href="/projects" className="button button-primary">
            View Projects
          </Link>
          <Link href="/contact" className="text-link hero-contact">
            Contact me
          </Link>
        </div>
        <div className="hero-socials" aria-label="Professional contact links">
          {socialLinks.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              aria-label={contact.label}
              title={contact.label}
            >
              <Icon
                name={
                  contact.label === "GitHub"
                    ? "github"
                    : contact.label === "LinkedIn"
                      ? "linkedin"
                      : "mail"
                }
              />
            </a>
          ))}
        </div>
      </div>
      <div className="hero-portrait-stage">
        <div className="hero-portrait">
          {profile.homePhotoUrl ? (
            <Image
              src={profile.homePhotoUrl}
              alt={"Portrait of " + profile.name}
              fill
              sizes="(min-width: 1100px) 360px, (min-width: 640px) 45vw, 280px"
              preload
              className="hero-portrait-photo"
            />
          ) : (
            <div className="hero-portrait-placeholder">
              <svg
                viewBox="0 0 64 64"
                width="64"
                height="64"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                aria-hidden="true"
              >
                <circle cx="32" cy="22" r="10" />
                <path d="M13 54c0-11 8-19 19-19s19 8 19 19" />
              </svg>
              <p>Portrait coming soon</p>
            </div>
          )}
        </div>
      </div>
      <div className="hero-details">
        <p className="hero-role">
          <span className="hero-gradient-text">{profile.role}</span>
        </p>
      </div>
    </section>
  );
}
