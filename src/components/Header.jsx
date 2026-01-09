import React, { useState, useEffect } from "react";
import { FiMenu, FiShoppingCart, FiUser, FiSearch, FiX, FiHeart } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import WishlistDrawer from "./common/WishlistDrawer"; 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false); 
  const location = useLocation();

  const SAND = "#CEC2A3";
  const BROWN = "#3B2F2A";
  const BLACK = "#000000";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { id: 1, name: "HOME", link: "/" },
    { id: 2, name: "ABOUT", link: "/about" },
    { id: 3, name: "PRODUCT", link: "/product" },
    { id: 4, name: "CATEGORIES", link: "/categories" },
    { id: 6, name: "CONTACT", link: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${isScrolled ? "shadow-lg" : ""}`}
        style={{ background: SAND, backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? "h-14 md:h-16" : "h-16 md:h-20"}`}>
            
            {/* LOGO */}
            <Link to="/" className="flex-shrink-0 z-50" style={{ color: BROWN, fontFamily: "'Allura', cursive", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", lineHeight: "1" }}>
              Micha
            </Link>

            {/* NAVIGATION (DESKTOP) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
              {navItems.map((item) => (
                <Link key={item.id} to={item.link} className={`relative text-[10px] xl:text-[11px] font-bold tracking-[0.2em] uppercase transition-all nav-link ${isActive(item.link) ? "opacity-100" : "opacity-60 hover:opacity-100"}`} style={{ color: BROWN }}>
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* ACTION ICONS */}
            <div className="flex items-center gap-1 sm:gap-3">
              
              {/* SEARCH (Hidden on small mobile) */}
              <div className="hidden md:flex items-center relative group mr-2">
                <input type="text" placeholder="Search..." className="search-input pl-4 pr-10 py-1.5 rounded-full text-[11px] outline-none border transition-all w-32 focus:w-44" style={{ background: "rgba(255,255,255,0.2)", borderColor: "rgba(59,47,42,0.1)", color: BLACK }} />
                <FiSearch className="absolute right-3 opacity-50" size={14} style={{ color: BROWN }} />
              </div>

              {/* ICONS GROUP: Wishlist, Cart, Profile */}
              <div className="flex items-center">
                
                {/* 1. Wishlist Icon */}
                <button 
                  onClick={() => setIsWishlistOpen(true)}
                  className="p-2 sm:p-2.5 text-[#3B2F2A] hover:bg-white/20 rounded-full transition-all"
                  aria-label="Wishlist"
                >
                  <FiHeart size={20} />
                </button>

                {/* 2. Cart Icon */}
                <Link to="/cart" className="relative p-2 sm:p-2.5 text-[#3B2F2A] hover:bg-white/20 rounded-full transition-all" aria-label="Cart">
                  <FiShoppingCart size={20} />
                  <span className="absolute top-1.5 right-1.5 bg-white text-[8px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-sm">3</span>
                </Link>

                {/* 3. Profile Icon */}
                <Link to="/login" className="p-2 sm:p-2.5 text-[#3B2F2A] hover:bg-white/20 rounded-full transition-all" aria-label="Profile">
                  <FiUser size={20} />
                </Link>

                {/* MOBILE MENU TOGGLE */}
                <button className="lg:hidden p-2 ml-1" style={{ color: BROWN }} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                  {isMobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Wishlist Drawer */}
      <WishlistDrawer isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 z-40 bg-white transition-all duration-500 lg:hidden ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        <div className="absolute inset-0" style={{ backgroundColor: SAND }} />
        <div className={`flex flex-col h-full px-8 pt-28 pb-12 transition-transform duration-500 ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-10"}`}>
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link key={item.id} to={item.link} className="text-3xl font-bold tracking-tight" style={{ color: BROWN }} onClick={() => setIsMobileMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto flex flex-col gap-6 pt-6 border-t border-[#3B2F2A]/10">
            <div className="flex justify-between items-center">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-sm tracking-widest" style={{ color: BROWN }}>ACCOUNT</Link>
                <div className="flex gap-4">
                    <button onClick={() => { setIsMobileMenuOpen(false); setIsWishlistOpen(true); }}><FiHeart size={22} /></button>
                    <Link to="/cart"><FiShoppingCart size={22} /></Link>
                </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .nav-link::after { content: ""; position: absolute; left: 0; bottom: -4px; width: 0%; height: 1.5px; background: ${BROWN}; transition: width 0.4s ease; }
        .nav-link:hover::after, .nav-link.opacity-100::after { width: 100%; }
        ${isMobileMenuOpen || isWishlistOpen ? "body { overflow: hidden; }" : ""}
      `}</style>
    </>
  );
};

export default Header;