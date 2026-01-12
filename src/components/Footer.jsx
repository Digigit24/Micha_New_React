import React from "react";
import { Link } from "react-router-dom";
import { 
  FiFacebook, 
  FiInstagram, 
  FiTwitter, 
  FiMail, 
  FiMapPin, 
  FiPhone 
} from "react-icons/fi";

const Footer = () => {
  // Theme constants
  const SAND = "#CEC2A3";
  const BROWN = "#3B2F2A";
  const GOLD = "#D4AF37"; 

  const footerLinks = [
    {
      title: "Shop",
      links: [
        { name: "All Products", path: "/product" },
        { name: "Best Sellers", path: "/categories" },
        { name: "New Arrivals", path: "/product" },
        { name: "Offers", path: "/offers" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Privacy Policy", path: "/" },
        { name: "Terms & Conditions", path: "/" },
      ],
    },
  ];

  return (
    <footer
      // FIXES:
      // 1. relative: Ensures it sits AFTER content (at the end of scroll).
      // 2. overflow-hidden: Prevents side-scrolling/shaking.
      // 3. w-full: Full width.
      className="w-full pt-16 pb-8 relative overflow-hidden"
      style={{
        backgroundColor: BROWN,
        color: SAND,
        zIndex: 10,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* 1. Brand / Logo Section */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <Link
              to="/"
              className="tracking-wide"
              style={{
                fontFamily: "'Allura', cursive",
                fontSize: "clamp(2.5rem, 4vw, 3.2rem)",
                lineHeight: "1",
                color: SAND, 
                letterSpacing: "1px",
                textShadow: "0 2px 4px rgba(0,0,0,0.5)", 
              }}
            >
              Micha
            </Link>
            <p className="text-sm leading-relaxed opacity-90 max-w-xs">
              Premium cosmetics curated for everyday glam. Enhancing your natural beauty with nature's finest ingredients.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              {[FiFacebook, FiInstagram, FiTwitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="p-2 rounded-full border transition-all duration-300 social-icon"
                  style={{ 
                    borderColor: "rgba(206,194,163,0.3)", 
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Dynamic Links Section */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {footerLinks.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold mb-4 tracking-wide text-white">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-sm">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        to={link.path}
                        className="footer-link block w-max"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 3. Newsletter / Contact */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="text-lg font-bold mb-1 tracking-wide text-white">
              Stay in the Loop
            </h3>
            <p className="text-sm opacity-90">
              Subscribe to receive exclusive offers and beauty tips.
            </p>

            {/* Input */}
            <form className="relative mt-2">
              <div
                className="flex items-center gap-2 px-1 py-1 rounded-full border transition focus-within:ring-1"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(206,194,163,0.3)",
                }}
              >
                <div className="pl-3">
                  <FiMail size={18} style={{ opacity: 0.8 }} />
                </div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-transparent outline-none text-sm placeholder-opacity-60"
                  style={{ color: SAND, "--tw-placeholder-opacity": "0.6" }}
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full text-sm font-semibold transition hover:brightness-110"
                  style={{ background: SAND, color: BROWN }}
                >
                  Subscribe
                </button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="mt-6 space-y-2 text-sm opacity-80">
              <div className="flex items-center gap-3 footer-contact cursor-pointer">
                <FiMapPin /> <span>123 Beauty Lane, Paris, France</span>
              </div>
              <div className="flex items-center gap-3 footer-contact cursor-pointer">
                <FiPhone /> <span>+1 (800) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-70"
          style={{ borderColor: "rgba(206,194,163,0.2)" }}
        >
          <p>&copy; {new Date().getFullYear()} Micha Cosmetics. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="#" className="footer-link">Privacy Policy</Link>
            <Link to="#" className="footer-link">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style>{`
        .footer-link {
          color: ${SAND};
          transition: color 0.3s ease, transform 0.2s ease;
        }
        .footer-link:hover {
          color: ${GOLD};
          transform: translateX(4px); 
        }

        .social-icon {
          color: ${SAND};
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          color: ${GOLD};
          border-color: ${GOLD} !important;
          transform: translateY(-3px);
        }

        .footer-contact {
            transition: color 0.3s ease;
        }
        .footer-contact:hover {
            color: ${GOLD};
        }
        
        input::placeholder {
          color: ${SAND};
          opacity: 0.6;
        }
      `}</style>
    </footer>
  );
};

export default Footer;