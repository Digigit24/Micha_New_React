import React, { useState, useMemo } from "react";
import { FiFilter } from "react-icons/fi";
import ProductSidebar from "./ProductSidebar";
import ProductCard from "./ProductCard";

const ProductPage = () => {
  const BROWN = "#3B2F2A";
  const GOLD = "#D4AF37";

  // 1. Data Source
  const allProducts = useMemo(() => [
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

  // 2. Filter States
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(1000);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // 3. Filtering Logic
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchPrice = product.price <= priceRange;
      return matchCategory && matchPrice;
    });
  }, [selectedCategory, priceRange, allProducts]);

  // Extract Categories dynamically
  const categories = ["All", ...new Set(allProducts.map(p => p.category))];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="animate-fade-in">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: GOLD }}>Shop Now</h4>
            <h2 className="text-4xl font-bold" style={{ color: BROWN, fontFamily: "'Allura', cursive" }}>
              Our Products
            </h2>
          </div>
          
          {/* Mobile Filter Button (Visible only on small screens) */}
          <button 
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 px-5 py-2.5 border rounded-full text-sm font-bold transition hover:bg-gray-50 shadow-sm"
            style={{ color: BROWN, borderColor: "rgba(59,47,42,0.2)" }}
          >
            <FiFilter /> Filter Products
          </button>
        </div>

        {/* Main Layout: Sidebar + Grid */}
        <div className="flex gap-10 items-start">
          
          {/* Sidebar Component */}
          <ProductSidebar 
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            isMobileOpen={isMobileFilterOpen}
            closeMobile={() => setIsMobileFilterOpen(false)}
          />

          {/* Product Grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))
              ) : (
                <div className="col-span-full py-20 text-center flex flex-col items-center">
                  <div className="text-6xl mb-4">🍂</div>
                  <h3 className="text-lg font-bold text-[#3B2F2A]">No products found</h3>
                  <p className="text-gray-500">Try adjusting your price range or category.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
      
      <style>{`
        .animate-fade-in {
          animation: simpleFade 1s ease-out forwards;
        }
        @keyframes simpleFade {
          from { opacity: 0; } to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default ProductPage;