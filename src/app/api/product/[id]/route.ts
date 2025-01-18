// File: /app/api/products/[id]/route.ts
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

  try {
    const product = await client.fetch(query, { id: params.id });
    if (!product) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch product data" }, { status: 500 });
  }
}
