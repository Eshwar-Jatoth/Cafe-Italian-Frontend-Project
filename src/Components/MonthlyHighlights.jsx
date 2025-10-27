import React from "react";

import kebadPlater from "../assets/Kebab Platter.png";
import mezeplatter from "../assets/Meze platter.png";
import baklava from "../assets/baklava.png";
import adanakebab from "../assets/AdanaKebab.png";
const highlights = [
  {
    title: "Adana Kebab",
    price: "€ 120",
    image: kebadPlater,
  },
  {
    title: "Meze Platter",
    price: "€ 120",
    image: mezeplatter,
  },
  {
    title: "Baklava",
    price: "€ 120",
    image: baklava,
  },
  {
    title: "Kebab Platter",
    price: "€ 120",
    image: adanakebab,
  },
];

export default function MonthlyHighlights() {
  return (
    <section className="bg-black min-h-screen w-full flex flex-col items-center text-center text-white py-16 px-4 overflow-x-hidden">
      {/* Header */}
      <div className="mb-12">
        <p className="text-xs uppercase text-amber-200">
          Our Top Picks This Month
        </p>
        <h2 className="text-5xl font-semibold italic text-yellow-100 mt-2">
          Monthly{" "}
          <span className="not-italic font-bold text-[#d6b16a]">
            Highlights
          </span>
        </h2>
      </div>

      {/* Items Flex */}
      <div className="flex flex-wrap justify-center gap-5 max-w-6xl mx-auto">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full sm:w-[45%] lg:w-[18%] h-[420px]"
          >
            {/* Image - pure rectangle */}
            <div className="w-full h-[300px] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Text */}
            <h3 className="text-lg text-yellow-100 font-medium mt-4">{item.title}</h3>
            <p className="text-sm text-[#d6b16a] mt-1">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
