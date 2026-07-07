"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const sections = [
  { id: "about", index: "01" },
  { id: "experience", index: "02" },
  { id: "projects", index: "03" },
  { id: "skills", index: "04" },
  { id: "publication", index: "05" },
  { id: "contact", index: "06" },
];

export default function SectionHUD() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const hero = document.getElementById("top");
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(null);
        });
      },
      { rootMargin: "-30% 0px -55% 0px" }
    );
    if (hero) heroObserver.observe(hero);

    return () => {
      observer.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  const current = sections.find((s) => s.id === active);

  return (
    <div
      aria-hidden="true"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <AnimatePresence mode="wait">
        {current && (
          <motion.p
            key={current.id}
            className="font-mono text-[11px] tracking-widest text-muted [writing-mode:vertical-rl]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <span className="text-accent">[{current.index}]</span> {current.id} / 06
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
