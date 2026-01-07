import React from "react";

const AboutContent = () => {
  // Theme Colors
  const SAND = "#CEC2A3";
  const BROWN = "#3B2F2A";
  const WHITE = "#FFFFFF";
  const GOLD = "#D4AF37";

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Decorative Blob */}
      <div 
        className="absolute top-1/2 left-0 w-64 h-64 md:w-96 md:h-96 rounded-full opacity-10 -translate-y-1/2 -translate-x-1/4 pointer-events-none z-0"
        style={{ background: BROWN }}
      ></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* Left: Text */}
        <div className="order-2 md:order-1 animate-slide-up">
          <h4 className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: GOLD }}>
            Who We Are
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: BROWN }}>
            Crafting Beauty with <br /> 
            <span className="italic" style={{ color: SAND }}>Nature's Touch</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-justify">
            Founded with a passion for purity, Micha Cosmetics began as a small promise: to create beauty products that honor the skin rather than hide it.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed text-justify">
            From our velvet matte lipsticks to our hydrating serums, every product is a blend of science and soul. We are cruelty-free and dedicated to everyday glam.
          </p>

          <div className="flex gap-8">
            <div>
              <span className="block text-3xl font-bold" style={{ color: BROWN }}>5k+</span>
              <span className="text-xs text-gray-500 uppercase tracking-wide">Happy Clients</span>
            </div>
            <div>
              <span className="block text-3xl font-bold" style={{ color: BROWN }}>100%</span>
              <span className="text-xs text-gray-500 uppercase tracking-wide">Organic</span>
            </div>
          </div>
        </div>

        {/* Right: 3D Overlapped Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in-right">
          <div className="relative w-full max-w-md">
            {/* Back Frame */}
            <div 
              className="absolute top-4 right-4 md:top-6 md:right-6 w-full h-full border-2 rounded-xl"
              style={{ borderColor: SAND, zIndex: 0 }}
            ></div>
            {/* Main Image */}
            <div 
              className="relative overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              style={{ zIndex: 1, backgroundColor: WHITE }}
            >
              <img 
                src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2574&auto=format&fit=crop" 
                alt="About Micha" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        .animate-slide-up {
          animation: slideUp 1s ease-out 0.3s forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        @keyframes slideUp { to { opacity: 1; transform: translateY(0); } }

        .animate-fade-in-right {
          animation: fadeInRight 1s ease-out 0.5s forwards;
          opacity: 0;
          transform: translateX(30px);
        }
        @keyframes fadeInRight { to { opacity: 1; transform: translateX(0); } }
      `}</style>
    </section>
  );
};

export default AboutContent;