import React from "react";
import { FiArrowRight } from "react-icons/fi";

const CategoryCard = ({ image, title, count, delay }) => {
  const GOLD = "#D4AF37";

  return (
    <div 
      // The class 'card-entry-anim' comes from the parent Grid styles
      className="group relative h-[400px] w-full cursor-pointer card-entry-anim"
      style={{ animationDelay: delay }}
    >
      {/* 3D Container Wrapper */}
      <div 
        className="relative h-full w-full overflow-hidden rounded-xl bg-gray-200 transition-all duration-500 ease-out"
        style={{
          boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)",
        }}
      >
        {/* BACKGROUND IMAGE (Zooms on hover) */}
        <div 
          className="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 opacity-70 group-hover:opacity-90"></div>

        {/* TEXT CONTENT (Floats up on hover) */}
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          
          {/* Decorative Line */}
          <div 
            className="mb-4 h-0.5 w-12 transition-all duration-500 group-hover:w-24"
            style={{ background: GOLD }}
          ></div>

          {/* Title */}
          <h3 
            className="text-3xl font-bold text-white transition-transform duration-500 group-hover:-translate-y-2"
            style={{ fontFamily: "'Allura', cursive", letterSpacing: "1px" }}
          >
            {title}
          </h3>

          {/* Item Count */}
          <p className="text-sm uppercase tracking-widest text-gray-300 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            {count} Products
          </p>
          
          {/* Explore Button */}
          <div className="mt-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white opacity-0 transform translate-y-4 transition-all duration-700 delay-75 group-hover:opacity-100 group-hover:translate-y-0">
            Explore <FiArrowRight style={{ color: GOLD }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;