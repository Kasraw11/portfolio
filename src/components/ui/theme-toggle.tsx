"use client";

import { useSyncExternalStore } from "react";
import { getTheme, setTheme, subscribeToTheme } from "@/lib/theme";
import { Icon } from "@/components/ui/icon";

const getServerTheme = () => "dark" as const;

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getTheme,
    getServerTheme,
  );
  const label = `Switch to ${theme === "dark" ? "light" : "dark"} mode`;
  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={label}
      title={label}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <span className="theme-icon-light">
        <Icon name="sun" />
      </span>
      <span className="theme-icon-dark">
        <Icon name="moon" />
      </span>
    </button>
  );
}
