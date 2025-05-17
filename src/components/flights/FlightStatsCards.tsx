// src/components/flights/FlightStatsCards.tsx
import { Clock, Map, Plane } from 'lucide-react';

type FlightStatsProps = {
  totalHours: string;
  mostVisitedAirport: string;
  favoriteAircraft: string;
}

export default function FlightStatsCards({ totalHours, mostVisitedAirport, favoriteAircraft }: FlightStatsProps) {
  return (
    <div className="mt-8 flex flex-col md:flex-row justify-between gap-4">
      <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 shadow-sm flex-1">
        <h3 className="text-amber-800 font-serif font-semibold mb-2 flex items-center">
          <Clock size={16} className="mr-2" />
          Total Flight Hours
        </h3>
        <p className="text-2xl font-mono font-bold text-amber-900">{totalHours}</p>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm flex-1">
        <h3 className="text-blue-800 font-serif font-semibold mb-2 flex items-center">
          <Map size={16} className="mr-2" />
          Most Visited Airport
        </h3>
        <p className="text-2xl font-mono font-bold text-blue-900">{mostVisitedAirport}</p>
      </div>
      
      <div className="bg-green-50 p-4 rounded-lg border border-green-200 shadow-sm flex-1">
        <h3 className="text-green-800 font-serif font-semibold mb-2 flex items-center">
          <Plane size={16} className="mr-2" />
          Favorite Aircraft
        </h3>
        <p className="text-2xl font-mono font-bold text-green-900">{favoriteAircraft}</p>
      </div>
    </div>
  );
}