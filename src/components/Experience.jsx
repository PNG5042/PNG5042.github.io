import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading index="04" label="experience" title="Where I've worked" />

      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--border-strong)] sm:left-[9px]" />

        <div className="flex flex-col gap-12">
          {experience.map((job, i) => (
            <Reveal
              key={job.role + job.org}
              delay={i * 0.05}
              className="relative pl-8 sm:pl-10"
            >
              <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-[var(--bg)] sm:h-[18px] sm:w-[18px]" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold sm:text-xl">{job.role}</h3>
                <span className="font-mono text-xs text-[var(--text-faint)]">{job.period}</span>
              </div>
              <p className="mt-0.5 font-mono text-xs uppercase tracking-wider text-accent">
                {job.org}
              </p>

              <ul className="mt-4 space-y-2.5">
                {job.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    className="flex gap-2.5 text-sm leading-relaxed text-[var(--text-dim)] sm:text-base"
                  >
                    <span className="mt-1 text-accent">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
