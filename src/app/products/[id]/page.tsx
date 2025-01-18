"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Product {
  _id: string;
  name: string;
  price: number;
  stockQuantity: number;
  category: string;
  description: string;
  image: string;
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await fetch(`/api/products/${params.id}`);
        if (!response.ok) throw new Error("Product not found");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchProductById();
  }, [params.id]);

  const handleAddToCart = () => {
    // Add logic to add the product to the cart
    // For example, update state or make an API call

    // After adding to cart, navigate to the cart page
    router.push("/cart");
  };

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
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4">
        <a href="/" className="hover:text-blue-600">
          Home
        </a>{" "}
        /{" "}
        <a href={`/category/${product.category}`} className="hover:text-blue-600">
          {product.category}
        </a>{" "}
        / <span className="text-gray-900">{product.name}</span>
      </nav>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-2xl font-semibold text-blue-600">${product.price.toFixed(2)}</p>

          {/* Stock Availability */}
          <p className="text-lg text-gray-700">
            {product.stockQuantity > 0 ? (
              <span className="text-green-600">In Stock ({product.stockQuantity} available)</span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </p>

          {/* Description */}
          <div className="text-gray-700 leading-relaxed">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p>{product.description}</p>
          </div>

          {/* Highlights */}
          <div className="text-gray-700">
            <h2 className="text-xl font-semibold mb-2">Highlights</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>High-quality materials</li>
              <li>Easy to use and maintain</li>
              <li>Eco-friendly and sustainable</li>
              <li>1-year warranty included</li>
            </ul>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-900">John Doe</h3>
            <p className="text-gray-600">⭐⭐⭐⭐⭐</p>
            <p className="text-gray-700 mt-2">
              This product is amazing! It exceeded my expectations. Highly recommend it.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-900">Jane Smith</h3>
            <p className="text-gray-600">⭐⭐⭐⭐</p>
            <p className="text-gray-700 mt-2">
              Great product, but the delivery took a bit longer than expected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}