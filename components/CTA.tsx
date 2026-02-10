import { Button } from "./ui/Button";

const CTA = () => {
  return (
    <section className="flex  justify-center items-center flex-col ">
      <div className="flex svg-bg relative justify-center items-center flex-col lg:w-9/12 h-[60vh] max-sm:w-full rounded-4xl px-6 py-12 ">
        <div className="flex flex-col justify-center items-center gap-7">
          <h2 className="max-sm:text-4xl text-5xl text-center text-background">
            Ready to Build the Winning Side?
          </h2>
          <p className="text-center text-background tracking-wider font-medium">
            Frontend developer available for impactful projects and
            product-focused teams.
          </p>
          <Button text="Get In Touch" variant="white" />
        </div>
        <img
          className="absolute -top-30 -left-30 w-80 -z-10"
          src="/circle-3d.webp"
          alt=""
        />
      </div>
    </section>
  );
};

export default CTA;
