"use client";

import { useEffect, useRef, useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Close on ESC and outside click
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (panelRef.current && !panelRef.current.contains(target) && btnRef.current && !btnRef.current.contains(target)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  // Focus return when closing
  useEffect(() => {
    if (!open && btnRef.current) {
      btnRef.current.focus();
    }
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={btnRef}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
        className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 p-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-6 w-6" aria-hidden="true">
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </svg>
      </button>

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="false"
        className={
          "absolute top-full left-0 right-0 z-50 bg-[#F1F0E8] border-t border-gray-300 shadow-lg transition-all duration-200 ease-out " +
          (open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none")
        }
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a className="block w-full text-left px-3 py-2 text-base font-medium text-white bg-[var(--main-blue)]" href="#home">Home</a>
          <a className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md" href="#models">Models</a>
          <a className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md" href="#features">Features</a>
          <a className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md" href="#pricing">Pricing</a>
          <div className="pt-4 border-t border-gray-300">
            <button
              type="button"
              className="text-white px-4 py-2 text-base font-medium bg-[var(--main-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
