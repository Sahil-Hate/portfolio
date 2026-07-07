"use client";

import { useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

const CHARS = "#/\\<>[]{}*+=_?";

type ScrambleTextProps = {
  text: string;
  trigger?: "hover" | "view";
  className?: string;
};

export default function ScrambleText({ text, trigger = "hover", className }: ScrambleTextProps) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(spanRef, { once: true, margin: "-40px" });
  const hasPlayed = useRef(false);

  const scramble = useCallback(() => {
    if (reduce) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    let frame = 0;
    intervalRef.current = setInterval(() => {
      frame += 1;
      const settled = frame - 2;
      const next = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < settled) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");
      setDisplay(next);
      if (settled >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplay(text);
      }
    }, 30);
  }, [text, reduce]);

  useEffect(() => {
    if (trigger !== "view" || !inView || hasPlayed.current) return;
    hasPlayed.current = true;
    const start = setTimeout(scramble, 60);
    return () => clearTimeout(start);
  }, [trigger, inView, scramble]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span
      ref={spanRef}
      className={className}
      onMouseEnter={trigger === "hover" ? scramble : undefined}
      aria-label={text}
    >
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
