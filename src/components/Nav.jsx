import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "../data/content";
import ThemeToggle from "./ThemeToggle";

export default function Nav({ theme, toggleTheme }) {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#hero"
          onClick={handleClick("hero")}
          className="font-mono text-sm font-medium tracking-tight text-[var(--text)]"
        >
          <span className="text-accent">~/</span>prathmesh
          <span className="text-accent animate-caret">_</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleClick(item.id)}
              className="relative px-3 py-2 font-mono text-xs uppercase tracking-wider text-[var(--text-dim)] transition-colors hover:text-[var(--text)]"
            >
              {active === item.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-md bg-[var(--bg-elevated)]"
                  transition={{ type: "spring", stiffness: 500, damping: 36 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  active === item.id ? "text-accent" : ""
                }`}
              >
                {item.label}
              </span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] font-mono text-[var(--text)] md:hidden"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--bg)] px-5 pb-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleClick(item.id)}
              className={`block py-2 font-mono text-sm uppercase tracking-wider ${
                active === item.id ? "text-accent" : "text-[var(--text-dim)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
