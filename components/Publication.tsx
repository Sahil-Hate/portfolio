import Section from "./Section";
import Reveal from "./Reveal";
import { publication } from "@/content/publication";

export default function Publication() {
  return (
    <Section id="publication" index="05" label="publication" meta={publication.year} title="Publication">
      <Reveal>
        <article className="max-w-3xl rounded-xl border border-line bg-surface p-6 sm:p-7">
          <h3 className="font-display text-lg font-bold leading-snug sm:text-xl">
            {publication.title}
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            {publication.venue}, published in {publication.publisher}.
          </p>
          <a
            href={publication.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-5 inline-flex items-center gap-1.5 font-mono text-sm text-accent"
          >
            View on IEEE Xplore
            <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>
        </article>
      </Reveal>
    </Section>
  );
}
