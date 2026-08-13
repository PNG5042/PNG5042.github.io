import { RevealGroup } from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading index="03" label="projects" title="Things I've built" />
      <RevealGroup stagger={0.12} className="flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </RevealGroup>
    </section>
  );
}
