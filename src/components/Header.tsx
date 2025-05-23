// src/components/layout/Header.tsx
"use client";
import Link from 'next/link';
import { Plus, User } from 'lucide-react';
import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs';

type HeaderProps = {
  onNewFlightClick: () => void;
}

export default function Header({ onNewFlightClick }: HeaderProps) {
  const { isSignedIn } = useUser();

  return (
    <header className="bg-blue-900 text-white p-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <h1 className="text-3xl font-serif font-bold cursor-pointer">SimPilot Logbook</h1>
          </Link>
          <p className="text-blue-200 mt-1">Your digital flight simulation journal</p>
        </div>
        <div className="flex items-center space-x-4">
          {isSignedIn ? (
            <>
              <button 
                onClick={onNewFlightClick}
                className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded flex items-center transition duration-200"
              >
                <Plus size={18} className="mr-2" />
                Log New Flight
              </button>
              <Link href="/dashboard" className="text-white hover:text-blue-200">
                Dashboard
              </Link>
              <SignOutButton>
                <button className="text-sm text-red-600 hover:text-red-500">Sign out</button>
              </SignOutButton>
            </>
          ) : (
            <SignInButton mode="modal">
              <button className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded transition duration-200">
                Sign in
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </header>
  );
}