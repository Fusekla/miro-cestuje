import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { DayAccordion } from "@/components/DayAccordion";
import { getPublishedTrips, getTripBySlug } from "@/content";

type TripPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getPublishedTrips().map((trip) => ({
    slug: trip.slug,
  }));
}

export async function generateMetadata({
  params,
}: TripPageProps): Promise<Metadata> {
  const { slug } = await params;
  const trip = getTripBySlug(slug);

  if (!trip) {
    return {};
  }

  return {
    title: trip.title,
    description: trip.blurb,
  };
}

export default async function TripPage({ params }: TripPageProps) {
  const { slug } = await params;
  const trip = getTripBySlug(slug);

  if (!trip) {
    notFound();
  }

  return (
    <main className="pb-20">
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-8">
        <div className="glass-card overflow-hidden rounded-[34px] border border-white/50 p-4">
          <div className="relative overflow-hidden rounded-[28px]">
            <Image
              src={trip.coverImage.src}
              alt={trip.coverImage.alt}
              width={1800}
              height={1200}
              priority
              className="aspect-[16/10] w-full object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(13,25,21,0.88)] via-[rgba(13,25,21,0.42)] to-[rgba(13,25,21,0.16)]" />
            <div className="absolute inset-0 flex items-end">
              <div className="max-w-3xl p-6 text-[var(--paper)] sm:p-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-white/70">
                  {trip.eyebrow}
                </p>
                <h1 className="text-6xl leading-[0.92] sm:text-7xl">
                  {trip.title}
                </h1>
                <p className="mt-4 max-w-2xl text-xl leading-8 text-white/80">
                  {trip.blurb}
                </p>
                {trip.tags?.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {trip.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/14 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/75"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 lg:h-[calc(100vh-8rem)] lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <aside className="space-y-6 lg:min-h-0 lg:max-h-full lg:overflow-y-auto lg:pr-3 trip-pane-scroll">
          <div className="rounded-[28px] border border-[var(--line)] bg-white/80 p-6 shadow-[0_14px_36px_rgba(24,28,24,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--clay)]">
              Trip notes
            </p>
            <div className="mt-4 space-y-4 text-lg leading-8 text-[var(--muted)]">
              {trip.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[var(--line)] bg-[var(--forest)] p-6 text-[var(--paper)] shadow-[0_14px_36px_rgba(24,28,24,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
              Snapshot
            </p>
            <dl className="mt-5 space-y-4">
              {trip.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                    {fact.label}
                  </dt>
                  <dd className="text-base text-right leading-6 text-white/90">
                    {fact.value}
                  </dd>
                </div>
              ))}
              {trip.baseLocation ? (
                <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                    Base
                  </dt>
                  <dd className="text-base text-right leading-6 text-white/90">
                    {trip.baseLocation}
                  </dd>
                </div>
              ) : null}
            </dl>
          </div>

          {trip.planningNotes?.length ? (
            <div className="rounded-[28px] border border-[rgba(184,107,67,0.24)] bg-[rgba(184,107,67,0.09)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--clay)]">
                Planning flags
              </p>
              <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)]">
                {trip.planningNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </aside>

        <section className="space-y-5 lg:min-h-0 lg:max-h-full lg:overflow-y-auto lg:pr-3 trip-pane-scroll">
          <div className="mb-2">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--clay)]">
              Day by day
            </p>
            <h2 className="mt-2 text-5xl text-[var(--forest)]">
              Open the plan when you need the detail.
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              Start with the short version. Open a day when you want the fuller
              story, the timings, the moving parts, and the useful practical
              bits.
            </p>
          </div>

          {trip.days.map((day, index) => (
            <DayAccordion
              key={day.slug}
              day={day}
              defaultOpen={index === 0}
            />
          ))}
        </section>
      </section>
    </main>
  );
}
