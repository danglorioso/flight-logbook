// src/app/page.tsx
import Link from 'next/link';
import Header from '@/components/layout/Header';
import { ArrowRight, Plane, Book, Map } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header isLoggedIn={false} onNewFlightClick={() => {}} />
      
      <main className="max-w-7xl mx-auto py-16 px-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-6">
              Track Your Virtual Flight Journey
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              SimPilot Logbook helps flight simulator enthusiasts record, analyze, and share their aviation experiences with a beautiful digital logbook.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/api/auth/signin" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-center transition">
                Start Logging Flights
              </Link>
              <Link href="/features" className="bg-white border border-blue-200 text-blue-600 px-6 py-3 rounded-lg font-medium text-center transition hover:bg-blue-50">
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200 transform rotate-3 w-full max-w-md">
              <div className="text-center mb-4">
                <h3 className="font-serif font-bold text-xl text-blue-800">Flight Logbook</h3>
                <p className="text-gray-500 text-sm">Pilot: Virtual Captain</p>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Plane size={16} className="text-blue-600 mr-2" />
                      <span className="font-medium">Boeing 737-800</span>
                    </div>
                    <span className="text-sm text-gray-500">May 15, 2025</span>
                  </div>
                  <div className="mt-2 flex items-center justify-center">
                    <span className="font-mono bg-blue-100 px-2 py-1 rounded">KSFO</span>
                    <ArrowRight size={16} className="mx-2" />
                    <span className="font-mono bg-green-100 px-2 py-1 rounded">KLAX</span>
                  </div>
                </div>
                
                <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Plane size={16} className="text-amber-600 mr-2" />
                      <span className="font-medium">Cessna 172</span>
                    </div>
                    <span className="text-sm text-gray-500">May 12, 2025</span>
                  </div>
                  <div className="mt-2 flex items-center justify-center">
                    <span className="font-mono bg-blue-100 px-2 py-1 rounded">KLAX</span>
                    <ArrowRight size={16} className="mx-2" />
                    <span className="font-mono bg-green-100 px-2 py-1 rounded">KLAS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Book size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-medium mb-3">Digital Logbook</h3>
              <p className="text-gray-600">
                Record all your simulator flights with comprehensive details including aircraft, routes, durations and more.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Map size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-medium mb-3">Flight Maps</h3>
              <p className="text-gray-600">
                Visualize your routes with integrated maps and track your worldwide simulation adventures.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Plane size={24} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-medium mb-3">Aircraft Tracking</h3>
              <p className="text-gray-600">
                Keep tabs on your favorite aircraft and build your virtual fleet with detailed statistics.
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-blue-800 text-white rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to start logging your flights?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Join other flight simulator enthusiasts and create your personal digital logbook today.
          </p>
          <Link href="/api/auth/signin" className="bg-white text-blue-800 px-8 py-3 rounded-lg font-medium inline-block hover:bg-blue-50 transition">
            Sign Up Now
          </Link>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif font-bold text-xl mb-4">SimPilot Logbook</h3>
              <p className="text-blue-200 mb-4">
                Your digital companion for flight simulation tracking.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Features</h4>
              <ul className="space-y-2 text-blue-200">
                <li><Link href="/features" className="hover:text-white transition">Digital Logbook</Link></li>
                <li><Link href="/features" className="hover:text-white transition">Flight Statistics</Link></li>
                <li><Link href="/features" className="hover:text-white transition">Aircraft Tracking</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-blue-200">
                <li><Link href="/help" className="hover:text-white transition">Help Center</Link></li>
                <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2 text-blue-200">
                <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300">
            <p>&copy; {new Date().getFullYear()} SimPilot Logbook. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}