// src/components/modals/AddFlightModal.tsx
"use client";
import { X } from 'lucide-react';
import { useState } from 'react';
import { Flight } from '@/types/flight';

type AddFlightModalProps = {
  onClose: () => void;
  onSave: (flightData: Omit<Flight, 'id'>) => void;
  editFlight?: Flight;
}

export default function AddFlightModal({ onClose, onSave, editFlight }: AddFlightModalProps) {
  const [flightData, setFlightData] = useState<Omit<Flight, 'id'>>({
    date: editFlight?.date || new Date().toISOString().split('T')[0],
    origin: editFlight?.origin || '',
    destination: editFlight?.destination || '',
    aircraft: editFlight?.aircraft || '',
    duration: editFlight?.duration || '',
    remarks: editFlight?.remarks || ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFlightData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(flightData);
  };

  const isEditing = !!editFlight;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center border-b border-gray-200 px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {isEditing ? 'Edit Flight' : 'Log New Flight'}
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* General Information */}
              <div className="space-y-4">
                <h3 className="font-medium text-gray-700 border-b pb-2">General Information</h3>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input 
                    type="date" 
                    name="date"
                    value={flightData.date}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Aircraft Model</label>
                  <input 
                    type="text" 
                    name="aircraft"
                    value={flightData.aircraft}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2" 
                    placeholder="e.g. Boeing 737-800" 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Origin</label>
                    <input 
                      type="text" 
                      name="origin"
                      value={flightData.origin}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-3 py-2" 
                      placeholder="ICAO code" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Destination</label>
                    <input 
                      type="text" 
                      name="destination"
                      value={flightData.destination}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-3 py-2" 
                      placeholder="ICAO code" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Flight Information */}
              <div className="space-y-4">
                <h3 className="font-medium text-gray-700 border-b pb-2">Flight Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Duration</label>
                    <input 
                      type="text" 
                      name="duration"
                      value={flightData.duration}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-3 py-2" 
                      placeholder="HH:MM" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Landing Quality</label>
                    <select 
                      name="landingQuality"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                      <option>Perfect</option>
                      <option>Good</option>
                      <option>Fair</option>
                      <option>Hard</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Remarks</label>
                  <textarea 
                    name="remarks"
                    value={flightData.remarks}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 h-24" 
                    placeholder="Notes about your flight..."
                  ></textarea>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <button 
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {isEditing ? 'Update Flight' : 'Save Flight'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}