"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Product {
  _id: string;
  name: string;
  price: number;
  stockQuantity: number;
  category: string;
  image?: string;
}

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/product');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products Data</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Link key={product._id} href={`/shop/${product._id}`} passHref>
            <div className="border p-4 rounded-lg shadow cursor-pointer hover:shadow-lg transition-shadow">
              {product.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={700}
                  height={600}
                  className="w-full h-48 object-cover"
                />
              )}
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-700">Price: ${product.price}</p>
              <p className="text-gray-600">Stock: {product.stockQuantity}</p>
              <p className="text-gray-500">Category: {product.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;