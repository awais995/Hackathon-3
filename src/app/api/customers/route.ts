import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function POST(request: Request) {
  const { firstName, lastName, email, phone } = await request.json();

  const customer = await client.create({
    _type: 'customer',
    firstName,
    lastName,
    email,
    phone,
  });

  return NextResponse.json({ customerId: customer._id, status: 'Customer created successfully' });
}