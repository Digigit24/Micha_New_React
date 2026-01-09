import React from "react";
import { FiX, FiTrash2, FiShoppingCart } from "react-icons/fi";

const WishlistDrawer = ({ isOpen, onClose }) => {
  const BROWN = "#3B2F2A";
  const GOLD = "#D4AF37";

  // Dummy data for visual structure
  const items = [
    { id: 1, name: "Radiance Serum", price: "$48.00", img: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?w=200" },
    { id: 2, name: "Velvet Lip Matte", price: "$24.00", img: "https://images.unsplash.com/photo-1586776977607-310e9c725c37?w=200" }
  ];

  return (
    <>
      {/* Dark Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-black/30 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={onClose}
      />

      {/* Slide-out Panel */}
      <div 
        className={`fixed top-0 right-0 z-[110] h-full w-full sm:w-[400px] bg-white shadow-2xl transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold tracking-tight" style={{ color: BROWN }}>Wishlist</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <FiX size={24} style={{ color: BROWN }} />
            </button>
          </div>

          {/* List Content */}
          <div className="flex-grow overflow-y-auto p-6 space-y-8">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                <div className="w-20 h-24 bg-[#F4F1EA] rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-grow flex flex-col justify-center">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-sm tracking-wide" style={{ color: BROWN }}>{item.name}</h3>
                    <button className="text-gray-300 hover:text-red-500 transition-colors">
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                  <p className="text-xs font-semibold mt-1" style={{ color: GOLD }}>{item.price}</p>
                  
                  <button className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] hover:opacity-70 transition-opacity" style={{ color: BROWN }}>
                    <FiShoppingCart size={14} /> Add to bag
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="p-6 border-t border-gray-100">
            <button 
              className="w-full py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-lg active:scale-95 transition-all"
              style={{ background: BROWN }}
            >
              Explore More Products
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default WishlistDrawer;