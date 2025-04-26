"use client"; // This ensures Leaflet runs only in the browser

import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

// Define a custom Leaflet icon
const markerIcon = L.icon({
  iconUrl: "/marker-icon.png",
  shadowUrl: "/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function Map({ locations }: { locations: { lat: number; lng: number; day: number; location: string }[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <p>Loading map...</p>;

  // Define polyline route (connecting all points in order)
  const routeCoordinates = locations.map((item) => [item.lat, item.lng]);

  return (
    <MapContainer center={[46.35, 14.1]} zoom={8} className="h-96 w-full rounded-lg shadow-lg">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Add markers for each location */}
      {locations.map((item) => (
        <Marker key={item.day} position={[item.lat, item.lng]} icon={markerIcon}>
          <Popup>{`Day ${item.day}: ${item.location}`}</Popup>
        </Marker>
      ))}

      {/* Draw route as a polyline */}
      <Polyline positions={routeCoordinates} color="blue" weight={4} />
    </MapContainer>
  );
}
