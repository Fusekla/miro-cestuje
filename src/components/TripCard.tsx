import Image from "next/image";
import Link from "next/link";
import type { Trip } from "@/content/types";

type TripCardProps = {
  trip: Trip;
};

export function TripCard({ trip }: TripCardProps) {
  return (
    <Link
      href={`/trips/${trip.slug}`}
      className="group overflow-hidden rounded-[28px] border border-[var(--line)] bg-white/80 shadow-[0_18px_50px_rgba(24,28,24,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(24,28,24,0.14)]"
    >
      <div className="relative aspect-[5/4] overflow-hidden">
        <Image
          src={trip.coverImage.src}
          alt={trip.coverImage.alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,28,24,0.82)] via-[rgba(18,28,24,0.18)] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-[var(--paper)]">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
            {trip.eyebrow}
          </p>
          <h2 className="text-4xl leading-none sm:text-5xl">{trip.title}</h2>
        </div>
      </div>

      <div className="space-y-5 px-6 py-6">
        <p className="text-base leading-7 text-[var(--muted)]">{trip.blurb}</p>

        <div className="flex flex-wrap gap-2">
          {trip.facts.slice(0, 3).map((fact) => (
            <span
              key={fact.label}
              className="rounded-full border border-[var(--line)] bg-[var(--paper)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--forest)]"
            >
              {fact.value}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
