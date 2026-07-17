import Scramble from "./Scramble";

interface Scrambleprops {
  text: string;
  className?: string;
}

function Hero({ text, className }: Scrambleprops) {
  return (
    <section className="hero">
      <h1 className="hero-title">
        <Scramble text={text} className={className} />
      </h1>
    </section>
  );
}

export default Hero;
