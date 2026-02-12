import FORM from "./FORM";
import { Button } from "./ui/Button";
const Contact = () => {
  return (
    <section
      id="contact"
      className="grid grid-cols-1 min-[950px]:grid-cols-2 gap-6"
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="heading">
            Let's Get in <span>Touch</span>
          </h2>
          <Button text="Schedule a meeting" variant="primary" />
        </div>
        <div className="relative">
          <hr />
          <span className="absolute bg-background px-2 top-1/2 left-1/2 -translate-3">
            OR
          </span>
        </div>
        <div>
          {/* FORM ==== */}
          <FORM />
        </div>
      </div>
      <div className="w-full h-full overflow-hidden">
        <img
          src="/rizwan-illustraion.png"
          className="min-[950px]:max-h-170 w-full object-cover object-center rounded-2xl"
          alt="rizwan-illustraion"
          loading="lazy"
          title="Rizwan's illustraion"
          aria-label="img"
        />
      </div>
    </section>
  );
};

export default Contact;
