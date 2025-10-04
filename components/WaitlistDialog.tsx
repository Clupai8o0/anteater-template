"use client";

import { useEffect, useRef } from "react";

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
};

export default function WaitlistDialog({ open, onOpenChange }: Props) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const firstFocusable = useRef<HTMLInputElement | null>(null);

  // Basic focus trap and ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
      if (e.key === "Tab") {
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            (last as HTMLElement).focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            (first as HTMLElement).focus();
            e.preventDefault();
          }
        }
      }
    };
    document.addEventListener("keydown", onKey);
    firstFocusable.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={() => onOpenChange(false)} />
      <div
        ref={dialogRef}
        className="relative bg-white w-full max-w-md mx-4 rounded-lg shadow-xl border border-gray-200 p-6"
      >
        <div className="flex items-start justify-between">
          <h2 className="text-xl font-semibold" style={{fontFamily:'Iowan Old Style, serif'}}>Join the Waitlist</h2>
          <button
            type="button"
            aria-label="Close"
            className="p-2 rounded-md hover:bg-gray-100"
            onClick={() => onOpenChange(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        <form className="mt-4 space-y-3" onSubmit={(e) => { e.preventDefault(); onOpenChange(false); }}>
          <label className="block text-sm text-gray-700">
            Email
            <input ref={firstFocusable} type="email" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--main-blue)]" placeholder="you@store.com" />
          </label>
          <button type="submit" className="w-full text-white px-4 py-2 rounded-md" style={{backgroundColor:'var(--main-blue)'}}>
            Join
          </button>
        </form>
      </div>
    </div>
  );
}
