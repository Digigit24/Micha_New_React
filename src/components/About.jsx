import React from "react";
import Footer from "./Footer.jsx";
import AboutHero from "./about/AboutHero";       
import AboutContent from "./about/AboutContent"; 

const About = () => {
  const WHITE = "#FFFFFF";

  return (
    <div 
      // UPDATED: Reduced padding to pt-20 (mobile) and pt-24 (desktop)
      className="w-full overflow-hidden pt-20 md:pt-24" 
      style={{ background: WHITE }}
    >
      
      {/* 1. Upper Hero Section */}
      <AboutHero />

      {/* 2. Main Content Section (Intro) */}
      <AboutContent />

      {/* 3. Footer */}
      <Footer />
      
    </div>
  );
};

export default About;