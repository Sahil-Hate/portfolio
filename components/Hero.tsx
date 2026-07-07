"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useSyncExternalStore } from "react";
import { site } from "@/content/site";
import { getBootSnapshot, getBootServerSnapshot, subscribe, BOOT_DURATION } from "@/lib/boot";
import Magnetic from "./Magnetic";
import Typewriter from "./Typewriter";
import PipelineDiagram from "./PipelineDiagram";

const EASE = [0.22, 1, 0.36, 1] as const;

const phrases = [
  "distributed systems",
  "ML infrastructure",
  "agentic AI platforms",
  "backend services at scale",
] as const;

const NAME = "Sahil Hate";

const GitHubIcon = (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.91c.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.32-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.05.78 2.13v3.16c0 .3.21.67.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);

const LinkedInIcon = (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

const MailIcon = (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </svg>
);

export default function Hero() {
  const reduce = useReducedMotion();
  const booting = useSyncExternalStore(subscribe, getBootSnapshot, getBootServerSnapshot);
  const boot = booting && !reduce ? BOOT_DURATION : 0;

  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 90]);
  const fadeOut = useTransform(scrollY, [0, 500], [1, reduce ? 1 : 0.15]);

  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45, delay: boot + delay, ease: EASE },
        };

  return (
    <section
      id="top"
      className="relative mx-auto flex w-full max-w-[1120px] flex-col justify-center overflow-visible px-5 pb-20 pt-40 sm:px-8 md:min-h-[92vh] md:pt-32"
    >
      {/* ambient background */}
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="hero-glow absolute left-1/2 top-16 -z-10 h-[480px] w-[720px] -translate-x-1/2 rounded-full"
      />
      <PipelineDiagram />

      <motion.div style={{ y: parallaxY, opacity: fadeOut }}>
        <motion.p
          {...fadeUp(0)}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-sm text-muted"
        >
          <span>
            <span className="text-accent">[00]</span> hello · {site.location}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs">
            <span className="pulse-dot" aria-hidden="true" />
            open to full-time SWE roles
          </span>
        </motion.p>

        <h1
          aria-label={NAME}
          className="font-display mt-6 text-[17vw] font-extrabold leading-[0.95] sm:text-7xl md:text-8xl lg:text-[7.5rem]"
        >
          {reduce ? (
            <span className="block">{NAME}</span>
          ) : (
            <motion.span
              aria-hidden="true"
              className="block"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.045, delayChildren: boot + 0.1 } },
              }}
            >
              {NAME.split(" ").map((word) => (
                <span key={word} className="mr-[0.22em] inline-block overflow-hidden pb-[0.08em] align-bottom last:mr-0">
                  {word.split("").map((char, ci) => (
                    <motion.span
                      key={`${word}-${char}-${ci}`}
                      className="inline-block"
                      variants={{
                        hidden: { y: "112%", rotate: 6 },
                        visible: {
                          y: 0,
                          rotate: 0,
                          transition: { duration: 0.65, ease: EASE },
                        },
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.span>
          )}
        </h1>

        <motion.p {...fadeUp(0.55)} className="mt-7 max-w-2xl text-lg text-muted sm:text-xl">
          Software engineer building{" "}
          <span className="font-mono text-accent">
            <Typewriter phrases={phrases} />
          </span>
        </motion.p>

        <motion.div {...fadeUp(0.7)} className="mt-11 flex flex-wrap items-center gap-4">
          <Magnetic>
            <a
              href={site.resume}
              download
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-[#0c1017]"
            >
              <svg
                aria-hidden="true"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              >
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" />
              </svg>
              Download resume
            </a>
          </Magnetic>
          <ul className="flex items-center gap-2">
            {[
              { href: site.github, label: "GitHub", icon: GitHubIcon },
              { href: site.linkedin, label: "LinkedIn", icon: LinkedInIcon },
              { href: `mailto:${site.email}`, label: "Email", icon: MailIcon },
            ].map((item) => (
              <li key={item.label}>
                <Magnetic strength={0.4}>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    {...(item.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-line bg-surface/60 text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    {item.icon}
                  </a>
                </Magnetic>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* scroll hint */}
      {!reduce && (
        <motion.a
          href="#about"
          aria-label="Scroll to about section"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 font-mono text-xs text-muted md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: boot + 1.3, duration: 0.5 }}
          style={{ opacity: fadeOut }}
        >
          <motion.span
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            scroll
            <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 4v16m0 0 5-5m-5 5-5-5" />
            </svg>
          </motion.span>
        </motion.a>
      )}
    </section>
  );
}
