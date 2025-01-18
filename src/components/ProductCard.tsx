// components/ProductCard.tsx
import { Product } from '@/app/types/page';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative w-full h-48">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-4">${product.price}</p>
        <Link
          href={`/products/${product._id}`}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded block text-center hover:bg-blue-600 transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}