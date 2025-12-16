import React, { useState, useEffect, useRef } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface ProductCarouselProps {
  title: string;
  badge?: string;
  badgeColor?: string;
  products: Product[];
  bgColor?: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ 
  title, 
  badge, 
  badgeColor = "bg-brand-700", 
  products, 
  bgColor = "bg-white" 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Responsive items count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(4);
    };

    handleResize(); // Init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = products.length - itemsToShow;
      // Loop back to start if at end, else increment
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
        const maxIndex = products.length - itemsToShow;
        return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  // Auto-slide logic
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => {
        nextSlide();
      },
      4000 // 4 seconds
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, itemsToShow]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div className="flex items-center gap-4">
             {badge && (
                 <span className={`${badgeColor} text-white text-xs font-bold px-3 py-1 uppercase tracking-wider`}>
                    {badge}
                 </span>
             )}
             <h2 className="text-2xl md:text-3xl font-display font-medium text-brand-900">{title}</h2>
          </div>
          
          <div className="flex gap-2">
            <button 
                onClick={() => { resetTimeout(); prevSlide(); }}
                className="p-2 border border-neutral-300 hover:bg-neutral-100 hover:border-neutral-400 text-neutral-600 transition-colors"
                aria-label="Previous"
            >
                <ArrowLeft size={20} />
            </button>
            <button 
                onClick={() => { resetTimeout(); nextSlide(); }}
                className="p-2 border border-neutral-300 hover:bg-neutral-100 hover:border-neutral-400 text-neutral-600 transition-colors"
                aria-label="Next"
            >
                <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out gap-6"
            style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
             }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="flex-shrink-0"
                style={{ width: `calc((100% - ${(itemsToShow - 1) * 24}px) / ${itemsToShow})` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;