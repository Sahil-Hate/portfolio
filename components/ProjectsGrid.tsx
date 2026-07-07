import Section from "./Section";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import { projects } from "@/content/projects";
import { publication } from "@/content/publication";

const ArrowIcon = (
  <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

export default function ProjectsGrid() {
  return (
    <Section id="projects" index="03" label="projects" meta="4 systems" title="Projects">
      <div className="grid gap-5 md:grid-cols-6">
        {projects.map((project, i) => (
          <Reveal
            key={project.name}
            delay={0.07 * (i % 2)}
            className={project.size === "large" ? "md:col-span-4" : "md:col-span-2"}
          >
            <SpotlightCard className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/70 hover:shadow-[0_16px_48px_-16px_rgba(0,0,0,0.4)] sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-bold sm:text-2xl">{project.name}</h3>
                <span aria-hidden="true" className="font-mono text-sm text-line transition-colors duration-300 group-hover:text-accent">
                  0{i + 1}
                </span>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.blurb}</p>
              <ul className="mt-4 space-y-2">
                {project.outcomes.map((outcome) => (
                  <li key={outcome.slice(0, 40)} className="flex gap-3 text-[15px] leading-relaxed">
                    <span aria-hidden="true" className="mt-[9px] h-[3px] w-[10px] shrink-0 bg-accent" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded border border-line bg-bg px-2 py-1 font-mono text-xs text-muted transition-colors duration-200 hover:border-accent/50 hover:text-fg"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                {(project.links.github || project.links.paper) && (
                  <div className="mt-5 flex flex-wrap gap-5">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline inline-flex items-center gap-1.5 font-mono text-sm text-accent"
                      >
                        GitHub {ArrowIcon}
                      </a>
                    )}
                    {project.links.paper && (
                      <a
                        href={publication.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline inline-flex items-center gap-1.5 font-mono text-sm text-accent"
                      >
                        Paper {ArrowIcon}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
