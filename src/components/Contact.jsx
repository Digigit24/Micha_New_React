import React from "react";
import { FiArrowUpRight, FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";
import Footer from "./Footer.jsx"; 

const Contact = () => {
  // Theme Colors
  const SAND = "#CEC2A3";
  const BROWN = "#3B2F2A";
  const GOLD = "#D4AF37";
  const CREAM = "#F4F1EA"; 

  return (
    // UPDATED: Added pt-20 (mobile) and md:pt-24 (desktop) to clear the Fixed Header
    <div className="w-full flex flex-col pt-20 md:pt-24">
      
      {/* =============================================
          CONTACT SECTION
      ============================================== */}
      <section className="relative w-full min-h-screen flex flex-col lg:flex-row bg-white overflow-hidden">
        
        {/* 
            LEFT PANEL: Soft Beige Sidebar 
        */}
        <div 
          className="w-full lg:w-[40%] text-[#3B2F2A] p-6 md:p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden"
          style={{ 
            backgroundColor: CREAM, 
            color: BROWN 
          }}
        >
          {/* Background Texture/Shape */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-[#3B2F2A] opacity-5 translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#D4AF37] opacity-10 blur-3xl -translate-x-1/2 translate-y-1/2"></div>

          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col gap-8">

            {/* Top: Header */}
            <div className="animate-fade-in">
              <h5 className="text-xs font-bold tracking-[0.3em] uppercase mb-2 opacity-60">
                Contact Us
              </h5>
              <h1 
                className="text-4xl md:text-6xl leading-tight"
                style={{ fontFamily: "'Allura', cursive", color: GOLD }} 
              >
                Let's start a <br/> conversation.
              </h1>
            </div>

            {/* Middle: Image */}
            <div className="w-full max-w-xs aspect-[4/5] overflow-hidden rounded-t-full border-b border-[#3B2F2A]/10 group shadow-xl mx-auto lg:mx-0">
                <div className="relative w-full h-full">
                  <img 
                      src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2574&auto=format&fit=crop" 
                      alt="Micha Aesthetic" 
                      className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B2F2A] to-transparent opacity-40"></div>
                  <div className="absolute bottom-4 left-4">
                      <p className="text-white text-xs italic drop-shadow-md">"Beauty begins the moment you decide to be yourself."</p>
                  </div>
                </div>
            </div>

            {/* Bottom: Contact Details */}
            <div className="space-y-5 animate-slide-up">
              
              {/* Item 1 */}
              <div className="group cursor-pointer">
                <div className="flex items-center justify-between border-b border-[#3B2F2A]/20 pb-1 mb-1">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">Address</span>
                    <FiArrowUpRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#D4AF37]" />
                </div>
                <p className="text-base font-medium">123 Champs-Élysées, 75008 Paris, France</p>
              </div>

              {/* Item 2 */}
              <div className="group cursor-pointer">
                <div className="flex items-center justify-between border-b border-[#3B2F2A]/20 pb-1 mb-1">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">Email</span>
                    <FiArrowUpRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#D4AF37]" />
                </div>
                <p className="text-base font-medium">hello@michacosmetics.com</p>
              </div>

               {/* Item 3 */}
               <div className="group cursor-pointer">
                <div className="flex items-center justify-between border-b border-[#3B2F2A]/20 pb-1 mb-1">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">Socials</span>
                </div>
                <div className="flex gap-4 pt-1 text-[#3B2F2A]">
                    <FiInstagram className="hover:text-[#D4AF37] transition-colors cursor-pointer" size={18} />
                    <FiFacebook className="hover:text-[#D4AF37] transition-colors cursor-pointer" size={18} />
                    <FiTwitter className="hover:text-[#D4AF37] transition-colors cursor-pointer" size={18} />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 
            RIGHT PANEL: Form
        */}
        <div className="w-full lg:w-[60%] bg-[#FFFFFF] p-8 md:p-16 lg:p-24 flex flex-col justify-center relative">
          
          <div className="max-w-xl mx-auto w-full animate-slide-up-delayed">
              <h2 className="text-3xl font-bold mb-2" style={{ color: BROWN }}>Send a Message</h2>
              <p className="text-gray-500 mb-10">We usually respond within 24 hours.</p>

              <form className="space-y-10">
                  
                  {/* Input: Name */}
                  <div className="relative group">
                      <input 
                          type="text" 
                          id="name" 
                          className="block w-full border-0 border-b-2 border-gray-200 bg-transparent py-3 text-lg md:text-xl font-medium text-[#3B2F2A] focus:border-[#D4AF37] focus:ring-0 transition-colors placeholder-transparent peer" 
                          placeholder="John Doe"
                      />
                      <label 
                          htmlFor="name" 
                          className="absolute top-3 left-0 text-base text-gray-400 duration-300 transform -translate-y-7 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-[#D4AF37]"
                      >
                          What's your name?
                      </label>
                  </div>

                  {/* Input: Email */}
                  <div className="relative group">
                      <input 
                          type="email" 
                          id="email" 
                          className="block w-full border-0 border-b-2 border-gray-200 bg-transparent py-3 text-lg md:text-xl font-medium text-[#3B2F2A] focus:border-[#D4AF37] focus:ring-0 transition-colors placeholder-transparent peer" 
                          placeholder="john@example.com"
                      />
                      <label 
                          htmlFor="email" 
                          className="absolute top-3 left-0 text-base text-gray-400 duration-300 transform -translate-y-7 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-[#D4AF37]"
                      >
                          Your email address?
                      </label>
                  </div>

                  {/* Input: Subject */}
                  <div className="relative group">
                      <input 
                          type="text" 
                          id="subject" 
                          className="block w-full border-0 border-b-2 border-gray-200 bg-transparent py-3 text-lg md:text-xl font-medium text-[#3B2F2A] focus:border-[#D4AF37] focus:ring-0 transition-colors placeholder-transparent peer" 
                          placeholder="Collaboration"
                      />
                      <label 
                          htmlFor="subject" 
                          className="absolute top-3 left-0 text-base text-gray-400 duration-300 transform -translate-y-7 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-[#D4AF37]"
                      >
                          Subject
                      </label>
                  </div>

                  {/* Input: Message */}
                  <div className="relative group">
                      <textarea 
                          id="message" 
                          rows="3"
                          className="block w-full border-0 border-b-2 border-gray-200 bg-transparent py-3 text-lg md:text-xl font-medium text-[#3B2F2A] focus:border-[#D4AF37] focus:ring-0 transition-colors placeholder-transparent peer resize-none" 
                          placeholder="Tell us about it..."
                      ></textarea>
                      <label 
                          htmlFor="message" 
                          className="absolute top-3 left-0 text-base text-gray-400 duration-300 transform -translate-y-7 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-[#D4AF37]"
                      >
                          Tell us more...
                      </label>
                  </div>

                  {/* Magnetic Button */}
                  <div className="pt-6">
                      <button 
                          type="button" 
                          className="group relative w-full overflow-hidden rounded-full py-4 px-8 text-center transition-transform hover:scale-[1.01]"
                          style={{ background: BROWN }}
                      >
                          <div className="absolute inset-0 w-0 bg-[#D4AF37] transition-all duration-[600ms] ease-out group-hover:w-full"></div>
                          <span className="relative flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-[#CEC2A3] transition-colors group-hover:text-[#3B2F2A]">
                              Send Message <FiArrowUpRight size={18} />
                          </span>
                      </button>
                  </div>

              </form>
          </div>
        </div>
      </section>

      <Footer />

      {/* Animation Styles */}
      <style>{`
        .animate-fade-in {
            animation: fadeIn 1s ease-out forwards;
            opacity: 0;
        }
        @keyframes fadeIn { to { opacity: 1; } }

        .animate-slide-up {
            animation: slideUp 1s ease-out 0.2s forwards;
            opacity: 0;
            transform: translateY(20px);
        }

        .animate-slide-up-delayed {
            animation: slideUp 1s ease-out 0.5s forwards;
            opacity: 0;
            transform: translateY(40px);
        }

        @keyframes slideUp { to { opacity: 1; transform: translateY(0); } }

        input:focus, textarea:focus {
            outline: none;
            box-shadow: none;
        }
      `}</style>

    </div>
  );
};

export default Contact;