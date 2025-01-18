import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function GET() {
  const query = `*[_type == "product"]{
    _id,
    name,
    price,
    stockQuantity,
    category,
    "image": image.asset->url
  }`;
  const products = await client.fetch(query);
  return NextResponse.json(products);
}