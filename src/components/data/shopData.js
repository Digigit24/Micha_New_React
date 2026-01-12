// src/data/shopData.js

export const categories = [
  { 
    id: 1, 
    title: "Lips", 
    slug: "lips", // IMPORTANT: This links to the URL
    count: 24, 
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=2630&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    title: "Face", 
    slug: "face", 
    count: 35, 
    image: "https://images.unsplash.com/photo-1596462502278-27bfdd403cc2?q=80&w=2574&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    title: "Eyes", 
    slug: "eyes", 
    count: 18, 
    image: "https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?q=80&w=2525&auto=format&fit=crop" 
  },
];

export const products = [
  {
    id: 101,
    name: "Velvet Matte Lipstick",
    category: "lips", // Must match category slug
    price: 24,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=400",
    shades: ["#D2042D", "#C71585", "#FF69B4"] // Red, Purple, Pink
  },
  {
    id: 102,
    name: "Hydrating Lip Gloss",
    category: "lips",
    price: 18,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1625093742435-09869f27d890?q=80&w=400",
    shades: ["#FFC0CB", "#FFA07A"] 
  },
  {
    id: 103,
    name: "Full Coverage Foundation",
    category: "face",
    price: 45,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=400",
    shades: ["#F5DEB3", "#D2691E", "#8B4513"] 
  },
  {
    id: 104,
    name: "Smokey Eye Palette",
    category: "eyes",
    price: 55,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdd403cc2?q=80&w=400",
    shades: ["#000000", "#808080", "#C0C0C0"]
  },
];