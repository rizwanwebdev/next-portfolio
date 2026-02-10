import { ChevronRight } from "lucide-react";
import { Button } from "./ui/Button";
const Contact = () => {
  return (
    <section className="grid grid-cols-1 min-[950px]:grid-cols-2 gap-6">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="heading">
            Let's Get in <span>Touch</span>
          </h2>
          <Button text="Schedule a meeting" variant="black" />
        </div>
        <div className="relative">
          <hr />
          <span className="absolute bg-background px-2 top-1/2 left-1/2 -translate-3">
            OR
          </span>
        </div>
        <div>
          <form className="flex flex-col gap-4 *:flex *:flex-col">
            <fieldset className="relative">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                name="name"
                autoComplete="name"
                id="name"
                aria-label="name"
                className="border transition-all duration-300 px-3 py-3 focus:border-primary focus-within:border-primary hover:border-primary"
                placeholder="FullName"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                autoComplete="email"
                id="email"
                aria-label="email"
                className="border transition-all duration-300 px-3 py-3 focus:border-primary focus-within:border-primary hover:border-primary"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                autoComplete="message"
                id="message"
                aria-label="message"
                className="border transition-all duration-300 px-3 py-3 focus:border-primary focus-within:border-primary hover:border-primary"
                rows={6}
              />
            </fieldset>
            <fieldset>
              <Button text="Send" variant="black" disabled />
            </fieldset>
          </form>
        </div>
      </div>
      <div>
        <img src="/rizwan-illustraion.png" alt="rizwan-illustraion" />
      </div>
    </section>
  );
};

export default Contact;
