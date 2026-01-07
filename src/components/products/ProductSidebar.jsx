import React from "react";
import { FiX, FiCheck } from "react-icons/fi";

const ProductSidebar = ({ 
  categories, 
  selectedCategory, 
  setSelectedCategory, 
  priceRange, 
  setPriceRange,
  isMobileOpen,
  closeMobile
}) => {
  const BROWN = "#3B2F2A";
  const GOLD = "#D4AF37";

  return (
    <>
      {/* Mobile Background Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={closeMobile}
      />

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out p-6 overflow-y-auto
          lg:translate-x-0 lg:static lg:shadow-none lg:w-64 lg:block lg:p-0 lg:z-auto
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Mobile Header */}
        <div className="flex justify-between items-center lg:hidden mb-8">
          <h2 className="text-xl font-bold" style={{ color: BROWN }}>Filters</h2>
          <button onClick={closeMobile} style={{ color: BROWN }}><FiX size={24} /></button>
        </div>

        {/* Categories Group */}
        <div className="mb-10">
          <h3 className="text-xs font-bold uppercase tracking-widest mb-4 border-b pb-2" style={{ color: GOLD }}>
            Collections
          </h3>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => { setSelectedCategory(cat); closeMobile(); }}
                  className={`w-full text-left flex items-center justify-between text-sm py-2 px-3 rounded-lg transition-all duration-200 ${
                    selectedCategory === cat 
                      ? "bg-[#3B2F2A] text-white font-semibold shadow-md" 
                      : "text-[#3B2F2A] hover:bg-[#F5F2EA]"
                  }`}
                >
                  {cat}
                  {selectedCategory === cat && <FiCheck />}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range */}
        <div className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-widest mb-4 border-b pb-2" style={{ color: GOLD }}>
            Max Price: ₹{priceRange}
          </h3>
          <input
            type="range"
            min="0"
            max="1000"
            step="50"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-[#3B2F2A]"
            style={{ background: "#E5E7EB" }}
          />
          <div className="flex justify-between text-xs mt-2 text-gray-500 font-medium">
            <span>₹0</span>
            <span>₹1000</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ProductSidebar;