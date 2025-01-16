import Link from "next/link";
interface OrderConfirmationPageProps {
    orderId: string;
  }
  
  export default function OrderConfirmationPage({ orderId }: OrderConfirmationPageProps) {
    return (
      <div className="container mx-auto my-12">
        <h1 className="text-3xl font-bold mb-8">Order Confirmation</h1>
        <p className="text-xl mb-4">Thank you for your purchase!</p>
        <p className="text-lg mb-4">Your order ID is: <span className="font-semibold">{orderId}</span></p>
        <p className="text-lg">You can track your order <Link href="/track-order" className="text-blue-500">here</Link>.</p>
      </div>
    );
  }