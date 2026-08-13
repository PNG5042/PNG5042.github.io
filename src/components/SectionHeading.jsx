import Reveal from "./Reveal";

export default function SectionHeading({ index, label, title }) {
  return (
    <Reveal className="mb-10 sm:mb-14">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        {index} // {label}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
    </Reveal>
  );
}
