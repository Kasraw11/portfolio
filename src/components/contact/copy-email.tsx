"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copying" | "copied" | "error">(
    "idle",
  );

  async function copy() {
    setStatus("copying");
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="copy-email">
      <button
        type="button"
        className="button button-secondary"
        onClick={copy}
        disabled={status === "copying"}
      >
        {status === "copied"
          ? "Copied"
          : status === "copying"
            ? "Copying…"
            : "Copy email"}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          {status === "copied" ? (
            <path d="m5 12 4 4L19 6" />
          ) : (
            <>
              <rect x="8" y="8" width="12" height="12" rx="2" />
              <path d="M16 8V4H4v12h4" />
            </>
          )}
        </svg>
      </button>
      <p
        className={status === "error" ? "copy-email-error" : "sr-only"}
        role="status"
      >
        {status === "copied"
          ? "Email address copied to clipboard."
          : status === "error"
            ? "Copy unavailable. Select the email address above to copy it manually."
            : ""}
      </p>
    </div>
  );
}
