import { MonitorSmartphone, BarChart2Icon, Shapes } from "lucide-react";
import { Button } from "./ui/Button";

const Serviceses = () => {
  const services = [
    {
      icon: MonitorSmartphone,
      title: "Frontend Development",
      service:
        "Building responsive, high-performance interfaces with clean and scalable code.",
    },
    {
      icon: Shapes,
      title: "UI Implementation",
      service:
        "Translating designs into pixel-perfect, accessible, and intuitive user experiences.",
    },
    {
      icon: BarChart2Icon,
      title: "Performance & Optimization",
      service:
        "Improving speed, usability, and reliability across modern web platforms",
    },
  ];
  return (
    <section
      id="services"
      className="flex justify-center items-center flex-col gap-9"
    >
      <h2 className="heading">
        What <span>I Do</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services.map((srvc, index) => (
          <div
            key={index}
            className="shadow-sm bg-background border-2 border-foreground/20 flex justify-center items-center gap-4 rounded-2xl px-3 py-8  flex-col *:text-center"
          >
            <srvc.icon className="w-20 h-20 text-primary" />
            <h3 className="leading-12 font-bold text-4xl text-primary">
              {srvc.title}
            </h3>
            <p className="font-medium tracking-wide text-lg">{srvc.service}</p>
            <Button text="Explore Service" variant="primary" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Serviceses;
