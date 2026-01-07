import React, { useEffect, useMemo, useState } from "react";
import { FiShoppingCart } from "react-icons/fi"; 
import Footer from "./Footer.jsx";

const Product = () => {
  const SAND = "#CEC2A3";
  const BROWN = "#3B2F2A";
  const WHITE = "#FFFFFF";

  const [currentSlide, setCurrentSlide] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(4);

  // Product Data
  const products = useMemo(
    () => [
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
    ],
    []
  );

  // Responsive products per page
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setProductsPerPage(1);      // Mobile
      else if (w < 768) setProductsPerPage(2); // Small Tablet
      else if (w < 1024) setProductsPerPage(3); // Tablet/Laptop
      else setProductsPerPage(4);              // Desktop
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.max(1, Math.ceil(products.length / productsPerPage));

  useEffect(() => {
    if (currentSlide > totalSlides - 1) setCurrentSlide(totalSlides - 1);
  }, [totalSlides, currentSlide]);

  const start = currentSlide * productsPerPage;
  const visibleProducts = products.slice(start, start + productsPerPage);

  const goPrev = () => setCurrentSlide((p) => (p - 1 + totalSlides) % totalSlides);
  const goNext = () => setCurrentSlide((p) => (p + 1) % totalSlides);

  return (
    // UPDATED: Added pt-24 (mobile) and md:pt-32 (desktop) to create space for the fixed header
    <section 
      className="w-full min-h-screen flex flex-col justify-between pt-24 md:pt-32" 
      style={{ background: WHITE }}
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-auto">
        
        {/* Header Row */}
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: BROWN }}>
              Products
            </h1>
            <p className="mt-2 text-sm sm:text-base" style={{ color: BROWN, opacity: 0.8 }}>
              Premium cosmetics curated for everyday glam.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              className="px-4 py-2 rounded-full border text-sm font-semibold btn-press transition-colors duration-200"
              style={{
                borderColor: "rgba(59,47,42,0.25)",
                color: BROWN,
                background: "rgba(206,194,163,0.22)",
              }}
            >
              Prev
            </button>

            <button
              type="button"
              onClick={goNext}
              className="px-4 py-2 rounded-full border text-sm font-semibold btn-press transition-colors duration-200"
              style={{
                borderColor: "rgba(59,47,42,0.25)",
                color: BROWN,
                background: "rgba(206,194,163,0.22)",
              }}
            >
              Next
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[400px]">
          {visibleProducts.map((p, idx) => (
            <article
              key={p.id}
              className="rounded-2xl overflow-hidden border card-anim group relative"
              style={{
                borderColor: "rgba(59,47,42,0.18)",
                background: "rgba(206,194,163,0.10)",
                animationDelay: `${idx * 100}ms`,
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ background: "rgba(206,194,163,0.25)" }}
                  loading="lazy"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background: "linear-gradient(to top, rgba(59,47,42,0.85), rgba(59,47,42,0))",
                  }}
                >
                  <div className="text-xs font-semibold" style={{ color: WHITE, opacity: 0.95 }}>
                    {p.category} • {p.finish}
                  </div>
                </div>
              </div>

              <div className="p-4 flex flex-col h-[calc(100%-16rem)] justify-between">
                <div>
                  <h3 className="text-base font-bold leading-snug" style={{ color: BROWN }}>
                    {p.name}
                  </h3>
                  <div className="mt-1 text-xs" style={{ color: BROWN, opacity: 0.85 }}>
                    ⭐ {p.rating} / 5.0
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-lg font-bold" style={{ color: BROWN }}>
                    ₹{p.price}
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    type="button"
                    className="px-4 py-2 rounded-full text-sm font-semibold btn-press flex items-center gap-2 transition-all hover:brightness-95"
                    style={{
                      background: SAND,
                      color: BROWN,
                      border: "1px solid rgba(59,47,42,0.20)",
                    }}
                  >
                    <FiShoppingCart size={16} /> Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Slide indicator */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? "w-8" : "w-2.5"
              }`}
              style={{
                background: i === currentSlide ? BROWN : "rgba(59,47,42,0.25)",
              }}
            />
          ))}
        </div>
      </div>

      <Footer />

      {/* Animations CSS */}
      <style>{`
        .card-anim {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .card-anim:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px -10px rgba(59, 47, 42, 0.2);
          border-color: rgba(59,47,42,0.3);
        }

        .btn-press:active {
          transform: scale(0.95);
        }
      `}</style>
    </section>
  );
};

export default Product;