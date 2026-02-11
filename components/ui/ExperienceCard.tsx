export type Card = {
  title: string;
  type: string;
  desc: string;
  side: "left" | "right";
};
export function ExperienceCard({ title, type, desc, side }: Card) {
  return (
    <div
      className={`bg-primary relative tracking-wide rounded-2xl p-6 flex flex-col gap-4 timeline-item ${side === "left" ? "left" : "right"}`}
    >
      <span className="dot"></span>
      <h3 className="text-2xl md:text-3xl font-bold text-neutral ">{title}</h3>
      <p className="text-lg text-neutral/80  tracking-wide">{type}</p>
      <p className="tracking-wider font-normal text-md text-neutral ">{desc}</p>
    </div>
  );
}
