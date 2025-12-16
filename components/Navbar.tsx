import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X, User, ChevronDown } from 'lucide-react';
import { CATEGORIES } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-900 shadow-md' : 'bg-brand-900'
      }`}
      onMouseLeave={() => setActiveCategory(null)}
    >
      <div className="max-w-[1440px] mx-auto px-6 h-16 relative">
        <div className="flex items-center justify-between h-full">
          
          <div className="flex items-center gap-8 flex-1">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <span className="text-2xl font-display font-semibold tracking-tight text-white">
                Jade
              </span>
            </div>

            {/* Desktop Nav - Categories */}
            <div className="hidden lg:flex items-center space-x-1 h-full flex-1 overflow-x-auto no-scrollbar mask-gradient">
              {CATEGORIES.map((cat) => (
                <div 
                  key={cat.id}
                  className="h-full flex items-center"
                  onMouseEnter={() => setActiveCategory(cat.id)}
                  onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                >
                  <button
                    className={`px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                      activeCategory === cat.id ? 'text-white bg-brand-800' : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    {cat.name}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Icons */}
          <div className="hidden lg:flex items-center space-x-6 pl-4 bg-brand-900 z-10">
            <button className="text-neutral-300 hover:text-white transition-colors" aria-label="Search">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className="text-neutral-300 hover:text-white transition-colors" aria-label="Account">
              <User size={20} strokeWidth={1.5} />
            </button>
            <button className="text-neutral-300 hover:text-white transition-colors relative" aria-label="Cart">
              <ShoppingCart size={20} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-brand-900 text-[10px] font-bold flex items-center justify-center">
                2
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
             <button className="text-white" aria-label="Cart">
                <ShoppingCart size={22} strokeWidth={1.5} />
             </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Dropdown Mega Menu */}
      {activeCategory && (
        <div 
          className="absolute top-16 left-0 w-full bg-white border-b border-neutral-200 shadow-xl z-40 animate-fade-in origin-top"
          onMouseEnter={() => setActiveCategory(activeCategory)}
          onMouseLeave={() => setActiveCategory(null)}
        >
          <div className="max-w-[1440px] mx-auto px-6 py-8">
            <div className="grid grid-cols-4 gap-8">
               {/* Left Column: Category Highlight */}
               <div className="col-span-1 border-r border-neutral-100 pr-8">
                  <h3 className="text-2xl font-display font-medium text-brand-900 mb-2">
                    {CATEGORIES.find(c => c.id === activeCategory)?.name}
                  </h3>
                  <p className="text-neutral-500 mb-6">Explore our curated collection.</p>
                  <a href="#" className="inline-flex items-center text-sm font-semibold text-brand-700 hover:underline">
                    View All Products
                  </a>
               </div>
               
               {/* Subcategories Grid */}
               <div className="col-span-3 grid grid-cols-3 gap-6">
                  {CATEGORIES.find(c => c.id === activeCategory)?.subcategories.map((sub, idx) => (
                    <a key={idx} href={sub.link} className="group block p-3 hover:bg-neutral-50 transition-colors border border-transparent hover:border-neutral-100">
                       <div className="flex justify-between items-baseline mb-1">
                          <span className="font-medium text-neutral-900 group-hover:text-brand-700">{sub.name}</span>
                          <span className="text-xs text-neutral-400 bg-neutral-100 px-2 py-0.5">{sub.count}</span>
                       </div>
                       <div className="text-xs text-neutral-500">Shop now</div>
                    </a>
                  ))}
               </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-brand-900 border-t border-brand-800 absolute w-full h-[calc(100vh-64px)] overflow-y-auto z-50">
          <div className="px-6 py-4 space-y-1">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="border-b border-brand-800 last:border-0">
                 <button 
                    className="flex items-center justify-between w-full py-4 text-lg font-medium text-white"
                    onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                 >
                    {cat.name}
                    <ChevronDown size={16} className={`transition-transform ${activeCategory === cat.id ? 'rotate-180' : ''}`} />
                 </button>
                 
                 {activeCategory === cat.id && (
                    <div className="bg-brand-800 -mx-6 px-6 py-4 space-y-3">
                       {cat.subcategories.map((sub, idx) => (
                          <a key={idx} href={sub.link} className="flex justify-between items-center text-neutral-300 py-2">
                             <span>{sub.name}</span>
                             <span className="text-xs opacity-50">{sub.count}</span>
                          </a>
                       ))}
                       <a href={cat.link} className="block mt-4 text-center py-3 bg-brand-700 text-white text-sm font-semibold">
                          View All {cat.name}
                       </a>
                    </div>
                 )}
              </div>
            ))}
            <div className="pt-8 pb-12 flex flex-col gap-4">
               <button className="flex items-center justify-center gap-2 text-white bg-brand-800 py-3 font-medium">
                  <User size={20} /> My Account
               </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
