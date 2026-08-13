import { RevealGroup, RevealItem } from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading index="02" label="skills" title="What I work with" />

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {skills.map((group, gi) => (
          <RevealGroup
            key={group.title}
            stagger={0.05}
            delayChildren={gi * 0.08}
            className="flex flex-col gap-4"
          >
            <RevealItem as="p" className="font-mono text-xs uppercase tracking-widest text-[var(--text-faint)]">
              {group.title}
            </RevealItem>
            <div className="flex flex-wrap gap-2.5">
              {group.tags.map((tag) => (
                <RevealItem key={tag} y={10}>
                  <span className="inline-block cursor-default rounded-md border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-3 py-1.5 font-mono text-sm text-[var(--text)] transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_6px_20px_-8px_var(--color-accent)]">
                    {tag}
                  </span>
                </RevealItem>
              ))}
            </div>
          </RevealGroup>
        ))}
      </div>
    </section>
  );
}
