import React, { useState, useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ListingFilters from "../components/products/ListingFilters";
import ListingItem from "../components/products/ListingItem";
import Footer from "../components/Footer"; 

// FIXED IMPORT PATH: adjusted to point correctly to your data folder
import { products, categories } from "../../src/components/data/shopData"; 

const CategoryCollection = () => {
  const { slug } = useParams(); 
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filter State
  const [filters, setFilters] = useState({
    maxPrice: 150,
    shades: [],
  });

  // 1. Get Category Details
  const categoryInfo = categories.find((cat) => cat.slug === slug);

  // 2. Scroll to top when category changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // 3. Filter Logic
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Category Match
      if (item.category !== slug) return false;
      
      // Price Match
      if (item.price > filters.maxPrice) return false;

      // Shade Match
      if (filters.shades.length > 0) {
        return item.shades.some(s => filters.shades.includes(s)); 
      }

      return true;
    });
  }, [slug, filters]);

  // Handle case where category doesn't exist
  if (!categoryInfo) return <div className="min-h-screen flex items-center justify-center">Category Not Found</div>;

  return (
    // MAIN WRAPPER FIXES:
    // 1. min-h-screen: Allows the page to grow so you can scroll (fixes "stuck on screen")
    // 2. overflow-x-hidden: Prevents the website from moving left/right on mobile
    <div className="bg-white min-h-screen flex flex-col w-full overflow-x-hidden relative">
      
      {/* Hero Header */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden bg-gray-900">
        <img 
          src={categoryInfo.image} 
          alt={categoryInfo.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2 uppercase">
            {categoryInfo.title}
          </h1>
          <p className="text-lg opacity-90">{categoryInfo.count} Products Found</p>
        </div>
      </div>

      {/* Main Content Area */}
      {/* flex-grow ensures this section pushes the footer down if there are few products */}
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Filter Toggle Button */}
          <div className="lg:hidden mb-4">
            <button 
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="w-full py-3 bg-gray-100 rounded-lg font-medium text-gray-900 hover:bg-gray-200 transition flex justify-center items-center gap-2"
            >
              <span>{mobileFiltersOpen ? "Hide Filters" : "Show Filters"}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </button>
          </div>

          {/* Sidebar Area */}
          {/* Responsive Logic: Hidden on mobile unless toggled, Always visible on Desktop (lg) */}
          <aside className={`lg:w-1/4 ${mobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24">
              <ListingFilters filters={filters} setFilters={setFilters} />
            </div>
          </aside>

          {/* Product Grid Area */}
          <main className="lg:w-3/4 w-full">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
                {filteredProducts.map((product) => (
                  <ListingItem key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-200 rounded-xl w-full">
                <p className="text-gray-500 mb-2">No products found matching filters.</p>
                <button 
                  onClick={() => setFilters({ maxPrice: 150, shades: [] })}
                  className="text-purple-600 font-medium underline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </main>

        </div>
      </div>

      {/* Footer is now part of the flex column, sitting at the bottom of the content */}
      <Footer />

    </div>
  );
};

export default CategoryCollection;