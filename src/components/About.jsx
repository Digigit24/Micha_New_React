import React from "react";
import Footer from "./Footer.jsx";
import AboutHero from "./about/AboutHero.jsx";       
import AboutContent from "./about/AboutContent.jsx"; 
import AboutMission from "./about/AboutMission.jsx"; 
import AboutJourney from "./about/AboutJournery.jsx"; 

const About = () => {
  const WHITE = "#FFFFFF";

  return (
    // Reduced padding-top to pt-16 (mobile) and md:pt-20 (desktop)
    <div className="w-full overflow-hidden pt-16 md:pt-20" style={{ background: WHITE }}>
      
      {/* 1. Upper Hero Section */}
      <AboutHero />

      {/* 2. Main Content Intro */}
      <AboutContent />

      {/* 3. Brand Mission (Static Attractive Section) */}
      <AboutMission />

      {/* 4. Brand Journey (Slider Section) */}
      <AboutJourney />

      {/* 5. Footer */}
      <Footer />
      
    </div>
  );
};

export default About;