import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="page-width site-footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with care.
      </p>
      <a href="#top">
        Back to top{" "}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M12 20V4m-6 6 6-6 6 6" />
        </svg>
      </a>
    </footer>
  );
}
