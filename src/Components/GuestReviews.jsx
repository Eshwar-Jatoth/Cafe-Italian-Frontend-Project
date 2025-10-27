import React, { useState, useEffect } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

import person1 from "../assets/person1.jpg"
import person2 from "../assets/person2.jpg"
import person3 from "../assets/person3.jpg";
const reviews = [
  {
    name: "Anna Mathew",
    time: "one day ago",
    review:
      "Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back! We booked private dining for our.",
    avatar: person3,
  },
  {
    name: "Gerrin Tom",
    time: "one day ago",
    review:
      "We booked private dining for our anniversary, and everything was perfect. The steak was melt-in-your-mouth delicious, and the staff was amazing!",
    avatar: person2,
  },
  {
    name: "Mery Elza",
    time: "one day ago",
    review:
      "Best steak I’ve ever had! The quality of the meat was outstanding, and the truffle fries were to die for. Highly recommend!",
    avatar: person1,
  },
  {
    name: "John Parker",
    time: "two days ago",
    review:
      "Amazing food and cozy atmosphere! Everything tasted fresh, and the service was so friendly. Will definitely come again.",
    avatar: person2,
  },
];

export default function GuestReviews() {
  const [cards, setCards] = useState(reviews);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsiveness
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(1);
      else if (width < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (animating) return;
    setDirection("left");
    setAnimating(true);
    setTimeout(() => {
      const updated = [...cards];
      const first = updated.shift();
      updated.push(first);
      setCards(updated);
      setAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    if (animating) return;
    setDirection("right");
    setAnimating(true);
    setTimeout(() => {
      const updated = [...cards];
      const last = updated.pop();
      updated.unshift(last);
      setCards(updated);
      setAnimating(false);
    }, 500);
  };

  const slideDistance = `${100 / visibleCount}%`;

  return (
    <section className="bg-black h-full text-white py-16 flex flex-col items-center overflow-hidden">
      {/* Header */}
      <p className="uppercase text-sm tracking-widest text-amber-200 mb-2">
        Reviews
      </p>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold italic text-[#d6b16a] mb-12 text-center">
        Hear Our Guests
      </h2>

      {/* Carousel */}
      <div className="w-full max-w-7xl relative px-4 pr-6 overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ease-in-out ${
            animating ? `slide-${direction}` : ""
          }`}
          style={{
            transform: animating
              ? `translateX(${direction === "left" ? `-${slideDistance}` : slideDistance})`
              : "translateX(0)",
          }}
        >
          {cards.slice(0, visibleCount + 1).map((r, i) => (
            <div
              key={i}
              className={`shrink-0 bg-[#111]  p-6 sm:p-8 mx-2 flex flex-col justify-between 
                ${visibleCount === 1 ? "w-full" : visibleCount === 2 ? "w-1/2" : "w-1/3"}
                transition-all duration-300`}
              style={{ minHeight: "360px" }} // Ensures all cards have the same height
            >
              {/* Top section */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-14 h-14 rounded-full object-cover border border-[#d6b16a]/40"
                />
                <div>
                  <p className="font-semibold text-lg">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.time}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} className="text-[#d6b16a] text-lg mr-1 mt-9" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed grow">
                {r.review}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-6 mt-10">
        <button
          onClick={prevSlide}
          className="border border-[#d6b16a] rounded-full p-3 hover:bg-[#d6b16a] hover:text-black transition"
        >
          <FaArrowLeft size={16} />
        </button>
        <button
          onClick={nextSlide}
          className="border border-[#d6b16a] rounded-full p-3 hover:bg-[#d6b16a] hover:text-black transition"
        >
          <FaArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
