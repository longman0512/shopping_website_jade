import { Category, Product } from './types';

export const NAV_ITEMS = [
  // Keeping this for mobile menu or utility links if needed, 
  // but main nav is now driven by CATEGORIES
  { label: 'Offers', href: '#trending' },
  { label: 'Support', href: '#footer' },
];

export const CATEGORIES: Category[] = [
  { 
    id: 'cat_1', 
    name: 'Electronics', 
    image: 'https://picsum.photos/400/400?random=1', 
    link: '#',
    subcategories: [
      { name: 'Mobile phones & accessories', count: 142, link: '#' },
      { name: 'Computers & tablets', count: 89, link: '#' },
      { name: 'Audio & headphones', count: 64, link: '#' },
      { name: 'Cameras & drones', count: 32, link: '#' },
    ]
  },
  { 
    id: 'cat_2', 
    name: 'Smart Home', // Shortened for nav fit
    image: 'https://picsum.photos/400/400?random=2', 
    link: '#',
    subcategories: [
      { name: 'Apparel & Footwear', count: 210, link: '#' }, // Merging Apparel logic here based on prompt group
      { name: 'Smart home & wearables', count: 55, link: '#' },
      { name: 'Men’s clothing', count: 120, link: '#' },
      { name: 'Women’s clothing', count: 145, link: '#' },
      { name: 'Kids & babies', count: 80, link: '#' },
    ]
  },
  { 
    id: 'cat_3', 
    name: 'Home & Garden', 
    image: 'https://picsum.photos/400/400?random=3', 
    link: '#',
    subcategories: [
      { name: 'Furniture', count: 340, link: '#' },
      { name: 'Kitchen & dining', count: 125, link: '#' },
      { name: 'Home décor', count: 98, link: '#' },
      { name: 'Outdoor & garden', count: 76, link: '#' },
      { name: 'Lighting & fixtures', count: 45, link: '#' },
    ]
  },
  { 
    id: 'cat_4', 
    name: 'Health & Beauty', 
    image: 'https://picsum.photos/400/400?random=4', 
    link: '#',
    subcategories: [
      { name: 'Skincare & cosmetics', count: 230, link: '#' },
      { name: 'Personal care', count: 110, link: '#' },
      { name: 'Vitamins & supplements', count: 85, link: '#' },
      { name: 'Hair care', count: 90, link: '#' },
      { name: 'Fragrance', count: 45, link: '#' },
    ]
  },
  { 
    id: 'cat_5', 
    name: 'Sports', 
    image: 'https://picsum.photos/400/400?random=5', 
    link: '#',
    subcategories: [
      { name: 'Fitness equipment', count: 65, link: '#' },
      { name: 'Camping & hiking', count: 120, link: '#' },
      { name: 'Cycling', count: 40, link: '#' },
      { name: 'Water sports', count: 25, link: '#' },
      { name: 'Team sports', count: 55, link: '#' },
    ]
  },
  { 
    id: 'cat_6', 
    name: 'Toys & Kids', 
    image: 'https://picsum.photos/400/400?random=6', 
    link: '#',
    subcategories: [
      { name: 'Educational toys', count: 88, link: '#' },
      { name: 'Outdoor play', count: 45, link: '#' },
      { name: 'Baby gear', count: 110, link: '#' },
      { name: 'Games & puzzles', count: 67, link: '#' },
      { name: 'Arts & crafts', count: 92, link: '#' },
    ]
  },
  { 
    id: 'cat_7', 
    name: 'Auto & Tools', 
    image: 'https://picsum.photos/400/400?random=7', 
    link: '#',
    subcategories: [
      { name: 'Car accessories', count: 150, link: '#' },
      { name: 'Tools & hardware', count: 200, link: '#' },
      { name: 'Workshop & garage', count: 45, link: '#' },
      { name: 'Motorbike accessories', count: 30, link: '#' },
    ]
  },
  { 
    id: 'cat_8', 
    name: 'Office', 
    image: 'https://picsum.photos/400/400?random=8', 
    link: '#',
    subcategories: [
      { name: 'Office supplies', count: 300, link: '#' },
      { name: 'Stationery', count: 150, link: '#' },
      { name: 'Printers & accessories', count: 40, link: '#' },
      { name: 'School bags & cases', count: 60, link: '#' },
    ]
  },
  { 
    id: 'cat_9', 
    name: 'Food', 
    image: 'https://picsum.photos/400/400?random=9', 
    link: '#',
    subcategories: [
      { name: 'Pantry & cooking', count: 400, link: '#' },
      { name: 'Snacks', count: 200, link: '#' },
      { name: 'Beverages', count: 150, link: '#' },
      { name: 'Health foods', count: 80, link: '#' },
    ]
  },
  { 
    id: 'cat_10', 
    name: 'Pets', 
    image: 'https://picsum.photos/400/400?random=10', 
    link: '#',
    subcategories: [
      { name: 'Pet food', count: 120, link: '#' },
      { name: 'Toys & training', count: 90, link: '#' },
      { name: 'Grooming & health', count: 60, link: '#' },
      { name: 'Beds & furniture', count: 45, link: '#' },
    ]
  },
  { 
    id: 'cat_11', 
    name: 'Hobbies', 
    image: 'https://picsum.photos/400/400?random=11', 
    link: '#',
    subcategories: [
      { name: 'Books & magazines', count: 500, link: '#' },
      { name: 'Musical instruments', count: 80, link: '#' },
      { name: 'Board games', count: 120, link: '#' },
      { name: 'Collectibles', count: 45, link: '#' },
    ]
  },
  { 
    id: 'cat_12', 
    name: 'Services', 
    image: 'https://picsum.photos/400/400?random=12', 
    link: '#',
    subcategories: [
      { name: 'Subscriptions', count: 12, link: '#' },
      { name: 'Digital products', count: 50, link: '#' },
      { name: 'Repairs', count: 5, link: '#' },
    ]
  },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Jade Pixel Buds Pro',
    price: 189.00,
    originalPrice: 189.00,
    category: 'Electronics',
    description: 'Immersive sound with industry-leading noise cancellation.',
    rating: 4.8,
    reviewCount: 412,
    image: 'https://picsum.photos/600/600?random=201',
    isNew: true
  },
  {
    id: 'p2',
    name: 'Nest Audio Smart Speaker',
    price: 69.99,
    originalPrice: 89.99,
    category: 'Smart Home',
    description: 'Room-filling sound. Intelligent assistance.',
    rating: 4.5,
    reviewCount: 1024,
    image: 'https://picsum.photos/600/600?random=203',
    isNew: true
  },
  {
    id: 'p3',
    name: 'Minimalist Work Backpack',
    price: 125.00,
    category: 'Lifestyle',
    description: 'Water-resistant with dedicated laptop compartment.',
    rating: 4.9,
    reviewCount: 89,
    image: 'https://picsum.photos/600/600?random=202'
  },
  {
    id: 'p4',
    name: 'Cast Iron Dutch Oven',
    price: 65.00,
    category: 'Home & Garden',
    description: 'Enameled cast iron for perfect slow cooking.',
    rating: 4.7,
    reviewCount: 256,
    image: 'https://picsum.photos/600/600?random=204'
  }
];

// Helper to generate mock products for sections
export const generateProducts = (category: string, seed: number): Product[] => {
  return Array.from({ length: 12 }).map((_, i) => { 
    const basePrice = 45.00 + (Math.floor(Math.random() * 200));
    const hasDiscount = Math.random() > 0.4; // 60% chance of discount
    const price = hasDiscount ? basePrice * 0.8 : basePrice;

    return {
      id: `${category}_${seed}_${i}`,
      name: `${category} Premium Item ${i + 1}`,
      price: Number(price.toFixed(2)),
      originalPrice: hasDiscount ? basePrice : undefined,
      category: category,
      description: 'Engineered for performance and designed for everyday life. A premium addition to your collection.',
      rating: Number((3.5 + (Math.random() * 1.5)).toFixed(1)),
      reviewCount: Math.floor(Math.random() * 500) + 5,
      image: `https://picsum.photos/600/600?random=${seed + i}`,
      isNew: i === 0 || i === 1
    };
  });
};