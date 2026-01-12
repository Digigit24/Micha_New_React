// src/components/products/ListingFilters.jsx
import React from "react";

const ListingFilters = ({ filters, setFilters }) => {
  
  // Hardcoded shades for the filter UI
  const shadeOptions = [
    { name: "Red", color: "#D2042D" },
    { name: "Pink", color: "#FF69B4" },
    { name: "Nude", color: "#F5DEB3" },
    { name: "Dark", color: "#8B4513" },
    { name: "Black", color: "#000000" },
  ];

  const toggleShade = (colorHex) => {
    const currentShades = filters.shades;
    let newShades;
    if (currentShades.includes(colorHex)) {
      newShades = currentShades.filter(s => s !== colorHex);
    } else {
      newShades = [...currentShades, colorHex];
    }
    setFilters({ ...filters, shades: newShades });
  };

  return (
    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
      
      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">Max Price</h3>
        <input
          type="range"
          min="0"
          max="150"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>$0</span>
          <span>${filters.maxPrice}</span>
        </div>
      </div>

      {/* Shade Filter */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">Filter Shades</h3>
        <div className="flex flex-wrap gap-3">
          {shadeOptions.map((shade) => (
            <button
              key={shade.name}
              onClick={() => toggleShade(shade.color)}
              className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                filters.shades.includes(shade.color) 
                  ? "border-black scale-110 ring-1 ring-gray-400" 
                  : "border-gray-100 hover:border-gray-300"
              }`}
              style={{ backgroundColor: shade.color }}
              title={shade.name}
            />
          ))}
        </div>
      </div>
      
      {/* Clear Button */}
      {(filters.maxPrice < 150 || filters.shades.length > 0) && (
        <button 
          onClick={() => setFilters({ maxPrice: 150, shades: [] })}
          className="mt-8 text-xs text-red-500 hover:text-red-700 underline w-full text-center"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );
};

export default ListingFilters;