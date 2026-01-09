import React from "react";

const FashionCollection = () => {
  const BROWN = "#3B2F2A";

  // Assets path as requested
  const images = [
    { id: 1, src: "src/assets/fashion-one.jpg" },
    { id: 2, src: "src/assets/fashion-two.jpg" },
    { id: 3, src: "src/assets/fashion-three.jpg" },
    { id: 4, src: "src/assets/fashion-four.jpg" },
  ];

  return (
    <div className="w-full max-w-[1500px] mx-auto px-4 md:px-10 flex flex-col justify-between min-h-screen relative bg-transparent pt-20 md:pt-28 pb-4">
      
      {/* 
          1. EDITORIAL IMAGE GRID 
          Mobile: 2x2 (Visible and clear)
          Desktop: 1x4 (Sleek)
      */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 w-full h-[35vh] md:h-[52vh] overflow-hidden rounded-sm shadow-sm">
        {images.map((img) => (
          <div key={img.id} className="relative overflow-hidden group h-full bg-[#f8f5f0]">
            <img
              src={img.src}
              alt={`Fashion ${img.id}`}
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800"; }}
            />
            <div className="absolute inset-0 bg-[#3B2F2A]/5 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* 
          2. THE NAME: FASHION COLLECTION 
          Proper Overlap Logic: 
          - 'Fashion' is the base.
          - 'Collection' sits slightly over the bottom-right of 'Fashion'.
      */}
      <div className="relative z-10 flex flex-col mt-[-5vh] md:mt-[-8vh] lg:mt-[-12vh] px-1 pointer-events-none">
        
        {/* SERIF TEXT: FASHION */}
        <h2 
          className="font-serif leading-[0.8] tracking-tighter"
          style={{ 
            color: BROWN, 
            fontWeight: "400",
            fontSize: "calc(3rem + 10vw)" // Responsive font size
          }}
        >
          Fashion
        </h2>
        
        {/* CURSIVE TEXT: COLLECTION */}
        <div className="relative w-full -mt-[4vw] md:-mt-[6vw]">
          <h2 
            className="text-right md:text-left md:ml-[30%] lg:ml-[40%]"
            style={{ 
              fontFamily: "'Allura', cursive", 
              color: BROWN,
              fontWeight: "400",
              fontSize: "calc(2.5rem + 7vw)",
              textShadow: "0 0 20px rgba(255,255,255,0.9), 0 0 40px rgba(255,255,255,0.4)" 
            }}
          >
            Collection
          </h2>
        </div>
      </div>

      {/* 
          3. BOTTOM DETAILS SECTION
          Padding reduced for mobile to keep everything visible on one screen.
      */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-auto gap-3 border-t border-[#3B2F2A]/20 pt-4 pb-2">
        
        <div className="flex flex-col items-center md:items-start order-2 md:order-1">
            <span className="text-[9px] font-bold tracking-[0.5em] uppercase opacity-40 mb-0.5">Season</span>
            <div className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase" style={{ color: BROWN }}>
                Micha — 2026
            </div>
        </div>
        
        {/* Decorative Flowing Line */}
        <div className="hidden md:block flex-grow mx-10 h-[1px] bg-[#3B2F2A]/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#3B2F2A] animate-line-flow" />
        </div>

        <div className="flex flex-col items-center md:items-end order-1 md:order-3">
            <span className="text-[9px] font-bold tracking-[0.5em] uppercase opacity-40 mb-0.5">Identity</span>
            <div className="text-[10px] md:text-xs font-black tracking-[0.1em] uppercase" style={{ color: BROWN }}>
                @MICHAAESTHETIC
            </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');

        @keyframes line-flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-line-flow {
          animation: line-flow 6s infinite linear;
        }

        /* Responsive Fix: Ensure text doesn't wrap or hide on small phones */
        @media (max-width: 480px) {
          .pt-20 { padding-top: 70px; }
          .min-h-screen { min-height: 95vh; }
        }
      `}</style>
    </div>
  );
};

export default FashionCollection;