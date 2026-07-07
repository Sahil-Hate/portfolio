"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const TYPE_MS = 55;
const DELETE_MS = 28;
const HOLD_MS = 2200;

type TypewriterProps = {
  phrases: readonly string[];
};

export default function Typewriter({ phrases }: TypewriterProps) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const phrase = phrases[index];

    if (!deleting && text === phrase) {
      const hold = setTimeout(() => setDeleting(true), HOLD_MS);
      return () => clearTimeout(hold);
    }

    if (deleting && text === "") {
      const next = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      }, 120);
      return () => clearTimeout(next);
    }

    const tick = setTimeout(
      () => {
        setText(deleting ? phrase.slice(0, text.length - 1) : phrase.slice(0, text.length + 1));
      },
      deleting ? DELETE_MS : TYPE_MS
    );
    return () => clearTimeout(tick);
  }, [text, deleting, index, phrases, reduce]);

  if (reduce) {
    return <span>{phrases[0]}</span>;
  }

  return (
    <span aria-label={phrases[0]}>
      <span aria-hidden="true">{text}</span>
      <span aria-hidden="true" className="caret" />
    </span>
  );
}
