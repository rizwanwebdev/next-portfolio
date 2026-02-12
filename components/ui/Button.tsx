import { ChevronRight } from "lucide-react";
type ButtonProps = {
  text: string;
  variant: "primary" | "secondry";
  disabled?: boolean;
  submit?: boolean;
};
export function Button({
  text,
  variant,
  submit = false,
  disabled = false,
}: ButtonProps) {
  const varnt = `${variant === "primary" ? "bg-primary hover:bg-primary/80 text-background  border-foreground hover:border-primary" : "bg-background hover:bg-background/80 text-foreground  border-primary hover:border-primary/80"}`;

  return (
    <button
      name="button"
      aria-label="button"
      type={submit ? "submit" : "button"}
      className={`btnBaseStyle ${varnt} `}
    >
      {text}
    </button>
  );
}
