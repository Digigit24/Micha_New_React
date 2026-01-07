import React, { useEffect, useMemo, useState } from "react";
import Product from "./Product.jsx";
import AboutContent from "./about/AboutContent";
import CategoryGrid from "./categories/CategoryGrid";
// Footer is handled externally

const Hero = () => {
  // Theme colors
  const WHITE = "#FFFFFF";
  const SAND = "#CEC2A3";
  const BROWN = "#3B2F2A";
  const BROWN_DEEP = "#2A201C";
  const BLACK = "#000000";
  const GOLD = "#D4AF37";

  // Slides configuration
  const slides = useMemo(
    () => [
      { id: 1, img: "src/assets/slide-six.jpg", alt: "Micha Hero Slide 1" },
      { id: 2, img: "src/assets/slide-two.jpg", alt: "Micha Hero Slide 2" },
      { id: 3, img: "src/assets/slide-three.jpg", alt: "Micha Hero Slide 3" },
      { id: 4, img: "src/assets/slide-four.jpg", alt: "Micha Hero Slide 4" },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Slider Navigation Logic
  const goPrev = () => setIndex((p) => (p - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((p) => (p + 1) % slides.length);

  // Auto slide (5 seconds)
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, [paused, slides.length]);

  const activeSlide = slides[index];

  const openActiveImage = () => {
    window.open(activeSlide.img, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full bg-white">
      {/* 
        CSS FOR SCROLL SNAPPING 
      */}
      <style>{`
        html {
          scroll-snap-type: y mandatory;
          scroll-behavior: smooth;
        }
        .snap-section {
          scroll-snap-align: start;
          scroll-snap-stop: always;
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          /* Align to top so padding pushes content down correctly */
          justify-content: flex-start; 
          position: relative;
        }
        /* Specific fix for Hero to stay centered */
        .snap-hero {
          justify-content: center;
        }
      `}</style>

      {/* =========================================
          1. HERO SLIDER SECTION (SNAP 1)
      ========================================== */}
      <div className="snap-section snap-hero relative overflow-hidden">
        <div
          className="relative w-full h-screen" 
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Slide Images */}
          {slides.map((s, i) => (
            <img
              key={s.id}
              src={s.img}
              alt={s.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              draggable={false}
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}

          {/* Overlay */}
          <div
            className="absolute inset-0 z-[6]"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 0.69) 0%, rgba(255, 255, 255, 0.38) 45%, rgba(255,255,255,0.08) 100%)",
            }}
          />

          {/* Click Handler */}
          <button
            type="button"
            onClick={openActiveImage}
            aria-label="Open current banner image"
            className="absolute inset-0 z-[7] cursor-pointer bg-transparent"
          />

          {/* Left Arrow */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-[20] w-11 h-11 rounded-full border flex items-center justify-center transition hover:bg-[#CEC2A3]/80"
            style={{
              borderColor: "rgba(59,47,42,0.28)",
              backgroundColor: "rgba(255,255,255,0.78)",
              color: BROWN,
              backdropFilter: "blur(10px)",
            }}
          >
            <span className="text-xl leading-none select-none">‹</span>
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-[20] w-11 h-11 rounded-full border flex items-center justify-center transition hover:bg-[#CEC2A3]/80"
            style={{
              borderColor: "rgba(59,47,42,0.28)",
              backgroundColor: "rgba(255,255,255,0.78)",
              color: BROWN,
              backdropFilter: "blur(10px)",
            }}
          >
            <span className="text-xl leading-none select-none">›</span>
          </button>

          {/* Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[20] flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                className="w-2.5 h-2.5 rounded-full transition"
                style={{ backgroundColor: i === index ? BROWN : "rgba(59,47,42,0.22)" }}
              />
            ))}
          </div>

          {/* Center Text Content */}
          <div className="absolute inset-0 z-[20] pointer-events-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
              <div className="w-full max-w-3xl text-center pointer-events-auto">
                <h1
                  className="mb-5 hero-3d hero-signature"
                  style={{
                    color: BLACK,
                    fontFamily: "'Allura', cursive",
                    fontSize: "clamp(4.5rem, 10vw, 7.8rem)",
                    lineHeight: "0.95",
                    fontWeight: 700,
                    WebkitTextStroke: "1.2px rgba(0,0,0,0.45)",
                    textShadow: `0 1px 0 rgba(255, 255, 255, 0.25), 0 4px 10px rgba(255, 255, 255, 0.35)`,
                  }}
                >
                  Micha
                </h1>

                <p className="mb-8 text-base sm:text-lg" style={{ color: BROWN }}>
                  Micha is your all-in-one AI assistant designed to simplify content creation,
                  enhance productivity, and unlock new possibilities.
                </p>

                <div className="flex justify-center gap-4 flex-wrap">
                  <a
                    href="/product"
                    className="px-6 py-3 text-white text-sm font-semibold rounded-xl shadow transition hover:opacity-90"
                    style={{ backgroundColor: BROWN_DEEP }}
                  >
                    Explore Products
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero 3D Animation CSS */}
        <style>{`
          .hero-3d {
            transform: perspective(1000px) rotateX(10deg);
            animation: float3d 3.6s ease-in-out infinite;
            will-change: transform;
          }
          @keyframes float3d {
            0%, 100% { transform: perspective(1000px) rotateX(10deg) translateY(0px); }
            50% { transform: perspective(1000px) rotateX(12deg) translateY(-7px); }
          }
        `}</style>
      </div>

      {/* =========================================
          2. ABOUT SECTION (SNAP 2)
      ========================================== */}
      <div className="snap-section bg-white">
        {/* Added Padding Top (pt-24) to create margin from fixed header */}
        <div className="pt-24 md:pt-32 h-full flex flex-col justify-center">
          <AboutContent />
        </div>
      </div>

      {/* =========================================
          3. CATEGORIES SECTION (SNAP 3)
      ========================================== */}
      <div className="snap-section bg-white">
        {/* Added Padding Top (pt-24) */}
        <div className="w-full pt-24 md:pt-32 pb-10 h-full flex flex-col justify-center">
          
          <div className="max-w-7xl mx-auto px-4 text-center mb-10">
            <h4 
              className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 opacity-80" 
              style={{ color: GOLD }}
            >
              Discover
            </h4>
            <h2 
              className="text-4xl md:text-6xl font-bold" 
              style={{ color: BROWN, fontFamily: "'Allura', cursive" }}
            >
              Our Collections
            </h2>
            <div 
              className="h-1 w-20 mx-auto mt-4 rounded-full"
              style={{ background: SAND }}
            ></div>
          </div>
          
          <CategoryGrid />
        </div>
      </div>

      {/* =========================================
          4. PRODUCT SECTION (SNAP 4)
      ========================================== */}
      <div className="snap-section bg-white">
        {/* Added Padding Top (pt-24) */}
        <div className="pt-24 md:pt-32 h-full">
          <Product />
        </div>
      </div>

    </div>
  );
};

export default Hero;