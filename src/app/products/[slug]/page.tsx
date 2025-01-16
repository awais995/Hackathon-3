import { Product } from '@/app/types/page';
import {client} from '@/sanity/lib/client'



export async function generateStaticParams() {
  const query = `*[_type == "product"]{ "slug": slug.current }`;
  const products: { slug: string }[] = await client.fetch(query);

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const query = `*[_type == "product" && slug.current == $slug][0]`;
  const product: Product = await client.fetch(query, { slug: params.slug });

  return (
    <div className="container mx-auto my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.images[0]} alt={product.title} className="w-full rounded-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 text-xl mb-4">${product.price}</p>
          <p className="mb-8">{product.description}</p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}