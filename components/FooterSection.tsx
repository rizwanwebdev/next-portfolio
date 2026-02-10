import {
  Facebook,
  Github,
  Instagram,
  LinkedinIcon,
  ChevronRight,
  Mail,
} from "lucide-react";
import { Button } from "./ui/Button";

const FooterSection = () => {
  return (
    <>
      <footer className="flex flex-col gap-8">
        <h2 className="text-2xl leading-10 py-6   border-t  text-center md:text-3xl *:text-primary">
          Bulding <span>Interfaces</span> That <span>Win Attention</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-3xl text-primary">Rizwan</h3>
            <p className="font-medium">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
              doloremque!
            </p>
          </div>
          <div>
            <h4 className="text-2xl">Primary</h4>
            <ul className="flex flex-col gap-2 *:font-medium">
              <li>Projects</li>
              <li>About</li>
              <li>Experience</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl">Socials</h4>
            <p className="flex flex-row gap-2 text-lg font-medium">
              <Mail className="w-8 h-8 text-primary" />
              <a
                className="text-primary"
                href="mailto:hey@rizwanweb.site"
                target="_blank"
              >
                hey@rizwanweb.site
              </a>
            </p>
            <div className="flex gap-3">
              <span className="w-10 h-10 bg-primary rounded-full flex justify-center items-center  text-background">
                <Facebook />
              </span>
              <span className="w-10 h-10 bg-primary rounded-full flex justify-center items-center  text-background">
                <Github />
              </span>
              <span className="w-10 h-10 bg-primary rounded-full flex justify-center items-center  text-background">
                <Instagram />
              </span>
              <span className="w-10 h-10 bg-primary rounded-full flex justify-center items-center  text-background">
                <LinkedinIcon />
              </span>
            </div>

            <Button text="Get In Touch" variant="black" />
          </div>
        </div>
        <div className="flex py-1 border-t flex-row justify-between gap-4 items-center">
          <p className="logo text-lg leading-10">
            &copy; 2026 Rizwan. All Rights Reserved.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <span className="logo text-lg leading-10">/Privacy</span>
            <span className="logo text-lg leading-10">/Contact</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
