"use client";

import { PropsWithChildren } from "react";
import { useInViewOnce } from "./useInViewOnce";

type Props = PropsWithChildren<{
  from?: "up" | "down" | "left" | "right";
  delayMs?: number;
}>;

export default function Revealed({ children, from = "up", delayMs = 0 }: Props) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const translate = {
    up: "translate-y-4",
    down: "-translate-y-4",
    left: "translate-x-4",
    right: "-translate-x-4",
  }[from];
  return (
    <div
      ref={ref}
      className={`${inView ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${translate}`} transition-all duration-700`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
