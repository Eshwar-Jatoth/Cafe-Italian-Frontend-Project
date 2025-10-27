import React from 'react'

import image1 from "../assets/italianDish.jpg";
import image2 from "../assets/pastry.png";
import image3 from "../assets/coffee.png";
const menuItems = [
    //we can get the data from the backend as well and we can traverse them and load them
  {
    title: "Italian dishes",
    image: image1,
  },
  {
    title: "Pastry",
    image: image2,
  },
  {
    title: "Coffee",
    image: image3,
  },
];

const Menu = () => {
  return (
    <section className="bg-black text-center text-white py-25 px-6 ">
      <p className="text-sm tracking-[3px] uppercase text-gray-400 mb-3">
        Explore Menu
      </p>
      <h2 className="text-5xl font-semibold italic mb-14 text-[#fff5e6]">
        Our Menu
      </h2>

      {/* Menu Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center max-w-6xl mx-auto">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden  group shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[420px] object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black via-black/80 to-transparent">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <button className="text-sm tracking-wide text-yellow-400 hover:text-yellow-500">
                VIEW MENU
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Button */}
      <div className="mt-16">
        <button className=" bg-amber-200 text-black hover:bg-amber-400  font-medium px-8 py-3  tracking-wider transition-colors duration-300 flex items-center gap-2 mx-auto">
          VIEW MENU →
        </button>
      </div>
    </section>
  )
}

export default Menu