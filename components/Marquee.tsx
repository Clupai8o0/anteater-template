"use client";

import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  speed?: number; // px/s
  pauseOnHover?: boolean;
}>;

export default function Marquee({ children, speed = 60, pauseOnHover = true }: Props) {
  // We rely on Tailwind or global CSS for keyframes named 'marquee'. If absent, add a fallback inline style.
  const duration = 1000 * 30 / speed; // heuristic: base width of ~30rem segments
  return (
    <div className={`overflow-hidden ${pauseOnHover ? 'group' : ''}`}>
      <div
        className={`${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''} flex w-max animate-[marquee_linear_infinite] gap-0`}
        style={{ animationDuration: `${duration}s` as unknown as string }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
