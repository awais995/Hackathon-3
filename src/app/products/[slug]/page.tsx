"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  price: number;
  stockQuantity: number;
  category: string;
  description: string;
  image: string;
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductBySlug = async () => {
      try {
        const response = await fetch(`/api/products/${params.slug}`);
        if (!response.ok) throw new Error("Product not found");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchProductBySlug();
  }, [params.slug]);

  if (loading) {
    return <p className="container mx-auto p-8">Loading product...</p>;
  }

  if (error) {
    return <p className="container mx-auto p-8 text-red-500">{error}</p>;
  }

  if (!product) {
    return <p className="container mx-auto p-8">Product not found.</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-auto object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-lg text-gray-600">${product.price}</p>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-gray-600">Stock: {product.stockQuantity}</p>
          <p className="text-gray-500">Category: {product.category}</p>
          <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}