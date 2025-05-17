// src/components/layout/Layout.tsx
"use client";
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
  onNewFlightClick?: () => void;
}

export default function Layout({ children, onNewFlightClick = () => {} }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <Header onNewFlightClick={onNewFlightClick} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}