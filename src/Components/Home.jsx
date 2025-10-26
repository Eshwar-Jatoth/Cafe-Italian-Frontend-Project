import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Home = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navItems = ["home", "menu", "about", "contact"];

  return (
    <div className="h-[96vh] w-full bg-amber-200 relative overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover brightness-60"
        src="/src/assets/5792372_Coll_wavebreak_Waiter_1920x1080.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar */}
        <nav className="w-full relative flex items-center justify-between md:px-20 py-4">
          {/* Desktop nav links */}
          <div className="hidden md:flex desktop-nav items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={`/${item}`}
                className="uppercase text-lg font-medium text-white hover:text-amber-200 hover:underline hover:decoration-double hover:decoration-2 hover:underline-offset-4 transition"
              >
                {item}
              </NavLink>
            ))}
          </div>

          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-20 pointer-events-none logo-center">
            <img
              src="/src/assets/logo.png"
              alt="logo"
              className="h-full"
            />
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block desktop-book-btn bg-amber-200 text-black px-4 py-2 hover:bg-amber-400 transition text-sm">
              Book Table
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="mobile-toggle hidden md:hidden text-white text-3xl ml-9 focus:outline-none"
            >
              {navOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Mobile menu */}
          {navOpen && (
            <div className="mobile-menu-custom hidden md:hidden">
              {navItems.map((item) => (
                <NavLink
                  key={item}
                  to={`/${item}`}
                  onClick={() => setNavOpen(false)}
                  className="uppercase text-lg font-medium text-white hover:text-amber-200  transition"
                >
                  {item}
                </NavLink>
              ))}
              <button className="bg-amber-200 text-black font-semibold px-5 py-2 rounded-full hover:bg-amber-400 transition">
                Book Table
              </button>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center mt-25 px-4 gap-7">
          <h1 className="text-amber-100 text-5xl sm:text-7xl md:text-8xl font-semibold italic drop-shadow-lg">
            Welcome To
          </h1>
          <h1 className="text-amber-100 text-5xl sm:text-7xl md:text-8xl font-medium italic drop-shadow-lg">
            Cafe Italia
          </h1>
          <button className="flex items-center px-6 py-3 gap-2 font-medium bg-amber-200 text-black hover:bg-amber-400 transition">
            VIEW MENU <IoIosArrowRoundForward className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
