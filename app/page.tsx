import Nav from "@/components/Nav";
import Preloader from "@/components/Preloader";
import SectionHUD from "@/components/SectionHUD";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Stats from "@/components/Stats";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectsGrid from "@/components/ProjectsGrid";
import Skills from "@/components/Skills";
import Publication from "@/components/Publication";
import Contact from "@/components/Contact";
import LocalTime from "@/components/LocalTime";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <div aria-hidden="true" className="grain" />
      <Preloader />
      <Nav />
      <SectionHUD />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <ExperienceTimeline />
        <ProjectsGrid />
        <Skills />
        <Publication />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-[1120px] flex-wrap items-center justify-between gap-3 px-5 py-8 font-mono text-xs text-muted sm:px-8">
          <p>© 2026 {site.name}</p>
          <p>
            <LocalTime />
          </p>
          <p>Built with Next.js. Served as static files from a CDN.</p>
        </div>
      </footer>
    </>
  );
}
