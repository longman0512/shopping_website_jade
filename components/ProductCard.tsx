import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, compact = false }) => {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  return (
    <div className="group flex flex-col h-full cursor-pointer w-full bg-white">
      {/* Image Container - Square, Light Grey Background, No Radius */}
      <div className="relative aspect-square bg-neutral-100 overflow-hidden mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out mix-blend-multiply"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-0 left-0 p-3 flex flex-col gap-2">
            {product.isNew && (
            <span className="bg-brand-900 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider inline-block w-max">
                New
            </span>
            )}
            {hasDiscount && (
                <span className="bg-red-700 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider inline-block w-max">
                    Save {Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}%
                </span>
            )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className={`font-medium text-neutral-900 mb-1 leading-snug group-hover:underline decoration-1 underline-offset-2 ${compact ? 'text-sm truncate' : 'text-lg'}`}>
          {product.name}
        </h3>
        
        {!compact && (
          <p className="text-sm text-neutral-500 mb-2 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        )}

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
            <div className="flex text-brand-700">
                {[...Array(5)].map((_, i) => (
                    <Star 
                        key={i} 
                        size={12} 
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                        className={i < Math.floor(product.rating) ? "text-brand-700" : "text-neutral-300"}
                    />
                ))}
            </div>
            <span className="text-xs text-neutral-400">({product.reviewCount})</span>
        </div>
        
        <div className="mt-auto flex items-baseline gap-2">
            <span className="text-base font-medium text-neutral-900">
              £{product.price.toFixed(2)}
            </span>
            {hasDiscount && (
                <span className="text-sm text-neutral-400 line-through">
                    £{product.originalPrice?.toFixed(2)}
                </span>
            )}
        </div>
        
        {!compact && (
            <button className="mt-3 w-full py-2 border border-neutral-300 text-neutral-900 font-medium text-sm hover:bg-brand-900 hover:text-white hover:border-brand-900 transition-colors opacity-0 group-hover:opacity-100">
                Add to Cart
            </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;