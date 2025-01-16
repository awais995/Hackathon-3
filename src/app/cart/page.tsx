import { CartItem } from '@/app/types/page';

export default function CartPage() {
  const cartItems: CartItem[] = []; // Replace with actual cart data
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto my-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 gap-8">
        {cartItems.map((item) => (
          <div key={item._id} className="border rounded-lg p-4 flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">${item.price} x {item.quantity}</p>
            </div>
            <button className="text-red-500">Remove</button>
          </div>
        ))}
      </div>
      <div className="mt-8 text-right">
        <p className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
        <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold mt-4">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}