"use client";
import { TextAlignJustify, X } from "lucide-react";
import { useState } from "react";
const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sm:hidden relative">
      <button className="cursor-pointer" onClick={() => setOpen(!open)}>
        {!open ? <TextAlignJustify /> : <X className="text-primary" />}
      </button>
      {open ? (
        <nav className="absolute w-62  right-2 bg-primary rounded-2xl px-3 py-10">
          <ul className="flex flex-col justify-center items-center gap-4 text-background *:font-heading *:text-xl *:font-medium">
            <li>Works</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </div>
  );
};

export default MobileMenu;
