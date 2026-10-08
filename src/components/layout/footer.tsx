import { profile } from "@/data/profile";
import { Icon, type IconName } from "@/components/ui/icon";

const contactIcons: Record<string, IconName> = {
  Email: "mail",
  LinkedIn: "linkedin",
  GitHub: "github",
};

export function Footer() {
  return (
    <footer className="page-width site-footer">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <nav aria-label="Contact links" className="footer-socials">
        {profile.contacts
          .filter((contact) => contact.href && contactIcons[contact.label])
          .map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              aria-label={contact.label}
              title={contact.label}
            >
              <Icon name={contactIcons[contact.label]} />
            </a>
          ))}
      </nav>
    </footer>
  );
}
