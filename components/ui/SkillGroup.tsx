export function SkillGroup({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h4 className="text-xl font-semibold uppercase tracking-wide text-primary mb-2">
        {title}
      </h4>
      <ul className="font-body text-sm  leading-relaxed text-foreground/80 space-y-1">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
