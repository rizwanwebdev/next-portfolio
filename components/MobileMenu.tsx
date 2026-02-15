"use client";
import { TextAlignJustify, X } from "lucide-react";
import { useState } from "react";
const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sm:hidden relative">
      <div className="cursor-pointer">
        <input type="checkbox" id="checkbox" />
        <label
          onClick={() => setOpen(!open)}
          htmlFor="checkbox"
          className="toggle"
        >
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
        </label>
      </div>
      {open ? (
        <nav className="absolute w-62  right-2 bg-primary rounded-2xl px-3 py-10">
          <ul className="flex flex-col justify-center items-center gap-4 text-neutral *:font-heading *:text-xl *:font-medium">
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
