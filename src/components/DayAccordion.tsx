"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import type { ContextPlace, TripDay } from "@/content/types";
import { formatTripDate } from "@/lib/date";

type DayAccordionProps = {
  day: TripDay;
  defaultOpen?: boolean;
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getLinkableTerms(places: ContextPlace[]) {
  const seen = new Set<string>();
  const terms: Array<{ term: string; place: ContextPlace }> = [];

  for (const place of places) {
    for (const term of [place.name, ...(place.aliases ?? [])]) {
      if (seen.has(term)) {
        continue;
      }

      seen.add(term);
      terms.push({ term, place });
    }
  }

  return terms.sort((left, right) => right.term.length - left.term.length);
}

function renderLinkedText(
  text: string,
  places: ContextPlace[],
  onOpen: (place: ContextPlace) => void,
) {
  if (!places.length) {
    return text;
  }

  const terms = getLinkableTerms(places);

  if (!terms.length) {
    return text;
  }

  const regex = new RegExp(
    terms.map(({ term }) => escapeRegExp(term)).join("|"),
    "g",
  );
  const placeByTerm = new Map(terms.map(({ term, place }) => [term, place]));
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let key = 0;

  for (const match of text.matchAll(regex)) {
    const term = match[0];
    const start = match.index ?? 0;

    if (start > cursor) {
      nodes.push(text.slice(cursor, start));
    }

    const place = placeByTerm.get(term);

    if (place) {
      nodes.push(
        <button
          key={`${place.slug}-${key}`}
          type="button"
          onClick={() => onOpen(place)}
          className="inline rounded-sm font-medium text-[var(--forest)] underline decoration-[var(--gold)] decoration-[1.5px] underline-offset-4 transition hover:text-[var(--clay)]"
        >
          {term}
        </button>,
      );
    } else {
      nodes.push(term);
    }

    cursor = start + term.length;
    key += 1;
  }

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return nodes.length ? nodes : text;
}

function PlaceDialog({
  place,
  theme,
  onClose,
}: {
  place: ContextPlace;
  theme?: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[rgba(12,24,21,0.56)] sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close background panel"
        onClick={onClose}
        className="absolute inset-0"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`context-place-${place.slug}`}
        className="relative flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-[30px] border border-[var(--line)] bg-[var(--paper)] shadow-[0_30px_80px_rgba(12,24,21,0.28)] sm:rounded-[30px]"
      >
        <div className="border-b border-[var(--line)] bg-white/80 px-6 py-5 sm:px-8">
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-2xl">
              {theme ? (
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--clay)]">
                  {theme}
                </p>
              ) : null}
              <h3
                id={`context-place-${place.slug}`}
                className="text-3xl leading-tight text-[var(--forest)] sm:text-4xl"
              >
                {place.name}
              </h3>
              <p className="mt-3 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
                {place.subtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-white text-2xl leading-none text-[var(--forest)] transition hover:border-[var(--forest)]"
              aria-label="Close background panel"
            >
              ×
            </button>
          </div>
        </div>

        <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
          <div className="space-y-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
            {place.body.split(/\n\n+/).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function DayAccordion({
  day,
  defaultOpen = false,
}: DayAccordionProps) {
  const [activePlace, setActivePlace] = useState<ContextPlace | null>(null);
  const displayDate = day.dateLabel ?? formatTripDate(day.date);
  const contextPlaces = day.context?.places ?? [];
  const transportSummary = day.transport?.map((entry) => {
    if (entry.duration) {
      return `${entry.label} ${entry.duration}`;
    }

    return entry.label;
  });

  return (
    <>
      <details
        open={defaultOpen}
        className="group overflow-hidden rounded-[26px] border border-[var(--line)] bg-white/80 shadow-[0_16px_40px_rgba(24,28,24,0.06)]"
      >
        <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-6 py-6 marker:hidden">
          <div className="max-w-3xl">
            <div className="mb-3 flex flex-wrap items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[var(--clay)]">
              <span>{`Day ${day.dayNumber}`}</span>
              <span className="h-1 w-1 rounded-full bg-[var(--gold)]" />
              <span className="text-[var(--muted)]">{displayDate}</span>
            </div>
            <h3 className="text-3xl leading-tight text-[var(--forest)] sm:text-4xl">
              {day.title}
            </h3>
            <p className="mt-3 max-w-2xl text-lg leading-7 text-[var(--muted)]">
              {day.summary}
            </p>
            {day.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {day.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--line)] bg-[var(--paper)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--forest)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <div className="flex shrink-0 items-center gap-4">
            <div className="hidden text-right text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)] sm:block">
              <span className="block">Open day</span>
              <span className="mt-2 block text-[var(--clay)]">
                {day.sections.length} blocks
              </span>
            </div>
            <span className="day-toggle inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--paper)] text-3xl font-light leading-none text-[var(--forest)]">
              +
            </span>
          </div>
        </summary>

        <div className="border-t border-[var(--line)] px-6 pb-6 pt-6">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_1.35fr]">
            {day.highlightImage ? (
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-[22px]">
                  <Image
                    src={day.highlightImage.src}
                    alt={day.highlightImage.alt}
                    width={1200}
                    height={900}
                    className="aspect-[4/3] w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 38vw"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {transportSummary?.map((entry) => (
                    <span
                      key={entry}
                      className="rounded-full bg-[var(--paper)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--forest)]"
                    >
                      {entry}
                    </span>
                  ))}
                  {day.accommodationName ? (
                    <span className="rounded-full bg-[var(--paper)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--forest)]">
                      Stay {day.accommodationName}
                    </span>
                  ) : null}
                </div>
              </div>
            ) : null}

            <div className="space-y-6">
              {day.overview ? (
                <div className="rounded-[22px] border border-[var(--line)] bg-white/65 px-5 py-5 text-base leading-7 text-[var(--muted)]">
                  {renderLinkedText(day.overview, contextPlaces, setActivePlace)}
                </div>
              ) : null}

              {contextPlaces.length ? (
                <div className="rounded-[22px] border border-[rgba(24,56,47,0.16)] bg-[rgba(24,56,47,0.06)] px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--forest)]">
                    {day.context?.theme ?? "Background"}
                  </p>
                  <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                    Open any place below for the fuller background behind the
                    route.
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {contextPlaces.map((place) => (
                      <button
                        key={place.slug}
                        type="button"
                        onClick={() => setActivePlace(place)}
                        className="rounded-[20px] border border-[var(--line)] bg-white px-4 py-4 text-left transition hover:border-[var(--forest)] hover:shadow-[0_14px_32px_rgba(24,28,24,0.08)]"
                      >
                        <p className="text-lg leading-6 text-[var(--forest)]">
                          {place.name}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                          {place.subtitle}
                        </p>
                        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--clay)]">
                          Open essay
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              {day.fixedItems?.length ? (
                <div className="rounded-[22px] border border-[rgba(24,56,47,0.16)] bg-[rgba(24,56,47,0.08)] px-5 py-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--forest)]">
                    Fixed points
                  </p>
                  <ul className="space-y-2 text-base leading-7 text-[var(--ink)]">
                    {day.fixedItems.map((item) => (
                      <li key={`${item.title}-${item.time ?? "no-time"}`}>
                        <span className="font-semibold text-[var(--forest)]">
                          {item.time ? `${item.time} ` : ""}
                          {renderLinkedText(item.title, contextPlaces, setActivePlace)}
                        </span>
                        {item.note ? (
                          <span className="text-[var(--muted)]">
                            {" - "}
                            {renderLinkedText(
                              item.note,
                              contextPlaces,
                              setActivePlace,
                            )}
                          </span>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {day.sections.map((section) => (
                <section
                  key={section.title}
                  className="rounded-[22px] border border-[var(--line)] bg-[var(--paper)]/70 px-5 py-5"
                >
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--clay)]">
                    {section.title}
                  </p>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li
                        key={`${section.title}-${item.time ?? "no-time"}-${item.text}`}
                        className="flex gap-3 text-base leading-7 text-[var(--ink)]"
                      >
                        <span className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--forest)]" />
                        <span>
                          {item.time ? (
                            <span className="mr-2 font-semibold text-[var(--clay)]">
                              {item.time}
                            </span>
                          ) : null}
                          {renderLinkedText(item.text, contextPlaces, setActivePlace)}
                          {item.duration ? (
                            <span className="ml-2 text-[var(--muted)]">
                              {`(${item.duration})`}
                            </span>
                          ) : null}
                          {item.fixed ? (
                            <span className="ml-2 rounded-full bg-[var(--forest)] px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white">
                              Fixed
                            </span>
                          ) : null}
                          {item.note ? (
                            <span className="block text-sm leading-6 text-[var(--muted)]">
                              {renderLinkedText(
                                item.note,
                                contextPlaces,
                                setActivePlace,
                              )}
                            </span>
                          ) : null}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}

              {day.notes?.length ? (
                <div className="rounded-[22px] border border-[rgba(184,107,67,0.25)] bg-[rgba(184,107,67,0.08)] px-5 py-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--clay)]">
                    Planning notes
                  </p>
                  <ul className="space-y-2 text-base leading-7 text-[var(--muted)]">
                    {day.notes.map((note) => (
                      <li key={note}>
                        {renderLinkedText(note, contextPlaces, setActivePlace)}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {day.tips?.length ? (
                <div className="rounded-[22px] border border-[rgba(146,114,74,0.22)] bg-[rgba(146,114,74,0.08)] px-5 py-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
                    Practical tips
                  </p>
                  <ul className="space-y-2 text-base leading-7 text-[var(--muted)]">
                    {day.tips.map((tip) => (
                      <li key={tip}>
                        {renderLinkedText(tip, contextPlaces, setActivePlace)}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {day.options?.length ? (
                <div className="rounded-[22px] border border-[rgba(184,107,67,0.22)] bg-[rgba(184,107,67,0.06)] px-5 py-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--clay)]">
                    Optional ideas
                  </p>
                  <ul className="space-y-2 text-base leading-7 text-[var(--muted)]">
                    {day.options.map((option) => (
                      <li key={option}>
                        {renderLinkedText(option, contextPlaces, setActivePlace)}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </details>

      {activePlace ? (
        <PlaceDialog
          place={activePlace}
          theme={day.context?.theme}
          onClose={() => setActivePlace(null)}
        />
      ) : null}
    </>
  );
}
