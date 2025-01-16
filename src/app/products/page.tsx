// app/(site)/products/page.tsx
import { client } from '@/sanity/lib/client';
import { Product } from '@/app/types/page';
import ProductCard from '@/components/ProductCard';

export default async function ProductsPage() {
  const query = `*[_type == "product"]`;
  const products: Product[] = await client.fetch(query);

  return (
    <div className="container mx-auto my-12">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}