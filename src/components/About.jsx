import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { about } from "../data/content";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading index="01" label="about" title="A bit about me" />
      <Reveal delay={0.1} className="max-w-3xl overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-3 font-mono text-xs text-[var(--text-faint)]">about.md</span>
        </div>
        <p className="p-6 text-lg leading-relaxed text-[var(--text-dim)] sm:p-8 sm:text-xl">
          {about.paragraph}
        </p>
      </Reveal>
    </section>
  );
}
