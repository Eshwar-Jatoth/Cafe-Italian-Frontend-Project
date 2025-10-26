// src/components/DiningExperience.jsx
import React from "react";

const sections = [
  {
    title: "Food",
    description:
      "Bavette was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality. Every dish is a labor of love, crafted by our chefs to suit all tastes.",
    image:
      "/src/assets/food.png",
    textPosition: "left",
  },
  {
    title: "Drinks",
    description:
      "Bavette was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality. Every dish is a labor of love, crafted by our team of experts.",
    image:
      "/src/assets/drinks.png",
    textPosition: "left",
  },
  {
    title: "Atmosphere",
    description:
      "Bavette was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality. Every dish is a labor of love, crafted by our dedicated team.",
    image:
      "/src/assets/Atmosphere.png",
    textPosition: "left",
  },
];

const DiningExperience= ()=> {
  return (
    <section className="bg-black text-white py-20 px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="uppercase tracking-[2px] text-gray-400 text-sm mb-2">
          We Offer
        </p>
        <h2 className="text-5xl text-[#fff5e6] md:text-6xl font-semibold italic">
          Unforgettable <br />
          Dining{" "}
          <span className="text-yellow-500 not-italic font-semibold">
            Experience
          </span>
        </h2>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-8 max-w-3xl mx-auto">
        {sections.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden shadow-lg"
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 md:h-96 lg:h-[500px] object-cover transition-transform duration-700 transform hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text Content */}
            <div
              className={`absolute inset-0 flex flex-col justify-center ${
                item.textPosition === "left"
                  ? "items-start text-left pl-8 md:pl-16"
                  : "items-end text-right pr-8 md:pr-16"
              }`}
            >
              <h3 className="text-4xl md:text-5xl font-semibold italic mb-3">
                {item.title}
              </h3>
              <p className="max-w-md text-[10px] md:text-base text-white  rounded-md ">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default DiningExperience;