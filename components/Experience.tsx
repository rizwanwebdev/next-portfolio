import { ExperienceCard } from "./ui/ExperienceCard";

const Experience = () => {
  const experience = [
    {
      title: "Frontend Developer — Open to Opportunities",
      type: "Freelance & Full-Time · Remote",
      desc: "Actively building and shipping modern web applications while looking for frontend or full-stack opportunities. Focused on React, Next.js, performance optimization, and clean UI implementation.",
    },
    {
      title: "SEO Web Platform — TikTok Emoji Downloader",
      type: "Tiktokemojiz.online · Freelance Project",
      desc: "Built and deployed an SEO-focused web platform for discovering and downloading TikTok emojis. Implemented static generation with slug-based routing, optimized metadata, sitemap, and performance, and delivered a responsive UI with dark/light mode using React and Next.js.",
    },
    {
      title: "SlideShare Downloader Plugin",
      type: "GetMyPPT.net · Freelance Project",
      desc: "Built a WordPress plugin to download SlideShare presentations. Implemented efficient content parsing and secure file download handling, focusing on reliability and performance.",
    },
    {
      title: "Domain Authority Checker",
      type: "Chrome Extension · Project",
      desc: "Created a lightweight Chrome extension that displays Domain Authority and Spam Score directly in the browser toolbar, focusing on speed, simplicity, and usability.",
    },
  ];

  return (
    <section className="flex justify-center items-center flex-col gap-9">
      <h2 className="heading">
        My Work <span>Experience</span>
      </h2>
      <div className="relative timeline flex flex-col gap-8">
        {/* Inner ー﹏ */}

        {experience.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            type={exp.type}
            desc={exp.desc}
            side={index % 2 == 0 ? "card-left" : "card-right"}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
