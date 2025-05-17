// src/components/layout/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
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
  );
}