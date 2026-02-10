import { ChevronRight } from "lucide-react";
type ButtonProps = {
  text: string;
  variant: "black" | "white";
  disabled?: boolean;
};
export function Button({ text, variant, disabled = false }: ButtonProps) {
  const baseStyle =
    "flex items-center gap-2 font-medium text-lg border-2 border-transparent py-2 px-3 transition-all duration-200 group w-fit";

  const variantStyles =
    variant === "black"
      ? "text-foreground border-b-foreground hover:border-foreground"
      : "text-background border-b-background hover:border-background";

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none hover:border-transparent "
    : "cursor-pointer";

  return (
    <button
      disabled={disabled}
      aria-disabled={disabled}
      className={`${baseStyle} ${variantStyles} ${disabledStyles}`}
    >
      <span>{text}</span>
      <ChevronRight
        className={` transition-all  duration-200 ${disabled ? "" : " group-hover:translate-x-1 group-hover:scale-105"}`}
      />
    </button>
  );
}
