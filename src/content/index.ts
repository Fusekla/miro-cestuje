import type { Trip } from "@/content/types";
import { cantabria2026 } from "@/content/trips/cantabria-2026";
import { krakow2026 } from "@/content/trips/krakow-2026";
import { scotland2026 } from "@/content/trips/scotland-2026";
import { slovenia2025 } from "@/content/trips/slovenia-2025";

const trips: Trip[] = [cantabria2026, scotland2026, krakow2026, slovenia2025];

export function getPublishedTrips() {
  return trips;
}

export function getTripBySlug(slug: string) {
  return trips.find((trip) => trip.slug === slug);
}
