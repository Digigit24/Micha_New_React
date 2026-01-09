import React from "react";
import { FiShoppingCart, FiHeart, FiStar } from "react-icons/fi";

const ProductCard = ({ product, index }) => {
  return (
    <div
      className="group relative bg-white rounded-xl overflow-hidden border border-transparent hover:border-[#CEC2A3]/50 transition-all duration-300 w-full"
      style={{
        boxShadow: "0 4px 15px rgba(59, 47, 42, 0.03)",
        animation: `fadeInUp 0.6s ease-out forwards ${index * 0.05}s`,
        opacity: 0,
        transform: "translateY(20px)",
      }}
    >
      {/* Image Section */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f5f0]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Finish Badge */}
        <div className="absolute top-2 left-2 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-sm text-[#3B2F2A] rounded-full shadow-sm">
          {product.finish}
        </div>

        {/* Action Buttons (Hover) */}
        <div className="absolute inset-0 bg-[#3B2F2A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button className="bg-white text-[#3B2F2A] h-9 w-9 rounded-full flex items-center justify-center hover:bg-[#CEC2A3] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-md">
            <FiShoppingCart size={16} />
          </button>
          <button className="bg-white text-[#3B2F2A] h-9 w-9 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 shadow-md">
            <FiHeart size={16} />
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-3">
        <div className="mb-1">
          <span className="text-[10px] font-bold uppercase tracking-wide text-[#3B2F2A]/60">
            {product.category}
          </span>
        </div>
        <h3 className="text-sm font-bold text-[#3B2F2A] leading-tight truncate group-hover:text-[#CEC2A3] transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-3 border-t border-[#3B2F2A]/5 pt-2">
          <span className="text-base font-bold text-[#3B2F2A]">₹{product.price}</span>
          <div className="flex items-center gap-1 text-[10px] font-bold bg-[#CEC2A3]/20 text-[#8a7a5c] px-1.5 py-0.5 rounded">
            {product.rating} <FiStar className="fill-current" size={9} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;