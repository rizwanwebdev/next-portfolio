type ButtonProps = {
  text: string;
  variant: "primary" | "secondry";
  disabled?: boolean;
  submit?: boolean;
  isBlank?: boolean;
  href?: string;
  title?: string;
  animation?: string;
};

export function Button({
  text,
  variant,
  submit = false,
  isBlank = false,
  href,
  animation,
  title,
}: ButtonProps) {
  const varnt = `${
    variant === "primary"
      ? "bg-primary hover:bg-primary/80 text-background border-foreground hover:border-primary"
      : "bg-background hover:bg-background/80 text-foreground border-primary hover:border-primary/80"
  }`;

  const btn = (
    <button
      title={title}
      name="button"
      aria-label="button"
      type={submit ? "submit" : "button"}
      className={`btnBaseStyle ${animation} ${varnt}`}
    >
      {text}
    </button>
  );

  // submit → normal button
  if (submit) return btn;

  // link → wrap button
  return (
    <a href={href} target={isBlank ? "_blank" : undefined}>
      {btn}
    </a>
  );
}
