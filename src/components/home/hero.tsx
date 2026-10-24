import Link from "next/link";
import { profile } from "@/data/profile";
import { Icon } from "@/components/ui/icon";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="hero hero-text-layout"
    >
      <div className="hero-main">
        <p className="hero-greeting">Hello, I’m</p>
        <h1 id="hero-title">
          <span className="hero-gradient-text">{profile.fullName}</span>
        </h1>
        <p className="hero-role">
          <span className="hero-gradient-text">{profile.role}</span>
        </p>
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
      </div>
    </section>
  );
}
