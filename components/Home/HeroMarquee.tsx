"use client";

import { marquee } from "@/public/data";
import { useEffect, useState } from "react";

export const HeroMarquee = () => {
  const [animated, setAnimated] = useState(true);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  const addAnimation = () => {
    setAnimated(true);
  };

  return (
    <div
      className={`scroller max-w-[600px] ${animated ? "animated" : ""}`}
      data-animated={animated}
    >
      <ul className="list-none flex flex-wrap gap-4 scroller__inner">
        {marquee.map((period) => (
          <li
            className="w-60 text-center p-4 border border-primary rounded"
            key={period.id}
          >
            <h2 className="text-xl font-medium">{period.time}</h2>
            <h3 className="my-2 text-lg font-semibold underline underline-offset-4 decoration-wavy">
              {period.title}
            </h3>
            <p>{period.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
