"use client";

import { motion, useReducedMotion } from "motion/react";
import Section from "./Section";
import { skills } from "@/content/skills";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <Section id="skills" index="04" label="skills" title="Skills">
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {skills.map((group, i) => (
          <div key={group.label}>
            <motion.h3
              className="font-mono text-sm font-medium text-accent"
              {...(reduce
                ? {}
                : {
                    initial: { opacity: 0, y: 12 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, margin: "-60px" },
                    transition: { duration: 0.3, delay: 0.04 * (i % 2), ease: EASE },
                  })}
            >
              {group.label}
            </motion.h3>
            <motion.ul
              className="mt-3 flex flex-wrap gap-2"
              {...(reduce
                ? {}
                : {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: true, margin: "-60px" },
                    variants: {
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.035, delayChildren: 0.05 * (i % 2) } },
                    },
                  })}
            >
              {group.items.map((item) => (
                <motion.li
                  key={item}
                  className="rounded border border-line bg-surface px-2.5 py-1 font-mono text-[13px] text-muted transition-colors duration-200 hover:border-accent/60 hover:text-fg"
                  {...(reduce
                    ? {}
                    : {
                        variants: {
                          hidden: { opacity: 0, y: 8, scale: 0.95 },
                          visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25, ease: EASE } },
                        },
                      })}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
