"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { getBootSnapshot, getBootServerSnapshot, markBooted, subscribe } from "@/lib/boot";

const EASE = [0.76, 0, 0.24, 1] as const;

const lines = [
  "$ ./init sahil-hate",
  "> loading modules ......... ok",
  "> mounting interface ...... ok",
  "> status: open to work",
] as const;

export default function Preloader() {
  const shouldBoot = useSyncExternalStore(subscribe, getBootSnapshot, getBootServerSnapshot);
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!shouldBoot || reduce) return;
    const timer = setTimeout(() => {
      setDone(true);
      markBooted();
    }, 1250);
    return () => clearTimeout(timer);
  }, [shouldBoot, reduce]);

  if (!shouldBoot || reduce) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          aria-hidden="true"
          className="fixed inset-0 z-[90] flex items-center justify-center bg-bg"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <div className="w-72 font-mono text-sm">
            {lines.map((line, i) => (
              <motion.p
                key={line}
                className={i === 0 ? "text-accent" : "mt-1.5 text-muted"}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + i * 0.22, duration: 0.2 }}
              >
                {line}
              </motion.p>
            ))}
            <motion.div
              className="mt-4 h-px bg-line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.15, duration: 1.0, ease: "linear" }}
              style={{ originX: 0 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
