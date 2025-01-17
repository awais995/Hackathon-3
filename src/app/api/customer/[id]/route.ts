import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const query = `*[_type == "customer" && _id == $id][0]{
    _id,
    firstName,
    lastName,
    email,
    phone
  }`;
  const customer = await client.fetch(query, { id: params.id });
  return NextResponse.json(customer);
}