// app/(site)/page.tsx
import { client } from '@/sanity/lib/client';
import { Product } from '@/app/types/page';
import ProductCard from '@/components/ProductCard';
import HeroSection from './Hero';
import { NextResponse } from 'next/server';

export default async function Home() {
  const query = `*[_type == "product" && featured == true][0..4]{
    _id,
    name,
    price,
    stockQuantity,
    category,
    "image": image.asset->url
  }`;
  const featuredProducts: Product[] = await client.fetch(query);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <div className="container mx-auto my-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>

      {/* Educational Content */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Learn More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Smart Scales 101</h3>
              <p className="text-gray-600">
                Learn how smart scales can transform your fitness journey with accurate measurements and advanced features.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Health Tracking</h3>
              <p className="text-gray-600">
                Discover how smart scales help you track your health metrics like weight, BMI, and body fat percentage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Fitness Goals</h3>
              <p className="text-gray-600">
                Set and achieve your fitness goals with the help of smart scales and personalized insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}