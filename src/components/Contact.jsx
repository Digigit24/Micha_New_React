import React from "react";
import { FiArrowUpRight, FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";
import Footer from "./Footer.jsx"; 

const Contact = () => {
  // Theme Colors
  const BROWN = "#3B2F2A";
  const GOLD = "#D4AF37";
  const CREAM = "#F4F1EA"; 

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      
      {/* 1. REDUCED HEADER SPACER - Decreased from 24 to 20 on desktop, 16 on mobile */}
      <div className="h-16 md:h-20 w-full flex-shrink-0" />

      {/* 2. MAIN CONTENT WRAPPER */}
      <main className="flex-grow flex flex-col lg:flex-row">
        
        {/* LEFT PANEL: Sidebar */}
        <aside 
          className="w-full lg:w-[40%] px-6 py-10 md:p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden"
          style={{ backgroundColor: CREAM }}
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-[#3B2F2A] opacity-5 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col gap-8 md:gap-12">
            {/* Heading */}
            <div className="animate-fade-in text-center lg:text-left">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#3B2F2A]/50 block mb-2">
                Get in Touch
              </span>
              <h1 
                className="text-4xl md:text-6xl lg:text-7xl leading-tight"
                style={{ fontFamily: "'Allura', cursive", color: GOLD }} 
              >
                Let's start a <br className="hidden md:block"/> conversation.
              </h1>
            </div>

            {/* Image Mask - Resized for better mobile fit */}
            <div className="w-full max-w-[240px] md:max-w-[280px] aspect-[4/5] relative group overflow-hidden rounded-t-full shadow-2xl mx-auto lg:mx-0">
                <img 
                    src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2574&auto=format&fit=crop" 
                    alt="Contact Micha" 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B2F2A]/60 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-0 right-0 text-center px-4">
                    <p className="text-white text-[9px] md:text-[10px] italic tracking-widest leading-relaxed">
                        "BEAUTY BEGINS THE MOMENT YOU DECIDE TO BE YOURSELF"
                    </p>
                </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-5 md:space-y-6 animate-slide-up">
              <div className="group cursor-default border-b border-[#3B2F2A]/10 pb-2">
                <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#3B2F2A]/40">Email</span>
                    <FiArrowUpRight className="text-[#D4AF37] opacity-0 lg:group-hover:opacity-100 transition-all transform lg:group-hover:translate-x-1" />
                </div>
                <p className="mt-1 text-sm md:text-base font-medium text-[#3B2F2A]">hello@michacosmetics.com</p>
              </div>

              <div className="group cursor-default">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#3B2F2A]/40 block mb-3">Socials</span>
                <div className="flex gap-6 justify-start">
                    <FiInstagram className="hover:text-[#D4AF37] transition-colors cursor-pointer" size={18} />
                    <FiFacebook className="hover:text-[#D4AF37] transition-colors cursor-pointer" size={18} />
                    <FiTwitter className="hover:text-[#D4AF37] transition-colors cursor-pointer" size={18} />
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* RIGHT PANEL: The Form */}
        <section className="w-full lg:w-[60%] bg-white px-6 py-12 md:p-16 lg:p-24 flex flex-col justify-center">
          <div className="max-w-xl mx-auto w-full animate-slide-up-delayed">
              <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: BROWN }}>Send a Message</h2>
              <p className="text-gray-400 mb-8 md:mb-12 text-xs md:text-sm">We'll get back to you within 24 hours.</p>

              <form className="space-y-8 md:space-y-10">
                  {/* Floating Input Component */}
                  {[
                    { id: "name", label: "What's your name?", type: "text" },
                    { id: "email", label: "Your email address?", type: "email" },
                    { id: "subject", label: "Subject", type: "text" }
                  ].map((field) => (
                    <div key={field.id} className="relative z-0 w-full group">
                        <input 
                            type={field.type} id={field.id} name={field.id} placeholder=" " required
                            className="block py-2.5 px-0 w-full text-base md:text-lg bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#D4AF37] peer text-[#3B2F2A] font-medium"
                        />
                        <label 
                            htmlFor={field.id}
                            className="absolute text-gray-400 text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#D4AF37] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            {field.label}
                        </label>
                    </div>
                  ))}

                  <div className="relative z-0 w-full group">
                      <textarea 
                          id="message" rows="3" placeholder=" "
                          className="block py-2.5 px-0 w-full text-base md:text-lg bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#D4AF37] peer text-[#3B2F2A] font-medium resize-none"
                      />
                      <label 
                          htmlFor="message" 
                          className="absolute text-gray-400 text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#D4AF37] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                          Your message...
                      </label>
                  </div>

                  <div className="pt-4">
                      <button 
                          type="button" 
                          className="group relative w-full h-[55px] md:h-[60px] overflow-hidden rounded-full transition-transform active:scale-[0.98] shadow-lg"
                          style={{ background: BROWN }}
                      >
                          <div className="absolute inset-0 w-0 bg-[#D4AF37] transition-all duration-500 ease-out lg:group-hover:w-full" />
                          <span className="relative flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#CEC2A3] transition-colors lg:group-hover:text-[#3B2F2A]">
                              Send Message <FiArrowUpRight size={18} />
                          </span>
                      </button>
                  </div>
              </form>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .animate-slide-up { animation: slideUp 0.8s ease-out 0.2s forwards; opacity: 0; }
        .animate-slide-up-delayed { animation: slideUp 0.8s ease-out 0.4s forwards; opacity: 0; }
        
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { 
            from { opacity: 0; transform: translateY(20px); } 
            to { opacity: 1; transform: translateY(0); } 
        }
        
        input:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 30px white inset !important;
            -webkit-text-fill-color: #3B2F2A !important;
        }
      `}</style>
    </div>
  );
};

export default Contact;