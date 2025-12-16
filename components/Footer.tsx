import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-brand-900 text-neutral-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-white flex items-center justify-center">
                  <span className="text-brand-900 font-semibold text-lg">J</span>
                </div>
                <span className="text-2xl font-display font-semibold text-white">Jade</span>
             </div>
             <p className="text-neutral-400 mb-6 leading-relaxed text-sm">
               Jade is a UK-based retailer committed to quality, sustainability, and transparent pricing.
             </p>
             <div className="flex space-x-5">
                <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Facebook size={18} /></a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Twitter size={18} /></a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Instagram size={18} /></a>
             </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Apparel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wellness</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">Help</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Delivery & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Store Locator</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">Newsletter</h4>
            <p className="text-neutral-400 mb-4 text-sm">Subscribe for updates on new collections.</p>
            <form className="flex gap-2">
               <div className="relative flex-1">
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="w-full bg-brand-800 border border-brand-700 text-white text-sm py-2.5 px-4 focus:outline-none focus:border-white transition-colors"
                  />
               </div>
               <button className="bg-white text-brand-900 px-4 py-2 font-medium text-sm hover:bg-neutral-100 transition-colors">
                 Join
               </button>
            </form>
          </div>
        </div>

        <div className="border-t border-brand-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>© 2024 Jade Retail Ltd. All rights reserved. Registered in England & Wales.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
             <a href="#" className="hover:text-white">Cookies</a>
             <a href="#" className="hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;