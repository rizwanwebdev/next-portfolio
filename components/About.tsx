import {
  Facebook,
  Github,
  Instagram,
  LinkedinIcon,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/Button";
const About = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-4">
        <div className=" *:leading-17">
          <h3 className="text-4xl font-semibold">Hey, I'm</h3>
          <h2 className="text-7xl text-primary  font-semibold">Rizwan Zia</h2>
        </div>
        <p className="text-[22px] font-medium">
          Web Developer | Based in Pakistan
        </p>
        <div className="border-l-7 border-primary">
          <p className="font-medium pl-3 tracking-wide leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id sequi
            nesciunt eos modi quaerat, repellendus asperiores totam corporis
            illum eligendi!
          </p>
        </div>
        <span className="text-[22px] font-medium">Connect With Me</span>
        <div className="flex gap-3">
          <span className="w-12 h-12 bg-primary rounded-full flex justify-center items-center  text-background">
            <Facebook />
          </span>
          <span className="w-12 h-12 bg-primary rounded-full flex justify-center items-center  text-background">
            <Github />
          </span>
          <span className="w-12 h-12 bg-primary rounded-full flex justify-center items-center  text-background">
            <Instagram />
          </span>
          <span className="w-12 h-12 bg-primary rounded-full flex justify-center items-center  text-background">
            <LinkedinIcon />
          </span>
        </div>
        <div className="flex flex-wrap gap-4 mt-6">
          <Button text="See My Projects" variant="black" />
          <Button text="Let's Talk" variant="black" />
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="/rizwan-frontend-developer.png"
          alt="rizwan-frontend-developer"
        />
      </div>
    </section>
  );
};

export default About;
