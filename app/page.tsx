
import Introduction from "./components/sections/introduction";
import AboutMe from "./components/sections/about-me";
import Project from "./components/sections/projects";

export default function Home() {
  return (
    <main className="flex flex-col gap-32">
      <section id="introduction" className="min-h-[80vh]">
        <Introduction />
      </section>

      <section id="about-me" className="min-h-screen scroll-mt-24">
        <AboutMe />
      </section>

      <section id="projects" className="min-h-screen scroll-mt-24">
        <Project />
      </section>
    </main>
  );
}
