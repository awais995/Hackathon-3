// types/index.ts
export interface Product {
    _id: string;
    title: string;
    slug: string;
    description: string;
    price: number;
    images: string[];
    category: string;
    rating?: number;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }