// src/components/modals/FlightDetailsModal.tsx
import { Calendar, Clock, Navigation, Plane, X } from 'lucide-react';
import { Flight } from '@/types/flight';

type FlightDetailsModalProps = {
  flight: Flight;
  onClose: () => void;
  onEdit: (flight: Flight) => void;
}

export default function FlightDetailsModal({ flight, onClose, onEdit }: FlightDetailsModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center border-b border-gray-200 px-6 py-4 bg-blue-800 text-white">
          <h2 className="text-xl font-serif font-semibold">Flight Details</h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-blue-200"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <Calendar size={18} className="text-blue-600" />
              <span className="text-xl font-medium">{flight.date}</span>
            </div>
            <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                {flight.duration}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-gray-700 font-medium mb-2">Aircraft</h3>
              <p className="flex items-center text-lg font-mono">
                <Plane size={18} className="text-blue-600 mr-2" />
                {flight.aircraft}
              </p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 col-span-2">
              <h3 className="text-blue-700 font-medium mb-2">Route</h3>
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded font-mono text-lg">
                    {flight.origin}
                  </div>
                  <p className="text-sm mt-1">Origin</p>
                </div>
                
                <div className="flex-1 px-4">
                  <div className="h-0.5 bg-blue-200 relative">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      <Navigation size={20} className="text-blue-500" />
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 text-green-800 px-3 py-2 rounded font-mono text-lg">
                    {flight.destination}
                  </div>
                  <p className="text-sm mt-1">Destination</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-gray-700 font-medium border-b pb-2 mb-3">Remarks</h3>
              <p className="text-gray-600">{flight.remarks}</p>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button 
                onClick={() => onEdit(flight)}
                className="px-4 py-2 border border-blue-300 text-blue-600 rounded hover:bg-blue-50"
              >
                Edit Flight
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}