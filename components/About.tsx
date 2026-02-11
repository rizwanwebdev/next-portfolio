import { Socials } from "./ui/Socials";
import { Button } from "./ui/Button";
const About = () => {
  return (
    <section
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-6"
    >
      <div className="flex flex-col gap-4 h-full">
        <div className=" *:leading-17">
          <h3 className="text-4xl font-semibold">Hey, I'm</h3>
          <h2 className="text-7xl text-primary  font-semibold">Rizwan Zia</h2>
        </div>
        <p className="text-xl  font-medium">
          Web Developer | Based in Pakistan
        </p>
        <div className="border-l-7 border-primary">
          <p className="font-medium pl-3 tracking-wide leading-8">
            I’m a frontend developer focused on building clean, responsive, and
            performance-driven web interfaces. I care deeply about usability,
            visual clarity, and writing maintainable code that turns complex
            ideas into simple, intuitive user experiences.
          </p>
        </div>
        <span className="text-xl font-medium">Connect With Me</span>
        <Socials size={10} />
        <div className="flex flex-wrap gap-4 mt-6">
          <Button text="See My Projects" variant="black" />
          <Button text="Let's Talk" variant="black" />
        </div>
      </div>
      <div className="flex justify-center max-h-150 ">
        <img
          src="/rizwan-frontend-developer.png"
          className="min-h-150 object-cover rounded-2xl"
        />
      </div>
    </section>
  );
};

export default About;
