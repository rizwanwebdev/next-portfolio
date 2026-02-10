import { Github, ArrowUpRightFromSquareIcon } from "lucide-react";
const Portfolio = () => {
  return (
    <section className="flex justify-center items-center flex-col gap-12">
      <div className="flex flex-col justify-center items-center">
        <h2 className="heading">Portfolio</h2>
        <p className="text-center text-xl font-medium">
          Real work that focues on design, performance and result
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <img src="/d.png" alt="" />
            <div className="absolute bottom-2 right-2 flex flex-row gap-2">
              <span className="w-10 h-10 bg-primary rounded-full flex justify-center items-center  text-background">
                <Github />
              </span>
              <span className="w-10 h-10 bg-primary rounded-full flex justify-center items-center  text-background">
                <ArrowUpRightFromSquareIcon />
              </span>
            </div>
          </div>
          <div className="p-2">
            <h3 className="text-3xl leading-10">Portfolio Development</h3>
            <p className="font-medium tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              cupiditate quibusdam maiores cumque, voluptatibus veritatis!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative">
            <img src="/r.png" alt="" />
            <div className="absolute bottom-2 right-2 flex flex-row gap-2">
              <span className="w-10 h-10 bg-primary rounded-full flex justify-center items-center  text-background">
                <Github />
              </span>
              <span className="w-10 h-10 bg-primary rounded-full flex justify-center items-center  text-background">
                <ArrowUpRightFromSquareIcon />
              </span>
            </div>
          </div>
          <div className="p-2">
            <h3 className="text-3xl leading-10">Portfolio Development</h3>
            <p className="font-medium tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              cupiditate quibusdam maiores cumque, voluptatibus veritatis!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative">
            <img src="/full.webp" alt="" />
            <div className="absolute bottom-2 right-2 flex flex-row gap-2">
              <span className="w-10 h-10 bg-primary rounded-full flex justify-center items-center  text-background">
                <Github />
              </span>
              <span className="w-10 h-10 bg-primary rounded-full flex justify-center items-center  text-background">
                <ArrowUpRightFromSquareIcon />
              </span>
            </div>
          </div>
          <div className="p-2">
            <h3 className="text-3xl leading-10">Portfolio Development</h3>
            <p className="font-medium tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              cupiditate quibusdam maiores cumque, voluptatibus veritatis!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
