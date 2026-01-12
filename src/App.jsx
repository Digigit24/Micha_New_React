// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";

// Import your existing components
import Home from "./components/Hero"; 
import About from "./components/About.jsx";
import Product from "./components/Product.jsx";
import Categories from "./components/Categories.jsx";
import Contact from "./components/Contact.jsx";

// Import the new Category Collection Page
import CategoryCollection from "./pages/CategoryCollection"; 

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        {/* 1. Main Home Page */}
        <Route path="/" element={<Home />} />
        
        {/* 2. Static Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        
        {/* This page shows the list of all categories (URL: /categories) */}
        <Route path="/categories" element={<Categories />} />
        
        <Route path="/contact" element={<Contact />} />

        {/* 3. DYNAMIC CATEGORY ROUTE (Updated as requested)
            This will handle URLs like:
            http://localhost:5173/categories/lips 
            http://localhost:5173/categories/face 
        */}
        <Route path="/category/:slug" element={<CategoryCollection />} />

        {/* 4. Redirect random URLs back to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;