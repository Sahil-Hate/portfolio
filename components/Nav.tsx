"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import ScrambleText from "./ScrambleText";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    const ids = ["about", "experience", "projects", "skills", "publication", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id === "publication" ? "skills" : entry.target.id;
            setActive(id);
          }
        });
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-line backdrop-blur-md transition-all duration-300 ${
        scrolled ? "bg-bg/90 shadow-[0_1px_24px_rgba(0,0,0,0.18)]" : "bg-bg/70"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className={`mx-auto flex w-full max-w-[1120px] items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        <a href="#top" className="font-mono text-sm font-medium">
          <span className="text-accent">~/</span>sahil-hate
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {links.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`text-sm transition-colors ${
                      isActive ? "text-fg" : "text-muted hover:text-fg"
                    }`}
                  >
                    <ScrambleText text={link.label} trigger="hover" />
                  </a>
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        aria-hidden="true"
                        className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-[-2px] h-[2px] origin-left bg-accent"
        style={{ scaleX }}
      />
    </header>
  );
}
