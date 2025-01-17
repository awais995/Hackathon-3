// app/(site)/page.tsx
import { client } from '@/sanity/lib/client';
import { Product } from '@/app/types/page';
import ProductCard from '@/components/ProductCard';
import HeroSection from './Hero';

export default async function Home() {
  const query = `*[_type == "product" && featured == true][0..2]`;
  const featuredProducts: Product[] = await client.fetch(query);

  return (
    <div className="min-h-screen">

        <HeroSection />
      {/* Featured Products */}
      <div className="container mx-auto my-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>

      {/* Educational Content */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Learn More</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Smart Scales 101</h3>
              <p className="text-gray-600">Learn how smart scales can transform your fitness journey.</p>
            </div>
            {/* Add more educational blocks */}
          </div>
        </div>
      </div>
    </div>
  );
}