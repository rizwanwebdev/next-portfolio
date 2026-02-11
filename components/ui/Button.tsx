import { ChevronRight } from "lucide-react";
type ButtonProps = {
  text: string;
  variant: "black" | "white";
  disabled?: boolean;
  submit?: boolean;
};
export function Button({
  text,
  variant,
  submit = false,
  disabled = false,
}: ButtonProps) {
  const variantStyles =
    variant === "black"
      ? "text-foreground border-b-foreground hover:border-foreground"
      : "text-neutral border-b-neutral hover:border-neutral";

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none hover:border-transparent "
    : "cursor-pointer";

  return (
    <button
      type={submit ? "submit" : "button"}
      disabled={disabled}
      aria-disabled={disabled}
      className={`btnBaseStyle group ${variantStyles} ${disabledStyles}`}
    >
      <span>{text}</span>
      <ChevronRight
        className={` transition-all  duration-200 ${disabled ? "" : " group-hover:translate-x-1 group-hover:scale-105"}`}
      />
    </button>
  );
}
