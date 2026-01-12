// src/components/products/ListingItem.jsx
import React from "react";

const ListingItem = ({ product }) => {
  return (
    <div className="group flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        {/* Quick tag or overlay can go here */}
        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm backdrop-blur-sm">
          New
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
            {product.name}
          </h3>
          {/* Shades Dots */}
          <div className="flex mt-2 gap-1">
            {product.shades.map((shade, i) => (
              <div 
                key={i} 
                className="w-3 h-3 rounded-full border border-gray-200" 
                style={{ backgroundColor: shade }} 
              />
            ))}
          </div>
        </div>
        <p className="text-sm font-semibold text-gray-900">${product.price}</p>
      </div>
    </div>
  );
};

export default ListingItem;