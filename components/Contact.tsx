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
              <input
                type="text"
                id="name"
                placeholder=" "
                className="form-input border px-3 py-3"
                name="name"
                autoComplete="name"
                required
              />
              <label htmlFor="name" className="form-label text-foreground/90">
                Full Name
              </label>
            </fieldset>
            <fieldset className="relative">
              <input
                type="text"
                id="email"
                name="email"
                autoComplete="email"
                placeholder=" "
                required
                className="form-input border px-3 py-3"
              />
              <label htmlFor="email" className="form-label text-foreground/90">
                Full Name
              </label>
            </fieldset>
            <fieldset className="relative">
              <textarea
                name="message"
                autoComplete="message"
                id="message"
                aria-label="message"
                className="form-input border px-3 py-3"
                rows={6}
                required
                placeholder=" "
              />
              <label
                htmlFor="message"
                className="message-label text-foreground/90"
              >
                Message
              </label>
            </fieldset>
            <fieldset>
              <Button text="Send" variant="black" disabled />
            </fieldset>
          </form>
        </div>
      </div>
      <div className="w-full h-full overflow-hidden">
        <img
          src="/rizwan-illustraion.png"
          className="min-[950px]:max-h-170 w-full object-cover object-center rounded-2xl"
          alt="rizwan-illustraion"
        />
      </div>
    </section>
  );
};

export default Contact;
