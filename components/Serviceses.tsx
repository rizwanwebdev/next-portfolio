import { Globe2Icon, ChevronRight } from "lucide-react";
import { Button } from "./ui/Button";

const Serviceses = () => {
  return (
    <section className="flex justify-center items-center flex-col gap-9">
      <h2 className="heading">
        What <span>I Do</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-background shadow shadow-black flex justify-center items-center gap-4 rounded-2xl px-3 py-8  flex-col *:text-center">
          <Globe2Icon className="w-20 h-20 text-primary" />
          <h3 className="leading-12 text-4xl text-primary">
            Frontend Development
          </h3>
          <p className="font-medium tracking-wide text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            delectus deleniti tempora nisi maxime.
          </p>
          <Button text="Explore Service" variant="black" />
        </div>
        <div className="bg-background shadow shadow-black flex justify-center items-center gap-4 rounded-2xl px-3 py-8  flex-col *:text-center">
          <Globe2Icon className="w-20 h-20 text-primary" />
          <h3 className="leading-12 text-4xl text-primary">
            UI Implementation
          </h3>
          <p className="font-medium tracking-wide text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            delectus deleniti tempora nisi maxime.
          </p>
          <Button text="Explore Service" variant="black" />
        </div>
        <div className="bg-background shadow shadow-black flex justify-center items-center gap-4 rounded-2xl px-3 py-8  flex-col *:text-center">
          <Globe2Icon className="w-20 h-20 text-primary" />
          <h3 className="leading-12 text-4xl text-primary">
            Performance & Optimazition
          </h3>
          <p className="font-medium tracking-wide text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            delectus deleniti tempora nisi maxime.
          </p>
          <Button text="Explore Service" variant="black" />
        </div>
      </div>
    </section>
  );
};

export default Serviceses;
