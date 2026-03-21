import type { Trip } from "@/content/types";
import { slovenia2025 } from "@/content/trips/slovenia-2025";

const trips: Trip[] = [slovenia2025];

export function getPublishedTrips() {
  return trips;
}

export function getTripBySlug(slug: string) {
  return trips.find((trip) => trip.slug === slug);
}
