import React, { useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const AboutJourney = () => {
  const scrollRef = useRef(null);
  const BROWN = "#3B2F2A";
  const GOLD = "#D4AF37";

  const milestones = [
    { year: "2018", title: "The Beginning", desc: "Started in a small Paris kitchen.", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400" },
    { year: "2020", title: "Global Bloom", desc: "Expanded to 12 countries.", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400" },
    { year: "2022", title: "Eco-First", desc: "Switched to 100% glass packaging.", img: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400" },
    { year: "2024", title: "Award Winning", desc: "Voted best organic brand.", img: "https://images.unsplash.com/photo-1590156221122-c748e7898a0a?w=400" },
    { year: "2026", title: "Future Forward", desc: "Launching lab-grown botanicals.", img: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=400" }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header with Buttons */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h5 className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-40 mb-2" style={{ color: BROWN }}>Our Timeline</h5>
            <h2 className="text-4xl md:text-5xl font-light" style={{ color: BROWN }}>The Journey of <span style={{ color: GOLD, fontFamily: "'Allura', cursive" }}>Micha</span></h2>
          </div>
          <div className="flex gap-4">
            <button onClick={() => scroll("left")} className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
              <FiArrowLeft />
            </button>
            <button onClick={() => scroll("right")} className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
              <FiArrowRight />
            </button>
          </div>
        </div>

        {/* Horizontal Slider */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar pb-10 snap-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {milestones.map((item, idx) => (
            <div key={idx} className="min-w-[280px] md:min-w-[350px] snap-center group">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 relative shadow-lg">
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                <div className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full text-xs font-bold shadow-sm" style={{ color: BROWN }}>
                  {item.year}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: BROWN }}>{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default AboutJourney;