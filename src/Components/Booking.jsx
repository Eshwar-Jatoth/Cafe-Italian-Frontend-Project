import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Booking = () => {
  return (
    <div className="w-full bg-black px-4 md:px-10 py-10">
      <div className="relative overflow-hidden ">
        {/* Background Image */}
        <img
          src={`${import.meta.env.BASE_URL}assets/backgroundImage.png`}
          alt="image"
          className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[550px] object-cover transition-transform duration-700 transform hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Content */}
        <div
          className="absolute inset-0 flex flex-col justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-7 items-start text-left px-6 sm:px-10 md:px-16 lg:px-24"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white italic mb-1">
            Private & <br /> Group Dining
          </h3>

          <p className="max-w-md text-white text-[10px]/[14px] sm:text-[11px]/[15px] md:text-[13px]/[17px] lg:text-[14px]/[20px] text-justify">
            At Bavette, we specialize in creating memorable dining experiences,
            whether you're seeking an intimate gathering or a grand celebration.
            Our private and group dining options are designed to meet your unique
            needs with personalized service, exceptional food, and a welcoming
            atmosphere.
          </p>

          <button className="flex items-center px-5 sm:px-6 py-2.5 sm:py-3 gap-2 font-medium bg-amber-200 text-black  hover:bg-amber-400 transition">
            Book now <IoIosArrowRoundForward className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
