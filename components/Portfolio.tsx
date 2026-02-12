import { Github, ArrowUpRightFromSquareIcon } from "lucide-react";
const Portfolio = () => {
  const projects = [
    {
      image: "/d.png",
      title: "Portfolio Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupiditate quibusdam maiores cumque, voluptatibus veritatis!",
      github: "https://github.com/rizwanwebdev",
      live: "https://github.com/rizwanwebdev",
    },
    {
      image: "/full.webp",
      title: "Portfolio Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupiditate quibusdam maiores cumque, voluptatibus veritatis!",
      github: "https://github.com/rizwanwebdev",
      live: "https://github.com/rizwanwebdev",
    },
    {
      image: "/r.png",
      title: "Portfolio Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupiditate quibusdam maiores cumque, voluptatibus veritatis!",
      github: "https://github.com/rizwanwebdev",
      live: "https://github.com/rizwanwebdev",
    },
  ];
  return (
    <section
      id="works"
      className="flex justify-center items-center flex-col gap-12"
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="heading">Portfolio</h2>
        <p className="text-center text-xl font-medium">
          Real work that focuses on design, performance and result
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 *:transition-all *:duration-300 *:shadow-sm *:bg-background *:overflow-hidden *:rounded-xl *:border-2 *:border-foreground/20">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col gap-4 group">
            <div className="relative overflow-hidden">
              <img src="/d.png" alt="" />
              <div className="absolute transition-all duration-300  -bottom-20 group-hover:bottom-2 right-2 flex flex-row gap-2">
                <a
                  href={project.github}
                  className="w-10 h-10 bg-primary rounded-full flex justify-center items-center  text-neutral"
                >
                  <Github />
                </a>
                <a
                  href={project.live}
                  className="w-10 h-10 bg-primary rounded-full flex justify-center items-center  text-neutral"
                >
                  <ArrowUpRightFromSquareIcon />
                </a>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-3xl leading-10">{project.title}</h3>
              <p className="font-medium tracking-wide">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
