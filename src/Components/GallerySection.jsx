import React from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";

const images = [
  "/src/assets/pic1.png",
  "/src/assets/pic2.png",
  "/src/assets/baklava.png",
  "/src/assets/Kebab Platter.png",
  "/src/assets/Meze platter.png",
  "/src/assets/pic3.png",
  "/src/assets/pic4.png",
  "/src/assets/pic5.png",
];

const GallerySection = () => {
  return (
    <section className="bg-black flex flex-col items-center text-[#f5e6d3] px-4 md:px-10 py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mb-12">
        {/* Left Side (Text) */}
        <div className="text-center md:text-left">
          <p className="text-sm uppercase tracking-widest text-amber-200 font-semibold mb-2">
            Gallery
          </p>
          <h2 className="text-4xl font-montserrat md:text-6xl text-white italic font-bold">
            follow us
          </h2>
        </div>

        {/* Right Side (Button) */}
        <button
      className="
        flex items-center justify-center gap-3
        bg-[#0f0f0f] 
        font-montserrat font-bold tracking-wider uppercase
        text-sm md:text-base
        px-8 py-4
        transition-all duration-300
        hover:opacity-80
        inset-shadow-yellow-200/15
        inset-shadow-xs
      "
    >
      <BiLogoInstagramAlt className="text-2xl text-[#d6b16a]" />
      CHECK OUT OUR INSTAGRAM
    </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1.5 w-full max-w-6xl">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden aspect-square">
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
