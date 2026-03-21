import type { Trip } from "@/content/types";
import { krakow2026 } from "@/content/trips/krakow-2026";
import { slovenia2025 } from "@/content/trips/slovenia-2025";

const trips: Trip[] = [krakow2026, slovenia2025];

export function getPublishedTrips() {
  return trips;
}

export function getTripBySlug(slug: string) {
  return trips.find((trip) => trip.slug === slug);
}
