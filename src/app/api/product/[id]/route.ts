import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const query = `*[_type == "product" && _id == $id][0]{
    _id,
    name,
    price,
    stockQuantity,
    category,
    description,
    "image": image.asset->url
  }`;
  const product = await client.fetch(query, { id: params.id });
  return NextResponse.json(product);
}