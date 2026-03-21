import Image from "next/image";
import Link from "next/link";
import { TripCard } from "@/components/TripCard";
import { getPublishedTrips } from "@/content";

const upcomingTrips = ["Krakow 2026", "Scotland 2026", "Cantabria 2026"];

export default function HomePage() {
  const trips = getPublishedTrips();
  const featuredTrip = trips[0];

  if (!featuredTrip) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--clay)]">
          No journeys yet
        </p>
        <h1 className="text-5xl text-[var(--forest)] sm:text-6xl">
          The roadbook is being prepared.
        </h1>
      </main>
    );
  }

  return (
    <main className="pb-20">
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.36em] text-[var(--clay)]">
            Share the plan before the road starts
          </p>
          <h1 className="max-w-3xl text-6xl leading-[0.92] text-[var(--forest)] sm:text-7xl">
            Holiday plans for Miro and whoever happens to be in roughly the same
            place at roughly the same time.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-[var(--muted)]">
            This is where the trips live before they happen: the rough shape of
            each day, the useful details when you need them, and enough context
            to know why we are going there in the first place.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={`/trips/${featuredTrip.slug}`}
              className="rounded-full bg-[var(--forest)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--paper)] transition hover:bg-[var(--forest-soft)]"
            >
              Open featured trip
            </Link>
            <a
              href="#journeys"
              className="rounded-full border border-[var(--line)] bg-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--forest)] transition hover:border-[var(--forest)]"
            >
              Browse journeys
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {upcomingTrips.map((trip) => (
              <span
                key={trip}
                className="rounded-full border border-[var(--line)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]"
              >
                On deck: {trip}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-card relative overflow-hidden rounded-[34px] border border-white/50 p-4">
          <div className="relative overflow-hidden rounded-[28px]">
            <Image
              src={featuredTrip.coverImage.src}
              alt={featuredTrip.coverImage.alt}
              width={1400}
              height={1100}
              className="aspect-[4/5] w-full object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,28,24,0.82)] via-[rgba(18,28,24,0.22)] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 space-y-4 p-6 text-[var(--paper)]">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/70">
                Featured plan
              </p>
              <div className="flex items-end justify-between gap-6">
                <div>
                  <h2 className="text-5xl leading-none">{featuredTrip.title}</h2>
                  <p className="mt-3 max-w-md text-base leading-7 text-white/80">
                    {featuredTrip.blurb}
                  </p>
                </div>
                <span className="hidden rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 sm:inline-flex">
                  {featuredTrip.dateRange}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="journeys" className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--clay)]">
              Published journeys
            </p>
            <h2 className="mt-2 text-5xl text-[var(--forest)]">
              Ready to share
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-7 text-[var(--muted)]">
            Open any trip for the full plan: the shape of each day first, the
            proper details underneath, and enough background to make the place
            feel less random.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {trips.map((trip) => (
            <TripCard key={trip.slug} trip={trip} />
          ))}
        </div>
      </section>
    </main>
  );
}
