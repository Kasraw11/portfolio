import Link from "next/link";
import { home } from "@/data/home";
import styles from "./home.module.css";

export function HomeOverview() {
  return (
    <section className={styles.about} aria-labelledby="home-about-title">
      <h2 id="home-about-title">A little about me</h2>
      {home.about.split("\n\n").map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <Link
        className={`button button-secondary ${styles.action}`}
        href="/about"
      >
        More about me
      </Link>
    </section>
  );
}
