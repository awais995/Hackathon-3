import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const query = `*[_type == "order" && _id == $id][0]{
    _id,
    customer->{
      _id,
      firstName,
      lastName,
      email,
      phone
    },
    orderItems[]{
      product->{
        _id,
        name,
        price
      },
      quantity
    },
    totalAmount,
    paymentStatus
  }`;
  const order = await client.fetch(query, { id: params.id });
  return NextResponse.json(order);
}