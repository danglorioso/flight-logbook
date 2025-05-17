// src/components/flights/FlightTable.tsx
import { Calendar, Clock, Plane } from 'lucide-react';
import { Flight } from '@/types/flight';

type FlightTableProps = {
  flights: Flight[];
  onFlightSelect: (flight: Flight) => void;
}

export default function FlightTable({ flights, onFlightSelect }: FlightTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-blue-200">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-800 text-white text-left">
              <th className="px-6 py-3 font-semibold">Date</th>
              <th className="px-6 py-3 font-semibold">Route</th>
              <th className="px-6 py-3 font-semibold">Aircraft</th>
              <th className="px-6 py-3 font-semibold">Duration</th>
              <th className="px-6 py-3 font-semibold">Remarks</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {flights.map((flight) => (
              <tr 
                key={flight.id} 
                className="hover:bg-blue-50 cursor-pointer transition duration-150"
                onClick={() => onFlightSelect(flight)}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="text-blue-500 mr-2" />
                    {flight.date}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono">
                      {flight.origin}
                    </div>
                    <span className="mx-2">→</span>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono">
                      {flight.destination}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <Plane size={16} className="text-gray-500 mr-2" />
                    {flight.aircraft}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <Clock size={16} className="text-gray-500 mr-2" />
                    {flight.duration}
                  </div>
                </td>
                <td className="px-6 py-4 truncate max-w-xs">
                  {flight.remarks}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}