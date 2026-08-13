import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiDownload,
  FiArrowDown,
} from "react-icons/fi";
import { profile } from "../data/content";
import TypeText from "./TypeText";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease } },
});

export default function Hero() {
  const [nameDone, setNameDone] = useState(false);
  const words = profile.name.split(" ");
  const totalChars = profile.name.replace(/ /g, "").length;
  let charIndex = -1;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pt-24 sm:px-8"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-5xl">
        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp(0)}
          className="font-mono text-sm text-[var(--text-dim)]"
        >
          <span className="text-accent">$</span> whoami
        </motion.p>

        <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          {words.map((word, wi) => (
            <span key={wi} className="inline-block whitespace-nowrap">
              {word.split("").map((ch, ci) => {
                charIndex += 1;
                const i = charIndex;
                return (
                  <motion.span
                    key={ci}
                    className="inline-block"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + i * 0.028,
                      ease,
                    }}
                    onAnimationComplete={() => {
                      if (i === totalChars - 1) setNameDone(true);
                    }}
                  >
                    {ch}
                  </motion.span>
                );
              })}
              {wi < words.length - 1 ? <>&nbsp;</> : null}
            </span>
          ))}
        </h1>

        <div className="mt-5 min-h-[3.5rem] max-w-2xl font-mono text-base text-[var(--text-dim)] sm:text-lg">
          {nameDone && <TypeText text={profile.tagline} speed={16} />}
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp(1.9)}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-[var(--text-faint)] sm:text-sm"
        >
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            <FiMail className="text-accent" /> {profile.email}
          </a>
          <span className="flex items-center gap-1.5">
            <FiMapPin className="text-accent" /> {profile.location}
          </span>
          <span className="flex items-center gap-1.5">
            <FiPhone className="text-accent" /> {profile.phone}
          </span>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            <FiLinkedin className="text-accent" /> {profile.linkedin}
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp(2.1)}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={profile.resumeUrl}
            download
            className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-medium text-[#0a0d12] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_var(--color-accent)]"
          >
            <FiDownload className="transition-transform group-hover:translate-y-0.5" />
            Download Résumé
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-[var(--border-strong)] text-[var(--text)] transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_8px_24px_-10px_var(--color-accent)]"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-[var(--border-strong)] text-[var(--text)] transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_8px_24px_-10px_var(--color-accent)]"
          >
            <FiLinkedin size={18} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[var(--text-faint)]"
      >
        scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown />
        </motion.span>
      </motion.div>
    </section>
  );
}
