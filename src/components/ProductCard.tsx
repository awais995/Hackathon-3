// components/ProductCard.tsx
import { Product } from '@/app/types/page';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-gray-600">${product.price}</p>
        <Link href={`/products/${product.slug}`} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded block text-center">
          View Details
        </Link>
      </div>
    </div>
  );
}