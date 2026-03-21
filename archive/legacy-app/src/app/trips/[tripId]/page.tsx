"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import dynamic from "next/dynamic";
import { format} from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import ParallaxImage from "@/components/ParallaxImage";
import { getDailyForecast } from "@/lib/weather";
import Image from "next/image";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

type Activity = {
  id: string;
  time: string;
  description: string;
};

type Accommodation = {
  id: string;
  name: string;
  link: string;
  price?: string;
};

type ItineraryDay = {
  id: string;
  day_number: number;
  date: string;
  location: string;
  highlights: string;
  drive_time: string;
  lat: number;
  lng: number;
  highlight_image_url?: string;
  activities: Activity[];
  accommodation?: Accommodation;
  forecast?: {
    icon: string;
    description: string;
    temp: number;
  };
};

type Trip = {
  id: string;
  name: string;
  description: string;
  itinerary: ItineraryDay[];
};

export default function TripPage() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState<Trip | null>(null);
  const [expandedDay, setExpandedDay] = useState<string | null>(null);

  useEffect(() => {
    const loadTrip = async () => {
      try {
        const { data: trip, error: tripErr } = await supabase
          .from("trips")
          .select("*")
          .eq("slug", tripId)
          .single();

        if (tripErr || !trip) {
          console.error("Trip not found:", tripErr);
          return;
        }

        const { data: days, error: daysErr } = await supabase
          .from("itinerary_days")
          .select("*")
          .eq("trip_id", trip.id)
          .order("day_number", { ascending: true });

        if (daysErr || !days) {
          console.error("Error fetching itinerary days:", daysErr);
          return;
        }

        const enrichedDays = await Promise.all(
          days.map(async (day) => {
            const [activitiesRes, accommodationRes, forecastData] = await Promise.all([
              supabase.from("activities").select("*").eq("day_id", day.id),
              supabase.from("accommodations").select("*").eq("day_id", day.id).maybeSingle(),
              getDailyForecast(day.lat, day.lng),
            ]);

            const targetDate = day.date;

            // console.log(`Checking forecast for Day ${day.day_number}:`, {
            //   targetDate,
            //   availableForecastDates: forecastData?.map((f) => f.date),
            // });
            
            const matched = forecastData?.find((f) => f.date === targetDate);

            return {
              ...day,
              activities: activitiesRes.data ?? [],
              accommodation: accommodationRes.data ?? undefined,
              forecast: matched
                ? {
                    icon: matched.icon,
                    description: matched.description,
                    temp: matched.temp,
                  }
                : undefined,
            };
          })
        );

        setTrip({ ...trip, itinerary: enrichedDays });
      } catch (err) {
        console.error("Unexpected error loading trip:", err);
      }
    };

    loadTrip();
  }, [tripId]);

  if (!trip)
    return <p className="text-center mt-10 text-xl">Loading trip data...</p>;

  return (
    <main className="flex flex-col items-center p-6 bg-yellow-50 min-h-screen">
      <h1 className="text-4xl font-bold text-sky-600 mb-2">{trip.name}</h1>
      <p className="text-slate-700 mb-4">{trip.description}</p>

      <div className="w-full max-w-3xl">
        {trip.itinerary.map((item) => {
          const isExpanded = expandedDay === item.id;

          return (
            <div
              key={item.id}
              className="bg-yellow-100 rounded-2xl shadow p-6 mb-6 border border-yellow-200"
            >
              <button
                onClick={() =>
                  setExpandedDay((prev) => (prev === item.id ? null : item.id))
                }
                className="text-left w-full flex items-center justify-between"
              >
                <div>
                  <h2 className="text-xl font-bold text-orange-600 mb-1">
                    • Day {item.day_number} ({format(new Date(item.date), "dd.MM.yyyy")}): {item.location}
                  </h2>

                  {item.forecast ? (
                    <div className="text-sm text-sky-600 mb-1 flex items-center gap-2">
                      <Image
                        src={item.forecast.icon}
                        alt="weather icon"
                        width={24}
                        height={24}
                      />
                      Forecast: {item.forecast.description}, {item.forecast.temp}°C
                    </div>
                  ) : (
                    <p className="text-sm text-sky-600 mb-1 italic">
                      Forecast not available this far in advance
                    </p>
                  )}

                  <p className="text-slate-700">{item.highlights}</p>
                </div>

                <div className="ml-4">
                  {isExpanded ? (
                    <ChevronUp className="w-6 h-6 text-orange-500" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-orange-500" />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    key="expanded"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden mt-4"
                  >
                    <ul className="list-disc pl-5 text-sm space-y-1 mb-2">
                      {item.highlight_image_url && (
                        <ParallaxImage
                          src={item.highlight_image_url}
                          alt={`Highlight for ${item.location}`}
                        />
                      )}
                      {item.activities.map((act) => (
                        <li key={act.id}>
                          <strong>{act.time}:</strong> {act.description}
                        </li>
                      ))}
                    </ul>

                    {item.accommodation && (
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>Accommodation:</strong>{" "}
                        <a
                          href={item.accommodation.link}
                          className="text-sky-600 hover:text-sky-800 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.accommodation.name}
                        </a>{" "}
                        {item.accommodation.price && `(${item.accommodation.price})`}
                      </p>
                    )}

                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Drive Time:</strong> {item.drive_time}
                    </p>

                    <Map
                      locations={[
                        {
                          lat: item.lat,
                          lng: item.lng,
                          location: item.location,
                          day: item.day_number,
                        },
                      ]}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="w-full max-w-lg mt-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Map</h2>
        <Map
          locations={trip.itinerary.map((item) => ({
            day: item.day_number,
            lat: item.lat,
            lng: item.lng,
            location: item.location,
          }))}
        />
      </div>
    </main>
  );
}
