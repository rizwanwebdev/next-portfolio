import { ChevronRight, Target } from "lucide-react";
type ButtonProps = {
  text: string;
  variant: "primary" | "secondry";
  disabled?: boolean;
  submit?: boolean;
  isBlank?: boolean;
  href?: string;
  animation?: string;
};
export function Button({
  text,
  variant,
  submit = false,
  isBlank = false,
  href,
  animation,
}: ButtonProps) {
  const varnt = `${variant === "primary" ? "bg-primary hover:bg-primary/80 text-background  border-foreground hover:border-primary" : "bg-background hover:bg-background/80 text-foreground  border-primary hover:border-primary/80"}`;

  return (
    <button
      name="button"
      aria-label="button"
      type={submit ? "submit" : "button"}
      className={`btnBaseStyle ${animation} ${varnt} `}
    >
      {submit ? (
        text
      ) : (
        <a href={href} target={isBlank ? "_blank" : undefined}>
          {text}
        </a>
      )}
    </button>
  );
}
