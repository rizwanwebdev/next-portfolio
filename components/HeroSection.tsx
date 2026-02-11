import { Button } from "./ui/Button";
const HeroSection = () => {
  return (
    <section className="flex justify-center items-center flex-col gap-8 py-25 md:py-35">
      <h1 className="text-center text-5xl leading-15 lg:leading-20 lg:text-6xl max-w-4xl *:text-primary">
        The Web Is a <span> Battlefield </span> of
        <span> Attention </span> — I Design the
        <span> Winning </span> Side as a <span>Frontend Developer</span>.
      </h1>
      <p className="max-w-2xl  text-xl text-center">
        Frontend Developer crafting high-performance interfaces with clean code
        and strong UX.
      </p>
      <div className="flex flex-col items-center md:flex-row gap-4">
        <Button text="See My Projects" variant="black" />
        <Button text="Let's Talk" variant="black" />
      </div>
    </section>
  );
};

export default HeroSection;
