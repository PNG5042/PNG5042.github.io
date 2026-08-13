import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiExternalLink } from "react-icons/fi";
import { RevealItem } from "./Reveal";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <RevealItem
      y={24}
      className="group rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_50px_-25px_var(--color-accent)] sm:p-8"
    >
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
        <h3 className="text-xl font-semibold sm:text-2xl">{project.title}</h3>
        <span className="font-mono text-xs text-[var(--text-faint)]">{project.period}</span>
      </div>
      <p className="mt-1 font-mono text-xs uppercase tracking-wider text-accent">
        {project.org}
      </p>

      <p className="mt-4 leading-relaxed text-[var(--text-dim)]">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded border border-[var(--border-strong)] px-2 py-0.5 font-mono text-[11px] text-[var(--text-dim)]"
          >
            {s}
          </span>
        ))}
      </div>

      <button
        onClick={() => setOpen((o) => !o)}
        className="mt-6 flex items-center gap-1.5 font-mono text-sm text-[var(--text)] transition-colors hover:text-accent"
        aria-expanded={open}
      >
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-accent"
        >
          <FiChevronDown />
        </motion.span>
        {open ? "hide details" : "view details"}
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="mt-4 space-y-3 border-t border-[var(--border)] pt-4">
              {project.bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="flex gap-2.5 text-sm leading-relaxed text-[var(--text-dim)] sm:text-base"
                >
                  <span className="mt-1 text-accent">▸</span>
                  <span>{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={project.repo}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 font-mono text-sm text-[var(--text-dim)] transition-colors hover:text-accent"
      >
        view repo <FiExternalLink size={13} />
      </a>
    </RevealItem>
  );
}
