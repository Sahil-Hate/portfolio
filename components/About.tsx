"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import Section from "./Section";
import { about } from "@/content/site";

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}&nbsp;
    </motion.span>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.5"],
  });

  const paragraphs = about.map((p) => p.split(" "));
  const totalWords = paragraphs.reduce((sum, words) => sum + words.length, 0);
  let wordIndex = 0;

  return (
    <Section id="about" index="01" label="about" title="About">
      <div ref={ref} className="max-w-2xl space-y-5 text-lg leading-relaxed sm:text-xl">
        {reduce
          ? about.map((sentence) => (
              <p key={sentence.slice(0, 32)} className="text-fg/90">
                {sentence}
              </p>
            ))
          : paragraphs.map((words, pi) => (
              <p key={about[pi].slice(0, 32)}>
                {words.map((word) => {
                  const start = (wordIndex / totalWords) * 0.85;
                  const end = start + 0.14;
                  wordIndex += 1;
                  return (
                    <Word
                      key={`${word}-${wordIndex}`}
                      word={word}
                      progress={scrollYProgress}
                      range={[start, Math.min(end, 1)]}
                    />
                  );
                })}
              </p>
            ))}
      </div>
    </Section>
  );
}
