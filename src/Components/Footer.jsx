import { useState } from "react";
import { FaInstagram, FaTripadvisor, FaGoogle, FaFacebookF } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";

export default function Footer() {
  const [navOpen, setNavOpen] = useState(false);
  const navItems = ["home", "menu", "about", "contact"];

  return (
    <footer className="bg-black text-[#d4af37] flex flex-col items-center justify-center py-6 space-y-6">
      {/* Logo */}
      <div className="text-center">
        <img
          src={logo}
          alt="logo"
          className="h-[50%]"
        />
      </div>

      {/* Navigation Links */}
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

      {/* Social Icons */}
      <div className="flex space-x-5 text-[#d4af37] text-lg">
        <FaInstagram className="cursor-pointer hover:text-white transition" />
        <FaTripadvisor className="cursor-pointer hover:text-white transition" />
        <FaGoogle className="cursor-pointer hover:text-white transition" />
        <FaFacebookF className="cursor-pointer hover:text-white transition" />
      </div>

      {/* Separator Line */}
      <div className="w-full border-t border-gray-700 mt-6"></div>

      {/* Copyright */}
      <div className="text-[10px] text-gray-400 text-center mt-3">
        © 2024 Istanbul Restaurant Manchester. All Rights Reserved |{" "}
        <span className="text-[#d4af37] hover:underline cursor-pointer">
          Powered By Foodo
        </span>
      </div>
    </footer>
  );
}
