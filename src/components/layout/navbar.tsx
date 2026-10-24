"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import styles from "./navbar.module.css";

export function Navbar() {
  const pathname = usePathname();
  const currentPage = navigation.find((item) => item.href === pathname)?.label;
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  return (
    <header
      className={styles.header}
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <div className={`page-width ${styles.inner}`}>
        <Link
          href="/"
          className={styles.brand}
          aria-label="Kasra Janesar — Home"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/images/brand/kj-logo.webp"
            alt=""
            width={192}
            height={192}
            sizes="44px"
            loading="eager"
            className={styles.brandImage}
          />
        </Link>
        <div className={styles.actions}>
          <ThemeToggle />
          <button
            ref={toggleRef}
            className={styles.menuToggle}
            type="button"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            aria-label={
              isOpen
                ? "Close navigation menu"
                : `Open navigation menu${currentPage ? `, current page: ${currentPage}` : ""}`
            }
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Close" : (currentPage ?? "Menu")}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d={isOpen ? "m6 6 12 12M6 18 18 6" : "M4 8h16M4 16h16"} />
            </svg>
          </button>
        </div>
        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={`${styles.navigation} ${isOpen ? styles.open : ""}`}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
