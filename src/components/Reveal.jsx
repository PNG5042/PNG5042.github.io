import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Reveal({
  children,
  as = "div",
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
  amount = 0.2,
}) {
  const Component = motion[as] ?? motion.div;
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}

export function RevealGroup({
  children,
  as = "div",
  className = "",
  stagger = 0.08,
  delayChildren = 0,
  once = true,
  amount = 0.2,
}) {
  const Component = motion[as] ?? motion.div;
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </Component>
  );
}

export function RevealItem({ children, as = "div", className = "", y = 16 }) {
  const Component = motion[as] ?? motion.div;
  return (
    <Component
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </Component>
  );
}
