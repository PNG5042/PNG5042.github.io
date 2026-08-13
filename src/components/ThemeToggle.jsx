import { motion } from "framer-motion";

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="relative flex h-8 w-14 items-center rounded-full border border-[var(--border-strong)] bg-[var(--bg-inset)] px-1 transition-colors hover:border-accent/60"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 34 }}
        className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[10px] text-[#0a0d12]"
        style={{ marginLeft: isDark ? 0 : "auto" }}
      >
        {isDark ? "🌙" : "☀"}
      </motion.span>
    </button>
  );
}
