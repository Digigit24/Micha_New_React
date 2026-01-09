import React, { useMemo, useState } from "react";
import { FiShoppingCart, FiSearch, FiFilter, FiHeart, FiStar, FiX } from "react-icons/fi";
import Footer from "./Footer.jsx";

// --- COLORS ---
const COLORS = {
  SAND: "#CEC2A3",
  BROWN: "#3B2F2A",
  WHITE: "#FFFFFF",
  LIGHT_BG: "#FAF9F6",
};

// --- 1. PRODUCT CARD COMPONENT ---
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
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f5f0]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-sm text-[#3B2F2A] rounded-full shadow-sm">
          {product.finish}
        </div>
        <div className="absolute inset-0 bg-[#3B2F2A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button className="bg-white text-[#3B2F2A] h-9 w-9 rounded-full flex items-center justify-center hover:bg-[#CEC2A3] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-md">
            <FiShoppingCart size={16} />
          </button>
          <button className="bg-white text-[#3B2F2A] h-9 w-9 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 shadow-md">
            <FiHeart size={16} />
          </button>
        </div>
      </div>
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

// --- 2. SIDEBAR COMPONENT ---
const Sidebar = ({ 
  categories, activeCategory, setActiveCategory, 
  searchQuery, setSearchQuery, 
  priceRange, setPriceRange 
}) => {
  return (
    <>
      {/* MOBILE: Horizontal Scroll */}
      <div className="md:hidden w-full mb-6 space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#3B2F2A]/10 rounded-full py-2.5 pl-10 text-sm focus:outline-none focus:border-[#CEC2A3]"
          />
          <FiSearch className="absolute left-3.5 top-3 text-[#3B2F2A]/40" />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold border transition-colors ${
                activeCategory === cat 
                ? "bg-[#3B2F2A] text-white border-[#3B2F2A]" 
                : "bg-white text-[#3B2F2A] border-[#3B2F2A]/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* DESKTOP: STICKY SIDEBAR 
          "sticky top-32" makes it fix to screen until the parent container ends.
          "self-start" prevents it from stretching.
      */}
      <aside className="hidden md:block w-64 lg:w-72 sticky top-32 self-start space-y-6 pr-4">
        
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#3B2F2A]/10 rounded-full px-4 py-3 pl-10 text-sm focus:outline-none focus:ring-1 focus:ring-[#CEC2A3] shadow-sm"
          />
          <FiSearch className="absolute left-3.5 top-3.5 text-[#3B2F2A]/40" />
        </div>

        {/* Categories */}
        <div className="bg-white p-5 rounded-2xl border border-[#3B2F2A]/5 shadow-sm">
          <h3 className="font-bold text-[#3B2F2A] mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
            <FiFilter size={14} /> Categories
          </h3>
          <div className="flex flex-col gap-1 max-h-[40vh] overflow-y-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? "bg-[#3B2F2A] text-white shadow-md translate-x-1" 
                    : "text-[#3B2F2A]/70 hover:bg-[#FAF9F6] hover:text-[#3B2F2A]"
                }`}
              >
                {cat}
                {activeCategory === cat && <span className="w-1.5 h-1.5 rounded-full bg-[#CEC2A3]" />}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="bg-white p-5 rounded-2xl border border-[#3B2F2A]/5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-[#3B2F2A] text-sm">Price Range</h3>
            <span className="text-[10px] font-mono bg-[#CEC2A3]/20 px-2 py-0.5 rounded text-[#3B2F2A]">₹{priceRange}</span>
          </div>
          <input
            type="range"
            min="0"
            max="1000"
            step="50"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#3B2F2A]"
          />
          <div className="flex justify-between text-[10px] text-[#3B2F2A]/40 mt-2">
            <span>₹0</span>
            <span>₹1000+</span>
          </div>
        </div>

      </aside>
    </>
  );
};

// --- 3. MAIN PRODUCT PAGE ---
const Product = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState(1000);

  const products = useMemo(() => [
    { id: 1, name: "Velvet Matte Lipstick", price: 499, rating: 4.6, image: "src/assets/product-one.jpg", category: "Lips", finish: "Matte" },
    { id: 2, name: "Hydrating Lip Gloss", price: 399, rating: 4.4, image: "src/assets/product-two.jpg", category: "Lips", finish: "Glossy" },
    { id: 3, name: "Soft Blur Foundation", price: 699, rating: 4.5, image: "src/assets/product-three.jpg", category: "Face", finish: "Natural" },
    { id: 4, name: "Radiant Concealer", price: 549, rating: 4.3, image: "src/assets/product-four.jpg", category: "Face", finish: "Radiant" },
    { id: 5, name: "Glow Highlighter", price: 599, rating: 4.7, image: "src/assets/product-five.jpg", category: "Cheek", finish: "Shimmer" },
    { id: 6, name: "Kajal Eyeliner", price: 299, rating: 4.5, image: "src/assets/product-six.jpg", category: "Eyes", finish: "Matte" },
    { id: 7, name: "Liquid Lipstick", price: 699, rating: 4.6, image: "src/assets/product-seven.jpg", category: "Lips", finish: "Long-wear" },
    { id: 8, name: "Nourishing Lip Balm", price: 199, rating: 4.2, image: "src/assets/product-eight.jpg", category: "Care", finish: "Sheer" },
    { id: 9, name: "Waterproof Mascara", price: 599, rating: 4.5, image: "src/assets/product-nine.jpg", category: "Eyes", finish: "Volumizing" },
    { id: 10, name: "Setting Spray", price: 799, rating: 4.8, image: "src/assets/product-ten.jpg", category: "Face", finish: "Dewy" },
  ], []);

  const categories = useMemo(() => ["All", ...new Set(products.map((p) => p.category))], [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCat = activeCategory === "All" || product.category === activeCategory;
      const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchPrice = product.price <= priceRange;
      return matchCat && matchSearch && matchPrice;
    });
  }, [activeCategory, searchQuery, priceRange, products]);

  const clearFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
    setPriceRange(1000);
  };

  return (
    <div className="w-full min-h-screen bg-[#FAF9F6]">
      
      {/* WRAPPER: Centers content, adds padding for header */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-20">
        
        {/* Page Title */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-bold text-[#3B2F2A]">Shop Collection</h1>
          <p className="text-sm text-[#3B2F2A]/70">Explore our premium cosmetics range.</p>
        </div>

        {/* FLEX CONTAINER: Holds Sticky Sidebar & Right Grid */}
        <div className="flex flex-col md:flex-row gap-8 items-start relative">
          
          {/* LEFT SIDE: Sticky Sidebar */}
          <Sidebar 
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />

          {/* RIGHT SIDE: Scrollable Grid */}
          <main className="flex-1 w-full min-h-[600px]">
            
            {/* Filter Status Bar */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#3B2F2A]/5">
              <span className="text-xs font-bold text-[#3B2F2A]/60 uppercase tracking-wider">
                {filteredProducts.length} Results
              </span>
              {(activeCategory !== "All" || searchQuery !== "" || priceRange < 1000) && (
                <button onClick={clearFilters} className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-[#3B2F2A] hover:text-[#CEC2A3] transition-colors">
                  <FiX /> Clear
                </button>
              )}
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredProducts.map((p, idx) => (
                  <ProductCard key={p.id} product={p} index={idx} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed rounded-xl border-[#3B2F2A]/10">
                <FiSearch size={32} className="text-[#3B2F2A]/40 mb-2" />
                <p className="text-sm font-bold text-[#3B2F2A]">No matches found</p>
                <button onClick={clearFilters} className="mt-2 text-xs underline text-[#CEC2A3]">Reset</button>
              </div>
            )}
          </main>
        </div>
      </section>

      {/* FOOTER: Outside the layout wrapper, so it spans full width at the bottom */}
      <Footer />

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Product;