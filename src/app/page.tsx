// app/page.tsx
import HomePage from '@/components/Home';
import { client } from '@/sanity/lib/client';
import { Product } from '@/app/types/page';

export default async function Home() {
  const query = `*[_type == "product" && featured == true][0..2]`;
  const featuredProducts: Product[] = await client.fetch(query);

  return <HomePage featuredProducts={featuredProducts} />;
}