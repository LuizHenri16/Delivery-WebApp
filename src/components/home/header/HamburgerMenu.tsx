"use client";

import { useState } from "react";

export function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <button
      id="hamburger-menu"
      aria-label="Abrir menu"
      aria-expanded={open}
      onClick={() => setOpen((prev) => !prev)}
      className="flex justify-center items-center w-9 h-9 gap-1 mx-auto cursor-pointer rounded-2xl hover:border border-zinc-200 hover:bg-zinc-50 transition-colors duration-200 shrink-0"
    >
      <div className="flex gap-0.5 flex-col">
        <span
          className={`block h-0.75 rounded-3xl bg-[#475569] transition-all duration-300 origin-center ${open ? "w-5 rotate-45 translate-y-[6.5px]" : "w-5"
            }`}
        />
        <span
          className={`block h-0.75 rounded-3xl bg-[#475569] transition-all duration-300 ${open ? "w-5 opacity-0" : "w-3"
            }`}
        />
        <span
          className={`block h-0.75 rounded-3xl bg-[#475569] transition-all duration-300 origin-center ${open ? "w-5 -rotate-45 -translate-y-[6.5px]" : "w-2"
            }`}
        />
      </div>
    </button>
  );
}
