// src/app/dashboard/page.tsx
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/flights/SearchBar';
import FlightTable from '@/components/flights/FlightTable';
import FlightStatsCards from '@/components/flights/FlightStatsCards';
import FlightDetailsModal from '@/components/modals/FlightDetailsModal';
import AddFlightModal from '@/components/modals/AddFlightModal';
import { Flight, sampleFlights } from '@/types/flight';

export default function DashboardPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [editFlight, setEditFlight] = useState<Flight | null>(null);
  const [flights, setFlights] = useState<Flight[]>(sampleFlights);

  const filteredFlights = flights.filter(flight => 
    flight.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
    flight.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
    flight.aircraft.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSaveFlight = (flightData: Omit<Flight, 'id'>) => {
    if (editFlight) {
      // Update existing flight
      setFlights(flights.map(flight => 
        flight.id === editFlight.id ? { ...flightData, id: editFlight.id } : flight
      ));
      setEditFlight(null);
    } else {
      // Add new flight
      const newFlight = {
        ...flightData,
        id: Math.max(0, ...flights.map(f => f.id)) + 1
      };
      setFlights([newFlight, ...flights]);
    }
    setIsAddModalOpen(false);
  };

  const handleEditFlight = (flight: Flight) => {
    setEditFlight(flight);
    setSelectedFlight(null);
    setIsAddModalOpen(true);
  };

  // Calculate stats
  const calculateTotalHours = () => {
    let totalMinutes = 0;
    
    flights.forEach(flight => {
      const [hours, minutes] = flight.duration.split(':').map(Number);
      totalMinutes += (hours * 60) + (minutes || 0);
    });
    
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    
    return `${hours}:${mins.toString().padStart(2, '0')}`;
  };

  const getMostVisitedAirport = () => {
    const airportCounts = new Map<string, number>();
    
    flights.forEach(flight => {
      airportCounts.set(flight.origin, (airportCounts.get(flight.origin) || 0) + 1);
      airportCounts.set(flight.destination, (airportCounts.get(flight.destination) || 0) + 1);
    });
    
    let mostVisited = '';
    let highestCount = 0;
    
    for (const [airport, count] of airportCounts.entries()) {
      if (count > highestCount) {
        mostVisited = airport;
        highestCount = count;
      }
    }
    
    return mostVisited;
  };

  const getFavoriteAircraft = () => {
    const aircraftCounts = new Map<string, number>();
    
    flights.forEach(flight => {
      aircraftCounts.set(flight.aircraft, (aircraftCounts.get(flight.aircraft) || 0) + 1);
    });
    
    let favorite = '';
    let highestCount = 0;
    
    for (const [aircraft, count] of aircraftCounts.entries()) {
      if (count > highestCount) {
        favorite = aircraft;
        highestCount = count;
      }
    }
    
    return favorite;
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <Header 
        onNewFlightClick={() => {
          setEditFlight(null);
          setIsAddModalOpen(true);
        }} 
      />
      
      <main className="max-w-7xl mx-auto py-8 px-6">
        <h1 className="text-3xl font-serif font-bold mb-6 text-blue-900">Your Flight Logbook</h1>
        
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          flightCount={flights.length}
        />
        
        <FlightTable 
          flights={filteredFlights} 
          onFlightSelect={flight => setSelectedFlight(flight)}
        />
        
        <FlightStatsCards 
          totalHours={calculateTotalHours()}
          mostVisitedAirport={getMostVisitedAirport()}
          favoriteAircraft={getFavoriteAircraft()}
        />
      </main>

      {/* Modals */}
      {isAddModalOpen && (
        <AddFlightModal 
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleSaveFlight}
          editFlight={editFlight || undefined}
        />
      )}

      {selectedFlight && (
        <FlightDetailsModal 
          flight={selectedFlight} 
          onClose={() => setSelectedFlight(null)}
          onEdit={handleEditFlight}
        />
      )}
    </div>
  );
}