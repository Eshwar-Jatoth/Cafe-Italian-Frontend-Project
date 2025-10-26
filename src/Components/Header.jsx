import React from "react";
import { FiClock } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";

const Header = () => {
  return (
    <div className="w-full bg-black px-2 lg:px-1 py-2 overflow-hidden header-container">
      
      {/* Location */}
      <div className="flex items-center  gap-1">
        <GoLocation className="text-yellow-400 text-lg lg:text-2xl header-icon" />
        <p className="text-white text-xs lg:text-sm leading-snug lg:leading-normal header-text header-nowrap">
          2 Bury Old Road, Manchester, M8 9JN
        </p>
      </div>

      {/* Time */}
      <div className="flex items-center gap-1">
        <FiClock className="text-yellow-400 text-lg lg:text-2xl header-icon" />
        <p className="text-white text-xs lg:text-sm leading-snug lg:leading-normal header-text header-nowrap">
          Mon-Sat 11am - 11:30, Sun 12pm - 11pm
        </p>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-1">
        <MdOutlinePhone className="text-yellow-400 text-lg lg:text-2xl header-icon" />
        <p className="text-white text-xs lg:text-sm leading-snug lg:leading-normal header-text header-nowrap">
          0161 795 5502
        </p>
      </div>

      {/* Email */}
      <div className="flex items-center gap-1">
        <MdOutlineMailOutline className="text-yellow-400 text-lg lg:text-2xl header-icon" />
        <p className="text-white text-xs lg:text-sm leading-snug lg:leading-normal header-text header-nowrap">
          reservation@istanbulrestaurantmanchester.co.uk
        </p>
      </div>

    </div>
  );
};

export default Header;
