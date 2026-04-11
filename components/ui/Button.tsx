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

  const buttonEl = (
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

  // If it's a submit button → return button only
  if (submit) return buttonEl;

  // Otherwise wrap with anchor
  return (
    <a href={href} target={isBlank ? "_blank" : undefined}>
      {buttonEl}
    </a>
  );
}
