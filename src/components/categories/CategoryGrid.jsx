// src/components/categories/CategoryGrid.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { categories } from "../data/shopData";

const CategoryGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, index) => (
          <div 
            key={cat.id} 
            onClick={() => navigate(`/category/${cat.slug}`)} // Make clickable
            className="cursor-pointer"
          >
            <CategoryCard
              title={cat.title}
              count={cat.count}
              image={cat.image}
              delay={`${index * 150}ms`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;