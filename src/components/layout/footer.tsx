"use client";

import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import { Icon, type IconName } from "@/components/ui/icon";
import styles from "./footer.module.css";

const contactIcons: Record<string, IconName> = {
  Email: "mail",
  LinkedIn: "linkedin",
  GitHub: "github",
};

export function Footer() {
  const isHome = usePathname() === "/";
  const contacts = isHome
    ? ["GitHub", "LinkedIn"].flatMap((label) =>
        profile.contacts.filter((contact) => contact.label === label),
      )
    : profile.contacts;

  return (
    <footer
      className={`page-width ${isHome ? styles.homeFooter : "site-footer"}`}
    >
      {!isHome && (
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      )}
      <nav
        aria-label="Contact links"
        className={isHome ? styles.socials : "footer-socials"}
      >
        {contacts
          .filter((contact) => contact.href && contactIcons[contact.label])
          .map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              aria-label={contact.label}
              title={contact.label}
            >
              <Icon name={contactIcons[contact.label]} />
              {isHome && <span>{contact.label}</span>}
            </a>
          ))}
      </nav>
    </footer>
  );
}
