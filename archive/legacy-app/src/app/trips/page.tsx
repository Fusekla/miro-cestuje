"use client";

import Link from "next/link";

const trips = [
  {
    id: "2025-slovenia",
    name: "Slovenia 2025",
    description: "A scenic trip across Slovenia.",
  },
  {
    id: "2026-tramtaria",
    name: "Tramtaria 2026",
    description: "An adventurous journey to Tramtaria.",
  },
];

export default function TripList() {
  return (
    <main className="flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-sky-600 mb-2">Your Trips ✈️</h1>

      <ul className="w-full max-w-lg">
        {trips.map((trip) => (
          <li key={trip.id} className="border-b py-4">
            <Link
              href={`/trips/${trip.id}`}
              className="text-2xl text-blue-600 hover:underline"
            >
              {trip.name}
            </Link>
            <p className="text-gray-600">{trip.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
