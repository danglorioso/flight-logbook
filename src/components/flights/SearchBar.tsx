// src/components/flights/SearchBar.tsx
"use client";
import { Search } from 'lucide-react';

type SearchBarProps = {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  flightCount: number;
}

export default function SearchBar({ searchTerm, onSearchChange, flightCount }: SearchBarProps) {
  return (
    <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search flights by airport or aircraft..."
          className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <Search size={18} className="absolute left-3 top-2.5 text-gray-500" />
      </div>
      <div className="flex space-x-2">
        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
          Total Flights: {flightCount}
        </span>
      </div>
    </div>
  );
}