import React from "react";
import CategoryHero from "./categories/CategoryHero";
import CategoryGrid from "./categories/CategoryGrid";
import Footer from "./Footer.jsx"; 

const Categories = () => {
  const WHITE = "#FFFFFF";

  return (
    <div 
      // UPDATED: Reduced padding to pt-20 (mobile) and pt-24 (desktop)
      className="w-full min-h-screen flex flex-col pt-20 md:pt-24" 
      style={{ background: WHITE }}
    >
      
      {/* 1. Hero Section */}
      <CategoryHero />

      {/* 2. Grid Section (Contains Cards) */}
      <CategoryGrid />

      {/* 3. Footer */}
      <Footer />
      
    </div>
  );
};

export default Categories;