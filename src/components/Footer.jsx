import Reveal from "./Reveal";
import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[var(--border)] px-5 py-16 sm:px-8">
      <Reveal className="mx-auto max-w-5xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          06 // let's connect
        </p>
        <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
          Always open to talking AI/ML, backend systems, or good problems.
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-sm text-[var(--text-dim)]">
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-accent"
          >
            {profile.email}
          </a>
          <span className="hidden text-[var(--border-strong)] sm:inline">/</span>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
          >
            {profile.linkedin}
          </a>
          <span className="hidden text-[var(--border-strong)] sm:inline">/</span>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
          >
            {profile.github}
          </a>
        </div>

        <p className="mt-12 font-mono text-xs text-[var(--text-faint)]">
          designed &amp; built by {profile.name} · {new Date().getFullYear()}
        </p>
      </Reveal>
    </footer>
  );
}
