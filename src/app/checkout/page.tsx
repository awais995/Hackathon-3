export default function CheckoutPage() {
    return (
      <div className="container mx-auto my-12">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
            <form>
              <input type="text" placeholder="Full Name" className="w-full p-2 border rounded mb-4" />
              <input type="text" placeholder="Address" className="w-full p-2 border rounded mb-4" />
              <input type="text" placeholder="City" className="w-full p-2 border rounded mb-4" />
              <input type="text" placeholder="Zip Code" className="w-full p-2 border rounded mb-4" />
            </form>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
            <form>
              <input type="text" placeholder="Card Number" className="w-full p-2 border rounded mb-4" />
              <input type="text" placeholder="Expiry Date" className="w-full p-2 border rounded mb-4" />
              <input type="text" placeholder="CVV" className="w-full p-2 border rounded mb-4" />
            </form>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold mt-8 w-full">
          Place Order
        </button>
      </div>
    );
  }