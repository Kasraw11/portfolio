"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function PageContent({ children }: { children: ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = container.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (
      !root ||
      reducedMotion.matches ||
      !window.IntersectionObserver ||
      !Element.prototype.animate
    )
      return;

    const animations = new Map<Element, Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        visible.forEach((entry, index) => {
          observer.unobserve(entry.target);
          if (entry.target.contains(document.activeElement)) return;
          // Content is visible without JavaScript. Translate is independent of
          // the existing hover transform, so reveals never interrupt card hover.
          const animation = entry.target.animate(
            [
              { opacity: 0.45, translate: "0 14px" },
              { opacity: 1, translate: "0 0" },
            ],
            {
              duration: 460,
              delay: Math.min(index * 55, 110),
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              fill: "backwards",
            },
          );
          animations.set(entry.target, animation);
          const finished = () => animations.delete(entry.target);
          animation.finished.then(finished, finished);
        });
      },
      { threshold: 0, rootMargin: "0px 0px -24px 0px" },
    );

    root
      .querySelectorAll("[data-reveal]")
      .forEach((element) => observer.observe(element));

    const cancelAnimations = () => {
      for (const animation of animations.values()) animation.cancel();
      animations.clear();
    };
    const onPreferenceChange = () => {
      if (reducedMotion.matches) {
        observer.disconnect();
        cancelAnimations();
      }
    };
    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const card = event.target.closest("[data-reveal]");
      if (card) {
        observer.unobserve(card);
        animations.get(card)?.cancel();
      }
    };
    reducedMotion.addEventListener("change", onPreferenceChange);
    root.addEventListener("focusin", onFocus);
    return () => {
      observer.disconnect();
      cancelAnimations();
      reducedMotion.removeEventListener("change", onPreferenceChange);
      root.removeEventListener("focusin", onFocus);
    };
  }, []);

  return (
    <div ref={container} className="page-content">
      {children}
    </div>
  );
}
