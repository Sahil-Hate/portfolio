import Section from "./Section";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { site } from "@/content/site";

export default function Contact() {
  return (
    <Section id="contact" index="06" label="contact" title="Get in touch">
      <Reveal>
        <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          I read every message. If you want to talk about a role, a system, or a
          project, email is the fastest way to reach me.
        </p>
        <Magnetic strength={0.15} className="mt-8">
          <a
            href={`mailto:${site.email}`}
            className="font-display link-underline inline-block text-2xl font-bold text-accent transition-[letter-spacing] duration-300 hover:tracking-wide sm:text-4xl"
          >
            {site.email}
          </a>
        </Magnetic>
        <ul className="mt-10 flex flex-wrap gap-6">
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-mono text-sm text-muted hover:text-fg"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-mono text-sm text-muted hover:text-fg"
            >
              GitHub
            </a>
          </li>
        </ul>
      </Reveal>
    </Section>
  );
}
