import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { Icon } from "@/components/ui/icon";

export function About() {
  return (
    <aside className="profile-rail" aria-label="Personal profile">
      <div className="about-portrait">
        {profile.aboutPhotoUrl ? (
          <Image
            src={profile.aboutPhotoUrl}
            alt={"Portrait of " + profile.name}
            fill
            sizes="(min-width: 1000px) 232px, (min-width: 640px) 180px, 112px"
          />
        ) : (
          <div className="portrait-placeholder">
            <svg
              viewBox="0 0 64 64"
              width="64"
              height="64"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              aria-hidden="true"
            >
              <circle cx="32" cy="22" r="10" />
              <path d="M13 54c0-11 8-19 19-19s19 8 19 19" />
            </svg>
            <span>Photo coming soon</span>
          </div>
        )}
      </div>
      <div className="profile-identity">
        <p className="profile-name">{profile.name}</p>
        <p>{profile.role}</p>
        <p className="profile-location">
          <Icon name="pin" />
          {profile.location}
        </p>
      </div>
      <div className="profile-actions">
        <Link className="button button-primary" href="/contact">
          Get in touch
        </Link>
        <a className="cv-button" href="#cv">
          View my CV
        </a>
      </div>
    </aside>
  );
}
