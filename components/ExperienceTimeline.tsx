"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "@/content/experience";

export default function ExperienceTimeline() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <Section id="experience" index="02" label="experience" meta="2023 → 2026" title="Experience">
      <ol ref={ref} className="timeline relative border-l border-line pl-6 sm:pl-10">
        {/* spine that draws itself as you scroll */}
        <motion.span
          aria-hidden="true"
          className="absolute -left-px bottom-0 top-0 w-px origin-top bg-accent"
          style={{ scaleY: reduce ? 1 : scaleY }}
        />
        {experience.map((role, i) => (
          <li key={`${role.company}-${role.start}`} className={i === experience.length - 1 ? "" : "pb-14"}>
            <Reveal delay={0.06 * i}>
              <span
                aria-hidden="true"
                className="absolute -left-[5px] mt-2 h-[9px] w-[9px] rounded-full border-2 border-accent bg-bg"
              />
              <p className="font-mono text-sm text-accent">
                {role.start} → {role.end}
              </p>
              <h3 className="font-display mt-2 text-xl font-bold sm:text-2xl">
                {role.title} <span className="text-muted">· {role.company}</span>
              </h3>
              <p className="mt-1 font-mono text-sm text-muted">{role.location}</p>
              <ul className="mt-4 max-w-3xl space-y-3">
                {role.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 40)} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-[9px] h-[3px] w-[10px] shrink-0 bg-accent/60" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
