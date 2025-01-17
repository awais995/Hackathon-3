import Stripe from 'stripe';

// Initialize Stripe client with the correct API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia', // Use the correct API version
});

export async function createPaymentIntent(amount: number) {
  return stripe.paymentIntents.create({
    amount,
    currency: 'usd',
  });
}