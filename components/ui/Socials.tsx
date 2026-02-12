import { Facebook, Github, Instagram, LinkedinIcon } from "lucide-react";
export function Socials({ size = 10 }) {
  const baseStyle = `w-${size} h-${size} socialStyles`;
  return (
    <div className="flex gap-3 *:transition-all *:duration-300  *:hover:scale-110">
      <a
        href="https://facebook.com/rizwanwebdev"
        target="_blank"
        className={baseStyle}
      >
        <Facebook />
      </a>
      <a
        href="https://github.com/rizwanwebdev"
        target="_blank"
        className={baseStyle}
      >
        <Github />
      </a>
      <a
        href="https://instagram.com/rizwanwebdev"
        target="_blank"
        className={baseStyle}
      >
        <Instagram />
      </a>
      <a
        href="https://linkedin.com/in/rizwanwebdev"
        target="_blank"
        className={baseStyle}
      >
        <LinkedinIcon />
      </a>
    </div>
  );
}
