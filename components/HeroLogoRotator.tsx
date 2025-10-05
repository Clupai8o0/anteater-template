"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { useInViewOnce } from "./useInViewOnce";

type Item = { src: string; alt: string; name: string };

const ITEMS: Item[] = [
  { src: "/OpenAI.svg", alt: "ChatGPT logo", name: "ChatGPT" },
  { src: "/Grok.svg", alt: "Grok logo", name: "Grok" },
  { src: "/DeepSeek.svg", alt: "DeepSeek logo", name: "DeepSeek" },
  { src: "/Gemini.svg", alt: "Gemini logo", name: "Gemini" },
  { src: "/Perplexity.svg", alt: "Perplexity AI logo", name: "Perplexity" },
];

const DURATION_MS = 400; // match CSS in original snippet
const INTERVAL_MS = 2600; // time between switches

export default function HeroLogoRotator() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [prevPhase, setPrevPhase] = useState<"idle" | "enter" | "exit">("idle");
  const [overlayOn, setOverlayOn] = useState(false);
  const rdt = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rdi = useRef<ReturnType<typeof setInterval> | null>(null);
  const { ref, inView } = useInViewOnce<HTMLDivElement>();

  // respect reduced motion
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (m.matches) setPaused(true);
  }, []);

  const goTo = (next: number) => {
    setPrev(index);
    setIndex(((n) => next)(index));
    setPrevPhase("enter");
    // Next frame -> trigger exit transition for previous layer
    requestAnimationFrame(() => setPrevPhase("exit"));
    setOverlayOn(true);
    if (rdt.current) clearTimeout(rdt.current);
    rdt.current = setTimeout(() => { setPrev(null); setPrevPhase("idle"); setOverlayOn(false); }, DURATION_MS);
  };

  const next = () => goTo((index + 1) % ITEMS.length);
  const prevFn = () => goTo((index - 1 + ITEMS.length) % ITEMS.length);

  // autoplay
  useEffect(() => {
    if (paused || hovering || !inView) {
      if (rdi.current) clearInterval(rdi.current);
      rdi.current = null;
      return;
    }
    rdi.current = setInterval(next, INTERVAL_MS);
    return () => {
      if (rdi.current) clearInterval(rdi.current);
      rdi.current = null;
    };
  }, [index, paused, hovering, inView]);

  useEffect(() => () => { if (rdt.current) clearTimeout(rdt.current); }, []);

  const current = ITEMS[index];
  const previous = prev != null ? ITEMS[prev] : null;

  // Reserve space to avoid layout shift
  const labelMinCh = useMemo(() => 18, []);

  const maxNameLength = useMemo(() => Math.max(...ITEMS.map(i => i.name.length)), []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); prevFn(); }
    if (e.key === " " || e.key.toLowerCase() === "p") { e.preventDefault(); setPaused(p => !p); }
  };

  return (
    <div
      ref={ref}
      tabIndex={0}
      onKeyDown={onKeyDown}
  onMouseEnter={() => setHovering(true)}
  onMouseLeave={() => setHovering(false)}
      className="relative -mt-4 mb-4 flex justify-center items-center gap-4 h-40 outline-none"
      role="region"
      aria-roledescription="carousel"
      aria-label="AI model showcase"
      aria-live="polite"
      aria-atomic="true"
      aria-keyshortcuts="ArrowLeft,ArrowRight,Space,P"
    >
      {/* Purple overlay to hint transition; non-interactive */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 transition-opacity duration-[400ms] ease-in-out ${overlayOn ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: 'linear-gradient(0deg, rgba(137,103,220,0.10), rgba(137,103,220,0.10))' }}
      />
      {/* Controls for keyboard users, visually subtle */}
      <div className="sr-only" id="hero-rotator-controls-desc">Use the provided controls to pause or navigate models.</div>
      <div className="flex items-center gap-2">
        <button type="button" className="sr-only" aria-describedby="hero-rotator-controls-desc" onClick={prevFn}>Previous model</button>
        <button type="button" className="sr-only" aria-describedby="hero-rotator-controls-desc" onClick={() => setPaused(p => !p)}>{paused ? "Play" : "Pause"} rotation</button>
        <button type="button" className="sr-only" aria-describedby="hero-rotator-controls-desc" onClick={next}>Next model</button>
      </div>

      {/* Logo area (fixed size to avoid shift) */}
      <div className="relative w-24 h-24">
        {/* Exit layer for previous item */}
        {previous && (
          <div
            className={`absolute inset-0 transition-all duration-[400ms] ease-in-out ${prevPhase === 'enter' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            aria-hidden="true"
          >
            <Image src={previous.src} alt="" width={96} height={96} className="h-24 w-auto" style={{filter:'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0) contrast(1)'}} />
          </div>
        )}
        {/* Enter/current layer */}
        <div
          className={`absolute inset-0 transition-all duration-[400ms] ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        >
          <Image src={current.src} alt={current.alt} width={96} height={96} className="h-24 w-auto" style={{filter:'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0) contrast(1)'}} />
        </div>
      </div>

      {/* Label area (reserve width via ch units to reduce reflow) */}
      <div className="relative" style={{ minWidth: `${Math.max(14, maxNameLength)}ch` }}>
        {previous && (
          <div className={`absolute inset-0 transition-all duration-[400ms] ease-in-out ${inView ? 'opacity-0 -translate-y-4' : 'opacity-0 -translate-y-4'}`} aria-hidden="true">
            <span className="text-6xl font-bold" style={{fontFamily:'Iowan Old Style, serif', color:'black'}}>{previous.name}</span>
          </div>
        )}
        <div className={`absolute inset-0 transition-all duration-[400ms] ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <span className="text-6xl font-bold" style={{fontFamily:'Iowan Old Style, serif', color:'black'}}>{current.name}</span>
        </div>
      </div>
    </div>
  );
}
