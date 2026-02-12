import { SkillGroup } from "./ui/SkillGroup";
const Skills = () => {
  return (
    <section id="skills">
      <div className="flex justify-center items-center flex-col gap-6">
        {/* Heading */}
        <div className="text-center flex flex-col gap-3 md:gap-2 ">
          <h2 className="heading">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg max-w-2xl">
            The tools, technologies, and strengths I use to build modern,
            high-quality web experiences.
          </p>
        </div>

        {/* Skill Layout */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Frontend & Design (Primary) */}
          <div className="md:col-span-2 rounded-3xl  p-10 shadow-sm bg-background border-2 border-foreground/20 flex flex-col gap-10 animate-left">
            <h3 className="text-2xl md:text-3xl text-center font-bold">
              🎨🖌️ Frontend & UI Engineering
            </h3>

            <div className="grid gap-6 sm:grid-cols-2">
              <SkillGroup
                title="Core Web 🕸"
                items={["HTML5", "CSS3", "JavaScript (ES6+)"]}
              />
              <SkillGroup
                title="Frameworks"
                items={["React", "Next.js", "TypeScript"]}
              />
              <SkillGroup
                title="Styling & UX"
                items={[
                  "Tailwind CSS ",
                  "Responsive / Mobile-First Design",
                  "Web Accessibility",
                ]}
              />
              <SkillGroup
                title="Performance & SEO"
                items={[
                  "Performance Optimization",
                  "SEO Principles",
                  "Clean UI Architecture",
                ]}
              />
              <SkillGroup
                title="Some Extras"
                items={[
                  "Shopify Cutomization",
                  "Shopify Custom Theme Development",
                  "Chrome Extension Development",
                ]}
              />
            </div>
          </div>

          {/* Supporting Skills */}
          <div className="animate-right grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-10">
            {/* Design */}
            <div className="rounded-3xl  p-8 shadow-sm bg-background border-2 border-foreground/20 flex flex-col gap-2">
              <h3 className="font-heading text-xl font-semibold mb-4">
                🎨 Design & Collaboration
              </h3>
              <ul className="font-body text-sm leading-relaxed text-foreground/80 space-y-2">
                <li>Figma & Sketch</li>
                <li>Design → Code Translation</li>
                <li>Working with Design & Marketing Teams</li>
              </ul>
            </div>

            {/* Backend & Tools */}
            <div className="rounded-3xl p-8 shadow-sm bg-background border-2 border-foreground/20 flex flex-col gap-2">
              <h3 className="font-heading text-xl font-semibold mb-4">
                👨‍💻 Backend & Tools
              </h3>
              <ul className="font-body text-sm leading-relaxed text-foreground/80 space-y-2">
                <li>Node.js · Express</li>
                <li>MongoDB · SQL / MySQL</li>
                <li>REST APIs · Authentication</li>
                <li>Git · WordPress · Django</li>
                <li>Python · n8n</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
