import React from "react";
import CategoryCard from "./CategoryCard";

const CategoryGrid = () => {
  // DATA
  const categories = [
    {
      id: 1,
      title: "Lips",
      count: 24,
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=2630&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Face",
      count: 35,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdd403cc2?q=80&w=2574&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Eyes",
      count: 18,
      image: "https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?q=80&w=2525&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Skincare",
      count: 42,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2574&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Fragrance",
      count: 12,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2504&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Accessories",
      count: 15,
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2535&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen">
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, index) => (
          <CategoryCard
            key={cat.id}
            title={cat.title}
            count={cat.count}
            image={cat.image}
            delay={`${index * 150}ms`} // Staggered delay
          />
        ))}
      </div>

      {/* 
         CRITICAL CSS: 
         Embedding this here ensures the animation classes exist 
         when the cards try to render.
      */}
      <style>{`
        .card-entry-anim {
          opacity: 0;
          animation: fadeUp 0.8s ease-out forwards;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default CategoryGrid;