import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

export async function POST(request: Request) {
  const { orderId, paymentMethod, amount } = await request.json();

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
    payment_method: paymentMethod,
    confirm: true,
  });

  return NextResponse.json({ paymentId: paymentIntent.id, status: 'Payment Successful' });
}