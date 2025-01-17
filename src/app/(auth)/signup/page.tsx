export default function SignUp() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-2 border rounded-lg" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded-lg" />
          <input type="password" placeholder="Password" className="w-full p-2 border rounded-lg" />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Sign Up
          </button>
        </form>
      </div>
    );
  }