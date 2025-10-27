import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Specials = () => {
  const specials = [
    { id: 1, name: "Classic Ribeye Steak", price: "€30", image: "../assets/Photo1.png" },
    { id: 2, name: "Grilled Striploin Steak", price: "€28", image: "../assets/photo2.png" },
    { id: 3, name: "Herb Butter Sirloin", price: "€32", image: "../assets/photo3.png" },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % specials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + specials.length) % specials.length);

  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-4 md:px-0">
      {/* Header */}
      <div className="text-center mb-16 z-20">
        <p className="text-[13px] text-amber-200 font-bold uppercase mb-2">OUR MENU</p>
        <h1 className="text-4xl sm:text-5xl font-bold italic">
          <span className="text-white">Our </span>
          <span className="text-[#d1a562]">
            Specials
          </span>
        </h1>
      </div>

      {/* Rotating images */}
      <div className="relative flex items-center justify-center w-full max-w-[1000px] h-[500px] md:h-[530px] z-10">
        {specials.map((item, index) => {
          const isActive = index === current;
          const isLeft = index === (current - 1 + specials.length) % specials.length;
          const isRight = index === (current + 1) % specials.length;

          return (
            <div
              key={item.id}
              className={`absolute transition-all duration-700 ease-in-out flex items-center justify-center ${
                isActive
                  ? "z-20 opacity-100 scale-100 translate-x-0"
                  : isLeft
                  ? "z-10 opacity-30 scale-90 -translate-x-[260px] md:-translate-x-[360px]"
                  : isRight
                  ? "z-10 opacity-30 scale-90 translate-x-[260px] md:translate-x-[360px]"
                  : "opacity-0 scale-75"
              }`}
            >
              {isActive ? (
                <div className="relative rounded-t-[200px] w-[280px] sm:w-[300px] md:w-[320px] h-[450px] sm:h-[500px] flex flex-col items-center justify-center overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] pt-10 pb-8">
                  {/* Gradient background for active card covering at least 50% */}
                  <div className="absolute inset-0 bg-linear-to-b from-[#1a1a1a]/90 via-black/80 to-transparent h-[60%] md:h-[70%]"></div>

                  {/* Price Badge */}
                  <div className="absolute top-8 md:top-10 right-8 md:right-10 bg-[#f4b56a] text-black font-bold text-lg rounded-full px-4 md:px-5 py-2 md:py-3 shadow-lg border-4 border-[#0b0b0b] z-20">
                    {item.price}
                  </div>

                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[150px] sm:w-[170px] md:w-[180px] h-[150px] sm:h-[170px] md:h-[180px] object-contain mt-2 z-20"
                  />

                  {/* Dish Name */}
                  <h2 className="text-base sm:text-lg font-semibold text-center leading-tight mb-2 z-20">
                    {item.name}
                  </h2>

                  {/* Arrows */}
                  <div className="flex gap-4 md:gap-6 mt-6 z-20">
                    <button
                      onClick={prev}
                      className="w-10 h-10 rounded-full border border-[#f4b56a] flex items-center justify-center hover:bg-[#f4b56a] hover:text-black transition"
                    >
                      <FaArrowLeft size={14} />
                    </button>
                    <button
                      onClick={next}
                      className="w-10 h-10 rounded-full border border-[#f4b56a] flex items-center justify-center hover:bg-[#f4b56a] hover:text-black transition"
                    >
                      <FaArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ) : (
                // Side blurred images
                <div className="opacity-30 grayscale-[0.3] blur-[1px] w-[200px] sm:w-[250px] h-[150px] sm:h-[200px] flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Specials;
