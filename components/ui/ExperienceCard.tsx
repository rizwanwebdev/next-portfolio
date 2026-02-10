export type Card = {
  title: string;
  type: string;
  desc: string;
  side: "left" | "right";
};
export function ExperienceCard({ title, type, desc, side }: Card) {
  return (
    <div
      className={`bg-primary relative rounded-lg py-4 px-5 text-background flex flex-col gap-2 timeline-item ${side === "left" ? "left" : "right"}`}
    >
      <span className="dot"></span>
      <h3 className="text-4xl leading-11">{title}</h3>
      <p className="text-xl tracking-wide">{type}</p>
      <p className="tracking-wide">{desc}</p>
    </div>
  );
}
