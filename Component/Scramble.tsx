import { useEffect, useRef } from "react";
import { useScramble } from "use-scramble";

interface ScrambleTextProps {
  text: string;
  className?: string;
}

const ScrambleText = ({ text, className = "" }: ScrambleTextProps) => {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const played = useRef(false);

  const { ref, replay } = useScramble({
    text,
    speed: 0.4,
    tick: 1,
    scramble: 12,
    seed: 3,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !played.current) {
          replay();
          played.current = true;
        }
      },
      {
        threshold: 0.5,
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [replay]);

  return (
    <span
      ref={(node) => {
        ref.current = node;
        containerRef.current = node;
      }}
      className={className}
    ></span>
  );
};

export default ScrambleText;
