"use client";

import { useEffect, useRef } from "react";

type Props = {
  /** CSS selector for the header element to toggle classes on (e.g., '#site-header'). */
  target: string;
  /** Scroll Y threshold to consider the header scrolled. */
  threshold?: number;
  /** Classes to add when scrolled; space-separated Tailwind classes. */
  scrolledClasses?: string;
  /** Classes to remove when scrolled; optional symmetry. */
  baseClassesToToggleOff?: string;
};

export default function StickyHeaderClient({
  target,
  threshold = 8,
  scrolledClasses = "shadow-sm border-gray-300/80",
  baseClassesToToggleOff,
}: Props) {
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const el = document.querySelector<HTMLElement>(target);
    if (!el) return;

    const update = () => {
      const scrolled = window.scrollY > threshold;
      if (scrolled) {
        el.classList.add(...scrolledClasses.split(" ").filter(Boolean));
        if (baseClassesToToggleOff) {
          el.classList.remove(...baseClassesToToggleOff.split(" ").filter(Boolean));
        }
      } else {
        el.classList.remove(...scrolledClasses.split(" ").filter(Boolean));
      }
    };

    const onScroll = () => {
      if (rafId.current != null) return;
      rafId.current = requestAnimationFrame(() => {
        rafId.current = null;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, [target, threshold, scrolledClasses, baseClassesToToggleOff]);

  return null;
}
