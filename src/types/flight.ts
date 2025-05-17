// src/types/flight.ts
export interface Flight {
  id: number;
  date: string;
  origin: string;
  destination: string;  
  aircraft: string;
  duration: string;
  remarks: string;
  // These would be additional fields for your detailed sections
  // General section
  flightNumber?: string;
  simulator?: string;
  
  // Takeoff section
  takeoffTime?: string;
  takeoffRunway?: string;
  takeoffWeather?: string;
  
  // Landing section
  landingTime?: string;
  landingRunway?: string;
  landingWeather?: string;
  landingQuality?: string;
  
  // Post-flight
  fuelUsed?: string;
  distance?: string;
  maxAltitude?: string;
  notes?: string;
}

// Sample flight data for development
export const sampleFlights: Flight[] = [
  {
    id: 1,
    date: '2025-05-15',
    origin: 'KSFO',
    destination: 'KLAX',
    aircraft: 'Boeing 737-800',
    duration: '1:15',
    remarks: 'Clear weather, smooth landing'
  },
  {
    id: 2,
    date: '2025-05-12',
    origin: 'KLAX',
    destination: 'KLAS',
    aircraft: 'Cessna 172',
    duration: '1:45',
    remarks: 'Training flight, practiced crosswind landings'
  },
  {
    id: 3,
    date: '2025-05-08',
    origin: 'KLAS',
    destination: 'KPHX',
    aircraft: 'Airbus A320',
    duration: '0:55',
    remarks: 'Night flight, light turbulence'
  },
  {
    id: 4,
    date: '2025-05-03',
    origin: 'KPHX',
    destination: 'KDEN',
    aircraft: 'Bombardier CRJ-700',
    duration: '1:30',
    remarks: 'Mountain approach, challenging winds'
  },
  {
    id: 5,
    date: '2025-04-29',
    origin: 'KDEN',
    destination: 'KORD',
    aircraft: 'Boeing 787-9',
    duration: '2:20',
    remarks: 'Practiced fuel-efficient cruise techniques'
  }
];