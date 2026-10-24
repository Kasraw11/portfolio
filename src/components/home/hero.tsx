import Link from "next/link";
import { profile } from "@/data/profile";
import { home } from "@/data/home";
import { CharacterScenes } from "./character-scenes";
import styles from "./home.module.css";

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className={styles.hero}>
      <div className={styles.introduction}>
        <h1 id="hero-title">Hi, I’m {profile.name}.</h1>
        <p className={styles.tagline}>
          {home.tagline.map((phrase, index) => (
            <span key={phrase}>
              {index > 0 && " "}
              <span className={styles.phrase}>{phrase}</span>
            </span>
          ))}
        </p>
      </div>
      <CharacterScenes scenes={home.characterScenes} />
      <div className={styles.hello}>
        <p>
          <span aria-hidden="true">📍</span> {profile.location}
        </p>
        <Link
          href="/contact"
          className={`text-link hero-contact ${styles.action}`}
        >
          Contact me
        </Link>
      </div>
    </section>
  );
}
