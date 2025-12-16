export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  description: string;
  rating: number;
  reviewCount?: number;
  image: string;
  isNew?: boolean;
}

export interface SubCategory {
  name: string;
  count: number;
  link: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  link: string;
  subcategories: SubCategory[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface CartItem extends Product {
  quantity: number;
}