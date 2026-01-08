import React, { useState, useEffect } from "react";
import { FiMenu, FiShoppingCart, FiUser, FiSearch, FiX, FiHeart } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Theme Colors
  const SAND = "#CEC2A3";
  const BROWN = "#3B2F2A";
  const WHITE = "#FFFFFF";
  const BLACK = "#000000"; // Added Black for search

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { id: 1, name: "HOME", link: "/" },
    { id: 2, name: "ABOUT", link: "/about" },
    { id: 3, name: "PRODUCT", link: "/product" },
    { id: 4, name: "CATEGORIES", link: "/categories" },
    { id: 5, name: "OFFERS", link: "/offers" },
    { id: 6, name: "CONTACT", link: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "shadow-md py-2" : "py-4"
        }`}
        style={{
          background: SAND,
          backdropFilter: isScrolled ? "blur(10px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* =======================
                1. LOGO (Left)
               ======================= */}
            <Link
              to="/"
              className="flex-shrink-0 relative z-50"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                color: BROWN,
                fontFamily: "'Allura', cursive",
                fontSize: "clamp(2.2rem, 3vw, 2.8rem)",
                lineHeight: "1",
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              Micha
            </Link>

            {/* =======================
                2. NAVIGATION (Center - Hidden on Mobile)
               ======================= */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className={`relative text-xs font-bold tracking-[0.15em] uppercase transition-colors nav-link ${
                    isActive(item.link) ? "opacity-100 font-extrabold" : "opacity-70 hover:opacity-100"
                  }`}
                  style={{ color: BROWN }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* =======================
                3. ICONS & SEARCH (Right)
               ======================= */}
            <div className="flex items-center gap-3 md:gap-5">
              
              {/* Search Input (Compact - Desktop) */}
              <div className="hidden md:flex items-center relative group">
                <input
                  type="text"
                  placeholder="Search..."
                  // UPDATED: Added 'search-input' class for placeholder styling
                  className="search-input pl-3 pr-8 py-1.5 rounded-full text-xs outline-none border transition-all w-32 focus:w-48 focus:border-opacity-100"
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    borderColor: "rgba(59,47,42,0.2)",
                    color: BLACK, // UPDATED: Input text is now Black
                  }}
                />
                <FiSearch 
                  className="absolute right-2.5 cursor-pointer opacity-60 group-hover:opacity-100 transition-opacity" 
                  size={14} 
                  style={{ color: BROWN }} 
                />
              </div>

              {/* Icons Group */}
              <div className="flex items-center gap-2 md:gap-3">
                
                {/* Wishlist */}
                <Link to="/wishlist" className="hidden md:block relative p-2 transition hover:scale-110" style={{ color: BROWN }}>
                  <FiHeart size={20} />
                  <span className="absolute -top-0.5 -right-0.5 bg-[#FFFFFF] text-[#3B2F2A] text-[9px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center shadow-sm">
                    2
                  </span>
                </Link>

                {/* Cart */}
                <Link to="/cart" className="relative p-2 transition hover:scale-110" style={{ color: BROWN }}>
                  <FiShoppingCart size={20} />
                  <span className="absolute -top-0.5 -right-0.5 bg-[#FFFFFF] text-[#3B2F2A] text-[9px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center shadow-sm">
                    5
                  </span>
                </Link>

                {/* User */}
                <Link to="/login" className="hidden md:block p-2 transition hover:scale-110" style={{ color: BROWN }}>
                  <FiUser size={20} />
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                  className="lg:hidden p-2 transition hover:opacity-70"
                  style={{ color: BROWN }}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
                </button>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* =======================
          MOBILE MENU OVERLAY
         ======================= */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "90px" }} 
      >
        <div className="p-6 flex flex-col gap-6 h-full overflow-y-auto border-t border-gray-100" style={{ backgroundColor: SAND }}>
          
          {/* Mobile Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              // UPDATED: Added 'search-input' class
              className="search-input w-full pl-4 pr-10 py-3 rounded-lg text-sm outline-none border bg-white/50"
              style={{ 
                color: BLACK, // UPDATED: Text is Black
                borderColor: BROWN 
              }}
            />
            <FiSearch 
              className="absolute right-3 top-1/2 -translate-y-1/2" 
              size={18} 
              style={{ color: BROWN }} 
            />
          </div>

          {/* Mobile Nav Links */}
          <nav>
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.id} className="border-b border-black/5 pb-2">
                  <Link
                    to={item.link}
                    className="text-lg font-bold tracking-wider block"
                    style={{ color: BROWN }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Account Links */}
          <div className="mt-auto flex flex-col gap-4 pb-20">
            <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 font-semibold" style={{ color: BROWN }}>
              <FiUser size={20} /> My Account
            </Link>
            <Link to="/wishlist" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 font-semibold" style={{ color: BROWN }}>
              <FiHeart size={20} /> Wishlist
            </Link>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        /* Navigation Line */
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0%;
          height: 1.5px;
          background: ${BROWN};
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link.opacity-100::after {
           width: 100%;
        }

        /* UPDATED: Search Input Placeholder Color */
        .search-input::placeholder {
          color: ${BLACK};
          opacity: 1; /* Make it distinct */
        }
        
        /* Fallback for specific browsers */
        .search-input::-webkit-input-placeholder {
          color: ${BLACK};
        }
        .search-input:-ms-input-placeholder {
          color: ${BLACK};
        }
      `}</style>
    </>
  );
};

export default Header;