"use client";

import React from "react";
import { ArrowDown } from "lucide-react";

export default function Button() {
return ( <button
   type="button"
   aria-label="Portfolio"
   className="group inline-flex items-center gap-4 rounded-full
              bg-[#000000] py-2 pl-6 pr-2 text-sm font-medium
              text-white transition-all duration-300
              hover:bg-black cursor-pointer"
    onClick={() =>
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    })
  }
 >
{/* Button label */} <span className="tracking-wide bebas-neue text-2xl">Portfolio</span>

  {/* White circular arrow */}
  <span
    className="flex h-10 w-10 items-center justify-center
               rounded-full bg-white text-[#000000]
               transition-all duration-300
               group-hover:rotate-[-45deg]
               group-hover:text-black"
  >
    <ArrowDown
      size={20}
      strokeWidth={2}
      className="transition-transform duration-300
                 group-hover:translate-y-0.5"
    />
  </span>
</button>

);
}
