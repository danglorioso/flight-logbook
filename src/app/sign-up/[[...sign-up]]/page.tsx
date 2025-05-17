// app/sign-up/[[...sign-up]]/page.tsx
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-blue-900">SimPilot Logbook</h1>
          <p className="text-gray-600 mt-2">Create your account</p>
        </div>
        <div className="bg-white py-8 px-4 shadow-md rounded-lg sm:px-10">
          <SignUp appearance={{
            elements: {
              rootBox: "w-full",
              card: "shadow-none",
              headerTitle: "text-2xl font-bold text-center text-gray-800",
              headerSubtitle: "text-center text-gray-500",
            }
          }} />
        </div>
      </div>
    </div>
  );
}