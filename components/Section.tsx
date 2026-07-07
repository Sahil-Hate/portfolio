"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import ScrambleText from "./ScrambleText";

const EASE = [0.22, 1, 0.36, 1] as const;

type SectionProps = {
  id: string;
  index: string;
  label: string;
  meta?: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, index, label, meta, title, children }: SectionProps) {
  const reduce = useReducedMotion();

  const reveal = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.35, delay, ease: EASE },
        };

  return (
    <section id={id} className="mx-auto w-full max-w-[1120px] px-5 py-20 sm:px-8 md:py-28">
      <motion.p {...reveal(0)} className="font-mono text-sm text-muted">
        <span className="text-accent">[{index}]</span> <ScrambleText text={label} trigger="view" />
        {meta ? <span className="text-muted/70"> · {meta}</span> : null}
      </motion.p>
      <h2 className="font-display mt-3 overflow-hidden text-3xl font-bold sm:text-4xl">
        {reduce ? (
          <span className="block">{title}</span>
        ) : (
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.08, ease: EASE }}
          >
            {title}
          </motion.span>
        )}
      </h2>
      <motion.div
        aria-hidden="true"
        className="mt-6 h-px w-full origin-left bg-line"
        {...(reduce
          ? {}
          : {
              initial: { scaleX: 0 },
              whileInView: { scaleX: 1 },
              viewport: { once: true, margin: "-80px" },
              transition: { duration: 0.6, delay: 0.15, ease: EASE },
            })}
      />
      <div className="mt-10">{children}</div>
    </section>
  );
}
