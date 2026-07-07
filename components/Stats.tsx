"use client";

import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { stats, type Stat } from "@/content/stats";

const EASE = [0.22, 1, 0.36, 1] as const;

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, stat.value, {
      duration: 1.4,
      delay: 0.12 * index,
      ease: EASE,
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, reduce, stat.value, index]);

  const shown = reduce ? stat.value : value;

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-2 border-l border-line pl-5"
      {...(reduce
        ? {}
        : {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-70px" },
            transition: { duration: 0.35, delay: 0.08 * index, ease: EASE },
          })}
    >
      <p className="font-display text-4xl font-extrabold text-fg sm:text-5xl">
        {stat.prefix}
        {shown}
        <span className="text-accent">{stat.suffix}</span>
      </p>
      <p className="max-w-[24ch] font-mono text-xs leading-relaxed text-muted">{stat.label}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8">
      <div className="grid gap-x-6 gap-y-10 border-y border-line py-14 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <StatItem key={stat.label} stat={stat} index={i} />
        ))}
      </div>
      <p className="mt-4 text-right font-mono text-xs text-muted/70">
        [metrics] from production work at Qualcomm, 2025
      </p>
    </div>
  );
}
