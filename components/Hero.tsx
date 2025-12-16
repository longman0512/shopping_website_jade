import React, { useState } from 'react';
import { ArrowRight, Search, Loader2 } from 'lucide-react';
import { getAIRecommendations } from '../services/geminiService';
import { Product } from '../types';
import ProductCard from './ProductCard';

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [aiResults, setAiResults] = useState<Product[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setHasSearched(true);
    setAiResults([]); 

    try {
      const results = await getAIRecommendations(searchQuery);
      setAiResults(results);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="w-full">
      <section className="bg-white w-full overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[550px]">
          
          {/* Left: Content */}
          <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-neutral-900 mb-6 leading-[1.1] tracking-tight">
              The new standard for <br/>
              <span className="text-brand-700">modern living.</span>
            </h1>
            
            <p className="text-lg text-neutral-600 mb-10 leading-relaxed max-w-md">
              Explore a curated selection of electronics, home goods, and daily necessities. Smart, simple, and sustainable.
            </p>

            {/* Sharp, Minimal Search */}
            <form onSubmit={handleSearch} className="relative max-w-md w-full flex bg-white border border-neutral-300 hover:border-neutral-400 focus-within:border-brand-700 transition-colors shadow-sm">
               <div className="flex-1 flex items-center px-4">
                  <Search className="text-neutral-500 mr-3 flex-shrink-0" size={20} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search store"
                    className="w-full h-14 outline-none text-neutral-900 placeholder:text-neutral-500 bg-transparent text-base"
                  />
               </div>
               <button
                 type="submit"
                 disabled={isSearching}
                 className="bg-brand-900 hover:bg-brand-800 text-white px-8 h-14 font-medium transition-colors disabled:opacity-80 flex items-center"
               >
                 {isSearching ? <Loader2 className="animate-spin" size={20}/> : <ArrowRight size={24} />}
               </button>
            </form>
          </div>

          {/* Right: Image */}
          <div className="relative h-64 md:h-auto bg-neutral-200">
             <img 
               src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2670&auto=format&fit=crop" 
               alt="Modern lifestyle products" 
               className="w-full h-full object-cover object-center"
             />
          </div>
        </div>
      </section>

      {/* AI Results Section - Full Width Grid */}
      {hasSearched && (
        <section className="bg-white py-16 animate-fade-in">
           <div className="max-w-[1440px] mx-auto px-6">
             <div className="flex items-center justify-between mb-8">
               <h2 className="text-2xl font-display font-medium text-neutral-900">
                 Results for "{searchQuery}"
               </h2>
               <button onClick={() => setHasSearched(false)} className="text-sm font-medium text-brand-700 hover:text-brand-800 hover:underline underline-offset-4">
                 Clear Results
               </button>
             </div>
             
             {isSearching ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="bg-neutral-50 aspect-square animate-pulse"></div>
                   ))}
                </div>
             ) : aiResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {aiResults.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
             ) : (
               <div className="text-center py-24 bg-neutral-50">
                 <p className="text-neutral-500 text-lg">No matches found.</p>
               </div>
             )}
           </div>
        </section>
      )}
    </div>
  );
};

export default Hero;