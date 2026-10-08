import Link from "next/link";
import { profile } from "@/data/profile";
import { skillHighlights } from "@/data/skills";

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
