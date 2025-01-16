// app/(site)/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="container mx-auto my-12">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <form className="max-w-lg mx-auto">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded mb-4" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-4" />
        <textarea placeholder="Message" className="w-full p-2 border rounded mb-4" rows={5} />
        <button type="submit" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold">
          Send Message
        </button>
      </form>
    </div>
  );
}