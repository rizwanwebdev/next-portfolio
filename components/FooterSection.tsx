import { Mail } from "lucide-react";
import { Button } from "./ui/Button";
import { Socials } from "./ui/Socials";

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
              Frontend Developer focused on modern, performance-driven web
              interfaces.
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
                href="mailto:contact@rizwanweb.site"
                target="_blank"
              >
                contact@rizwanweb.site
              </a>
            </p>
            <Socials size={10} />

            <Button
              href="#contact"
              title="Contact"
              text="Get In Touch"
              variant="primary"
            />
          </div>
        </div>
        <div className="flex py-1 border-t flex-row justify-between gap-4 items-center">
          <p className="logo text-lg leading-10">
            &copy; 2026 Rizwan | All Rights Reserved.
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
