export type Card = {
  title: string;
  type: string;
  desc: string;
  side: "left" | "right";
};
export function ExperienceCard({ title, type, desc, side }: Card) {
  return (
    <div
      className={`bg-primary relative tracking-wide rounded-lg p-6 flex flex-col gap-4 timeline-item ${side === "left" ? "left" : "right"}`}
    >
      <span className="dot"></span>
      <h3 className="text-4xl text-background  leading-11">{title}</h3>
      <p className="text-xl text-background/90  tracking-wide">{type}</p>
      <p className="tracking-wider font-normal text-background ">{desc}</p>
    </div>
  );
}
