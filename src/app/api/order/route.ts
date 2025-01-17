import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function POST(request: Request) {
  const { customerId, orderItems, totalAmount, paymentStatus } = await request.json();

  const order = await client.create({
    _type: 'order',
    customer: { _type: 'reference', _ref: customerId },
    orderItems: orderItems.map((item: any) => ({
      product: { _type: 'reference', _ref: item.productId },
      quantity: item.quantity,
    })),
    totalAmount,
    paymentStatus,
  });

  return NextResponse.json({ orderId: order._id, status: 'Order created successfully' });
}