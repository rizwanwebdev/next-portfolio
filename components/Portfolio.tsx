import { Github, ArrowUpRightFromSquareIcon } from "lucide-react";
const Portfolio = () => {
  const projects = [
    {
      image: "/tiktok-emojiz-online.webp",
      title: "TikTok Emojiz Online",
      description:
        "Discover TikTokEmojiz.online, a tool built to help users copy hidden TikTok emoji codes and download transparent PNG emojis.",
      github: "https://github.com/rizwanwebdev/tiktok-emojiz-online",
      live: "https://tiktokemojiz.online/",
    },
    {
      image: "/cooking-art.webp",
      title: "Cooking Art",
      description:
        "A simple and practical collection of cooking recipes and tips for home chefs.",
      github: "https://github.com/rizwanwebdev/cooking-art",
      live: "https://cookingart.vercel.app/",
    },
    {
      image: "/movies-explorer.webp",
      title: "Movies Explorer",
      description:
        "A web app to explore movies, view details, and discover new films.",
      github: "https://github.com/rizwanwebdev/movies-explorer",
      live: "https://moviesmesh.vercel.app/",
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
          <div key={index} className="flex flex-col gap-4 group animate-card">
            <div className="relative overflow-hidden">
              <img
                role="img"
                className="aspect-4/3"
                src={project.image}
                alt={project.title}
              />
              <div className="absolute transition-all duration-300  -bottom-20 group-hover:bottom-2 right-2 flex flex-row gap-2 *:transition-all *:duration-200 *:hover:scale-110 *:active:scale-90">
                <a
                  href={project.github}
                  title="github url"
                  aria-label="github url"
                  target="_blank"
                  className="w-10 h-10 bg-primary rounded-full flex justify-center items-center  text-neutral"
                >
                  <Github />
                </a>
                <a
                  title="live demo url"
                  aria-label="live demo url"
                  target="_blank"
                  href={project.live}
                  className="w-10 h-10 bg-primary rounded-full flex justify-center items-center  text-neutral"
                >
                  <ArrowUpRightFromSquareIcon />
                </a>
              </div>
            </div>
            <div className="p-4">
              <h3 aria-label="title" className="text-3xl leading-10">
                {project.title}
              </h3>
              <p aria-label="description" className="font-medium tracking-wide">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
