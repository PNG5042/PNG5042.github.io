import { useEffect, useState } from "react";

export default function TypeText({
  text,
  startDelay = 0,
  speed = 26,
  className = "",
  onDone,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) {
          clearInterval(interval);
          onDone?.();
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, startDelay, speed]);

  return (
    <span className={className}>
      {text.slice(0, count)}
      <span className="text-accent animate-caret">_</span>
    </span>
  );
}
