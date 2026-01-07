import React from "react";
import { FiShoppingCart, FiStar } from "react-icons/fi";

const ProductCard = ({ product, index }) => {
  return (
    <article
      className="group relative rounded-2xl bg-white overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
      style={{
        borderColor: "rgba(59,47,42,0.1)",
        // Staggered Fade In Animation
        animation: `fadeInUp 0.6s ease-out forwards ${index * 100}ms`,
        opacity: 0, 
      }}
    >
      {/* Image Area */}
      <div className="relative overflow-hidden h-72 bg-[#F5F2EA]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/90 backdrop-blur-sm text-[#3B2F2A] shadow-sm">
          {product.category}
        </div>

        {/* Quick Add Overlay */}
        <div 
          className="absolute inset-0 bg-[#3B2F2A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]"
        >
          <button 
            className="px-6 py-2 bg-white text-[#3B2F2A] rounded-full text-sm font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg flex items-center gap-2 hover:bg-[#CEC2A3]"
          >
            <FiShoppingCart /> Quick Add
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-base font-bold text-[#3B2F2A] leading-tight group-hover:text-[#D4AF37] transition-colors">
              {product.name}
            </h3>
            <p className="text-xs text-gray-500 mt-1">{product.finish}</p>
          </div>
          <div className="flex items-center gap-1 text-xs font-bold text-[#3B2F2A]">
            <FiStar className="fill-[#D4AF37] text-[#D4AF37]" /> {product.rating}
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 border-t border-gray-100 pt-3">
          <span className="text-lg font-bold text-[#3B2F2A]">₹{product.price}</span>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </article>
  );
};

export default ProductCard;