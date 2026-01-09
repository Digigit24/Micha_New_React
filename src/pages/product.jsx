import React, { useMemo, useState } from "react";
import ProductSidebar from "../components/products/ProductSidebar";
import ProductGrid from "../components/products/ProductGrid";
import Footer from "../components/Footer";

const Product = () => {
  // --- 1. STATE ---
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState(1000);

  // --- 2. DATA ---
  const products = useMemo(
    () => [
      { id: 1, name: "Velvet Matte Lipstick", price: 499, rating: 4.6, image: "src/assets/product-one.jpg", category: "Lips", finish: "Matte" },
      { id: 2, name: "Hydrating Lip Gloss", price: 399, rating: 4.4, image: "src/assets/product-two.jpg", category: "Lips", finish: "Glossy" },
      { id: 3, name: "Soft Blur Foundation", price: 699, rating: 4.5, image: "src/assets/product-three.jpg", category: "Face", finish: "Natural" },
      { id: 4, name: "Radiant Concealer", price: 549, rating: 4.3, image: "src/assets/product-four.jpg", category: "Face", finish: "Radiant" },
      { id: 5, name: "Glow Highlighter", price: 599, rating: 4.7, image: "src/assets/product-five.jpg", category: "Cheek", finish: "Shimmer" },
      { id: 6, name: "Kajal Eyeliner", price: 299, rating: 4.5, image: "src/assets/product-six.jpg", category: "Eyes", finish: "Matte" },
      { id: 7, name: "Liquid Lipstick", price: 699, rating: 4.6, image: "src/assets/product-seven.jpeg", category: "Lips", finish: "Long-wear" },
      { id: 8, name: "Nourishing Lip Balm", price: 199, rating: 4.2, image: "src/assets/product-eight.jpg", category: "Care", finish: "Sheer" },
      { id: 9, name: "Waterproof Mascara", price: 599, rating: 4.5, image: "src/assets/product-nine.jpg", category: "Eyes", finish: "Volumizing" },
      { id: 10, name: "Setting Spray", price: 799, rating: 4.8, image: "src/assets/product-ten.jpg", category: "Face", finish: "Dewy" },
    ],
    []
  );

  const categories = useMemo(
    () => ["All", ...new Set(products.map((p) => p.category))],
    [products]
  );

  // --- 3. FILTER LOGIC ---
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

  const isFiltered = activeCategory !== "All" || searchQuery !== "" || priceRange < 1000;

  return (
    <div className="w-full min-h-screen bg-[#FAF9F6] flex flex-col">
      
      {/* WRAPPER */}
      <div className="flex-grow max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-20">
        
        {/* HEADER */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-bold text-[#3B2F2A]">Shop Collection</h1>
          <p className="text-sm text-[#3B2F2A]/70">Explore our premium cosmetics range.</p>
        </div>

        {/* --- MAIN LAYOUT --- 
            1. flex-col md:flex-row -> Stack on Mobile, Side-by-side on Desktop
            2. items-start -> REQUIRED for sticky sidebar to work (prevents stretching)
            3. relative -> Context for positioning
        */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start relative">
          
          {/* LEFT SIDE (Will Stick) */}
          <ProductSidebar
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />

          {/* RIGHT SIDE (Scrolls) */}
          <ProductGrid 
            filteredProducts={filteredProducts}
            clearFilters={clearFilters}
            isFiltered={isFiltered}
          />

        </div>
      </div>

      <Footer />
      
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};

export default Product;