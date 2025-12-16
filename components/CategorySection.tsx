import React from 'react';
import { CATEGORIES } from '../constants';

const CategorySection: React.FC = () => {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="mb-12 text-center">
           <h2 className="text-3xl md:text-4xl font-display font-medium text-neutral-900 mb-4">Shop by Category</h2>
           <p className="text-neutral-500 text-lg">Everything you need, organized.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <a 
              key={cat.id} 
              href={cat.link}
              className="group relative block bg-neutral-50 hover:bg-neutral-100 transition-colors duration-200 overflow-hidden h-64"
            >
              <div className="absolute inset-x-0 bottom-0 top-1/3 flex justify-center items-end pb-0">
                <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              
              <div className="absolute inset-0 p-6">
                 <h3 className="text-lg font-medium text-neutral-900 group-hover:text-brand-700 transition-colors leading-tight max-w-[80%]">
                    {cat.name}
                 </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;