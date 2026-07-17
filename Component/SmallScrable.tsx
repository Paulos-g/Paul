import { useScramble } from "use-scramble";

interface ScrambleTextProps {
  text: string;
}

function Scrambled({ text }: ScrambleTextProps) {
  const { ref } = useScramble({
    text,
    speed: 0.5, // Lower = slower animation
    tick: 1, // Higher = updates less frequently
    scramble: 13, // More random characters before resolving
  });

  return <span ref={ref} />;
}

export default Scrambled;
