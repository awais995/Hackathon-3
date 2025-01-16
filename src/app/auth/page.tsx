import { signIn, signOut, useSession } from 'next-auth/react';

export default function AuthPage() {
  const { data: session } = useSession();

  return (
    <div className="container mx-auto my-12">
      {session ? (
        <div>
          <p className="text-lg mb-4">Welcome, {session.user?.name}!</p>
          <button onClick={() => signOut()} className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold">
            Sign Out
          </button>
        </div>
      ) : (
        <button onClick={() => signIn()} className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold">
          Sign In
        </button>
      )}
    </div>
  );
}