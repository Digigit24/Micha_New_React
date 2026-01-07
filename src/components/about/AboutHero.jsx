import React from "react";

const AboutHero = () => {
  const SAND = "#CEC2A3";

  return (
    <div 
      className="relative w-full h-[50vh] flex items-center justify-center bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1596462502278-27bfdd403cc2?q=80&w=2574&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0" style={{ background: "rgba(59,47,42,0.5)" }}></div>
      <div className="relative z-10 text-center animate-fade-down px-4">
        <h1 
          className="text-5xl md:text-7xl font-bold tracking-wider"
          style={{ fontFamily: "'Allura', cursive", color: SAND, textShadow: "0 4px 10px rgba(0,0,0,0.3)" }}
        >
          Our Story
        </h1>
        <p className="mt-4 text-white text-sm md:text-lg tracking-widest uppercase">
          Nature • Beauty • Elegance
        </p>
      </div>

      {/* Animation Styles specifically for Hero */}
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

export default AboutHero;