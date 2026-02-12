import { Button } from "./ui/Button";

const CTA = () => {
  return (
    <section className="flex relative mt-10 justify-center items-center flex-col ">
      <div className="flex overflow-hidden relative justify-center items-center flex-col lg:w-9/12 h-[60vh] max-sm:w-full rounded-4xl px-6 py-12 ">
        <div className="flex flex-col justify-center items-center gap-7">
          <h2 className="max-sm:text-4xl text-5xl text-center text-neutral">
            Ready to Build the Winning Side?
          </h2>
          <p className="text-center text-neutral tracking-wider font-medium">
            Frontend developer available for impactful projects and
            product-focused teams.
          </p>
          <Button text="Get In Touch" href="#contact" variant="secondry" />
        </div>
        <svg
          id="visual"
          viewBox="0 0 1200 600"
          width="1200"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="absolute inset-0 -z-8 object-cover object-center"
          fill="var(--color-foreground)"
        >
          <rect x="0" y="0" width="1200" height="900"></rect>
          <g fill="var(--color-primary)">
            <circle r="115" cx="706" cy="229"></circle>
            <circle r="65" cx="419" cy="458"></circle>
            <circle r="64" cx="687" cy="494"></circle>
            <circle r="104" cx="158" cy="107"></circle>
            <circle r="86" cx="418" cy="221"></circle>
            <circle r="109" cx="78" cy="595"></circle>
            <circle r="64" cx="676" cy="14"></circle>
            <circle r="77" cx="109" cy="339"></circle>
          </g>
        </svg>
      </div>
      <img
        className="absolute animate-dot -top-10 -left-10 lg:top-0 lg:left-10 w-80 -z-10"
        src="/circle-3d.webp"
        alt=""
      />
    </section>
  );
};

export default CTA;
