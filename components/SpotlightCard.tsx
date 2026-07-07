"use client";

import type { ReactNode } from "react";
import { useRef } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

export default function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const ref = useRef<HTMLElement>(null);

  function onMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <article ref={ref} onMouseMove={onMouseMove} className={`spotlight ${className}`}>
      {children}
    </article>
  );
}
