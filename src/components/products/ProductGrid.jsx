import React from "react";
import ProductCard from "./ProductCard";
import { FiX, FiSearch } from "react-icons/fi";

const ProductGrid = ({
  filteredProducts,
  totalProductsCount, // Not strictly needed if using filteredProducts.length, but good for context
  clearFilters,
  isFiltered, // Boolean to check if any filter is active
}) => {
  return (
    <main className="flex-1 w-full min-h-[600px]">
      
      {/* Top Bar: Count & Clear Button */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#3B2F2A]/5">
        <span className="text-xs font-bold text-[#3B2F2A]/60 uppercase tracking-wider">
          {filteredProducts.length} Results
        </span>
        {isFiltered && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-[#3B2F2A] hover:text-[#CEC2A3] transition-colors"
          >
            <FiX /> Clear
          </button>
        )}
      </div>

      {/* The Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProducts.map((p, idx) => (
            <ProductCard key={p.id} product={p} index={idx} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed rounded-xl border-[#3B2F2A]/10">
          <FiSearch size={32} className="text-[#3B2F2A]/40 mb-2" />
          <p className="text-sm font-bold text-[#3B2F2A]">No matches found</p>
          <button
            onClick={clearFilters}
            className="mt-2 text-xs underline text-[#CEC2A3]"
          >
            Reset Filters
          </button>
        </div>
      )}
    </main>
  );
};

export default ProductGrid;