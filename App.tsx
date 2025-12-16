import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';
import ProductCarousel from './components/ProductCarousel';
import { CATEGORIES, generateProducts } from './constants';
import { ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  // Use useMemo to generate random configuration once on mount
  const { bestSellers, trending } = useMemo(() => {
    // Shuffle categories
    const shuffled = [...CATEGORIES].sort(() => 0.5 - Math.random());
    
    // Pick first 3 for best sellers
    const bestSellerCats = shuffled.slice(0, 3).map(cat => ({
        id: cat.id,
        title: `Best Sellers: ${cat.name}`,
        products: generateProducts(cat.name, Math.floor(Math.random() * 10000))
    }));

    // Pick next 3 for trending
    const trendingCats = shuffled.slice(3, 6).map(cat => ({
        id: cat.id,
        title: `${cat.name} Trending`,
        products: generateProducts(cat.name, Math.floor(Math.random() * 20000))
    }));

    return { bestSellers: bestSellerCats, trending: trendingCats };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-page text-neutral-900">
      <Navbar />
      
      {/* Added gap-4 to create separation between the white sections, revealing the grey background */}
      <main className="flex-grow pt-16 flex flex-col gap-4">
        <Hero />
        
        {/* === Best Sellers Sections (Random Categories) === */}
        {bestSellers.map((section) => (
            <ProductCarousel 
                key={section.id}
                title={section.title}
                products={section.products}
                bgColor="bg-white"
            />
        ))}

        {/* === All Categories Grid === */}
        <CategorySection />

        {/* === Trending Sections (Random Categories) === */}
        {trending.map((section, index) => {
            // Cycle through some badge colors
            const badgeColors = ["bg-brand-700", "bg-neutral-900", "bg-orange-600"];
            return (
                <ProductCarousel 
                    key={section.id}
                    title={section.title}
                    products={section.products}
                    badge="Trending"
                    badgeColor={badgeColors[index % badgeColors.length]}
                    bgColor="bg-white"
                />
            );
        })}

        {/* Promo Banner - Sharp Edges */}
        <section className="bg-white pb-24 pt-12">
           <div className="max-w-[1440px] mx-auto px-6">
              <div className="bg-brand-900 text-white p-12 md:p-24 relative overflow-hidden">
                 <div className="relative z-10 max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-display font-medium mb-6 leading-tight">
                       The Jade Ecosystem.
                    </h2>
                    <p className="text-neutral-300 text-lg mb-10 max-w-lg leading-relaxed">
                       Connect your home, life, and style with our unified range of products. 
                       Seamless integration for a smarter tomorrow.
                    </p>
                    <button className="bg-white text-brand-900 px-10 py-4 font-semibold text-base hover:bg-neutral-100 transition-colors inline-flex items-center gap-2">
                       Explore Ecosystem <ArrowRight size={20} />
                    </button>
                 </div>
                 {/* Abstract Decor */}
                 <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-800 opacity-30 transform skew-x-12 translate-x-20"></div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;