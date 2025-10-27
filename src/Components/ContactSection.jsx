import React from "react";

import contac from "/public/assets/bg-contact.png";
export default function ContactSection() {
  return (
    <section className="relative text-white flex flex-col items-center justify-center py-24 px-6 font-montserrat overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={contac}
          alt="background"
          className="w-full h-full object-cover opacity-70"
        />
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/90 bg-opacity-60"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <p className="uppercase tracking-[0.25em] text-xs text-[#d6b16a] mb-3 small-text">
          Connect With Us
        </p>
        <h2 className="text-5xl md:text-6xl italic font-bold text-[#f5e6d3] heading-text">
          Contact Us
        </h2>
      </div>

      {/* Info Boxes */}
      <div className="relative z-10 flex flex-col md:flex-row items-stretch justify-center gap-8 w-full max-w-5xl">
        {/* Booking Request */}
        <div className="bg-black bg-opacity-60 border border-[#1a1a1a] flex flex-col justify-center items-center text-center w-full md:w-1/3 min-h-[200px] px-6 py-10 shadow-lg hover:shadow-[#d6b16a]/20 transition-all">
          <p className="uppercase text-[10px] tracking-[0.25em] text-gray-400 mb-3 small-text">
            Booking Request
          </p>
          <p className="text-[#d6b16a] text-lg font-semibold small-text">
            0161 795 5502
          </p>
        </div>

        {/* Location */}
        <div className="bg-black bg-opacity-60 border border-[#1a1a1a] flex flex-col justify-center items-center text-center w-full md:w-1/3 min-h-[200px] px-6 py-10 shadow-lg hover:shadow-[#d6b16a]/20 transition-all">
          <p className="uppercase text-[10px] tracking-[0.25em] text-gray-400 mb-3 small-text">
            Location
          </p>
          <p className="text-gray-300 text-sm leading-relaxed small-text">
            2 Bury Old Road,<br />Manchester, M8 9JN
          </p>
        </div>

        {/* Opening Hours */}
        <div className="bg-black bg-opacity-60 border border-[#1a1a1a] flex flex-col justify-center items-center text-center w-full md:w-1/3 min-h-[200px] px-6 py-10 shadow-lg hover:shadow-[#d6b16a]/20 transition-all">
          <p className="uppercase text-[10px] tracking-[0.25em] text-gray-400 mb-3 small-text">
            Opening Hours
          </p>
          <p className="text-gray-300 text-sm leading-relaxed small-text">
            Monday to Saturday<br />
            11:00am – 11:30pm<br />
            Sunday 12:00pm – 11:00pm
          </p>
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }

        /* Custom media query for devices below 425px */
        @media (max-width: 425px) {
          .heading-text {
            font-size: 2rem; /* smaller h2 */
          }
          .small-text {
            font-size: 9px /* smaller paragraphs */
          }
        }
      `}</style>
    </section>
  );
}
