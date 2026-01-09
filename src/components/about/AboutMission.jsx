import React from "react";
import { FiTarget, FiHeart, FiSun } from "react-icons/fi";

const AboutMission = () => {
  const BROWN = "#3B2F2A";
  const GOLD = "#D4AF37";
  const CREAM = "#F4F1EA";

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
          <div className="space-y-4">
            <h5 className="text-[10px] font-black tracking-[0.4em] uppercase opacity-40" style={{ color: BROWN }}>Our Core Purpose</h5>
            <h2 className="text-4xl md:text-6xl leading-tight" style={{ fontFamily: "'Allura', cursive", color: GOLD }}>
              Purity in every <br/> drop we create.
            </h2>
            <p className="text-gray-500 leading-relaxed text-lg max-w-md">
              Micha was born from a simple realization: beauty shouldn't be complicated or chemical. It should be a ritual of self-love using the earth's finest ingredients.
            </p>
          </div>

          {/* Icon List */}
          <div className="space-y-6">
            {[
              { icon: <FiSun />, title: "Ethical Sourcing", desc: "Fair trade ingredients from local farmers." },
              { icon: <FiHeart />, title: "Cruelty Free", desc: "Never tested on animals, only on ourselves." },
              { icon: <FiTarget />, title: "Proven Results", desc: "Scientifically backed organic formulas." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-[#3B2F2A] group-hover:text-white" style={{ background: CREAM, color: BROWN }}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm" style={{ color: BROWN }}>{item.title}</h4>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Overlapping Images */}
        <div className="w-full lg:w-1/2 relative order-1 lg:order-2 h-[450px] md:h-[600px]">
          <div className="absolute top-0 right-0 w-[70%] h-[80%] rounded-t-full overflow-hidden shadow-2xl z-10">
            <img 
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1974&auto=format&fit=crop" 
              className="w-full h-full object-cover" 
              alt="Nature" 
            />
          </div>
          <div className="absolute bottom-0 left-0 w-[60%] h-[60%] rounded-b-full border-[12px] border-white overflow-hidden shadow-2xl z-20">
            <img 
              src="https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover" 
              alt="Product" 
            />
          </div>
          {/* Decorative Gold Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-[#D4AF37]/30 animate-pulse pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

export default AboutMission;