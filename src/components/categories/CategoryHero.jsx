import React from "react";
import heroBanner from "../../assets/collection-one.jpg";

const CategoryHero = () => {
  const SAND = "#CEC2A3";

  return (
       <div 
      className="relative w-full h-[45vh] flex items-center justify-center bg-fixed bg-cover bg-center"
      style={{
        // 2. Use the imported variable inside the template string
        backgroundImage: `url(${heroBanner})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(59,47,42,0.6)" }}></div>
      
      <div className="relative z-10 text-center animate-fade-down px-4">
        <h1 
          className="text-5xl md:text-7xl font-bold tracking-wider"
          style={{ fontFamily: "'Allura', cursive", color: SAND, textShadow: "0 4px 10px rgba(0,0,0,0.5)" }}
        >
          Collections
        </h1>
        <p className="mt-3 text-white text-sm md:text-lg tracking-[0.2em] uppercase opacity-90">
          Find your perfect look
        </p>
      </div>

      <style>{`
        .animate-fade-down {
          animation: fadeDown 1s ease-out forwards;
          opacity: 0;
          transform: translateY(-20px);
        }
        @keyframes fadeDown { to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default CategoryHero;