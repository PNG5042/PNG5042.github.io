import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading index="05" label="education" title="Academic background" />

      <Reveal className="flex flex-col justify-between gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-6 sm:flex-row sm:items-center sm:p-8">
        <div>
          <h3 className="text-lg font-semibold sm:text-xl">{education.school}</h3>
          <p className="mt-1 text-[var(--text-dim)]">{education.degree}</p>
          <p className="mt-1 font-mono text-xs text-[var(--text-faint)]">{education.location}</p>
        </div>
        <span className="inline-flex w-fit items-center rounded-md border border-accent/40 bg-accent-dim px-3 py-1.5 font-mono text-xs text-accent">
          {education.period}
        </span>
      </Reveal>
    </section>
  );
}
