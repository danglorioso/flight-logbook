// src/components/layout/Layout.tsx
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
  isLoggedIn?: boolean;
  onNewFlightClick?: () => void;
}

export default function Layout({ children, isLoggedIn = false, onNewFlightClick = () => {} }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <Header isLoggedIn={isLoggedIn} onNewFlightClick={onNewFlightClick} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}