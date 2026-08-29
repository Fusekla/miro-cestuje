# Roadmap

## Current State

The project now has:

- a clean content-first architecture
- four published trips: Cantabria 2026, Scotland 2026, Kraków 2026, Slovenia 2025
- archived legacy material
- working lint, typecheck, build, and dev setup
- a first-pass design direction
- committed image attribution tracking for every published image
- improved desktop trip-page scrolling behavior
- day background essays kept in one typed context module per trip
- native spelling for place names across all trips
- exact dates omitted from trips that have not happened yet, because the site is
  public and the whole day object is readable in the page source
- a repeatable way to write a new trip: keep the detailed private itinerary in
  `source.local/`, and derive the published day text and context essays from it

## Phase 1: Governance And Documentation

Status: done

- define product direction
- define current content model
- define design guardrails
- define agent rules

## Phase 2: Finalize Schema And Canonical Example

Status: done

Goal:

Lock the richer live schema and make Slovenia the reference-quality example trip.

Success looks like:

- the schema supports real trip variation without becoming bloated
- `docs/content-model.md` matches the implementation exactly
- Slovenia reflects the final agreed structure and writing tone

## Phase 3: Migrate Archived Trips

Status: done

Goal:

Convert the archived Krakow, Scotland, and Cantabria plans into the final live content format.

Success looks like:

- Slovenia remains the canonical example trip
- one clean content file per trip
- consistent copy style
- no dead fields
- no duplicate truth sources

Outcome:

- Kraków 2026, Scotland 2026 and Cantabria 2026 are all live in the content model
- Slovenia remains the reference trip for structure and tone
- Cantabria was written from a newer private planning document rather than from
  `archive/reference-inputs/09-cantabria.html`, so the archived version is now
  reference material only
- the archive holds no further plans to migrate; trips from here on are authored
  rather than migrated

The schema review this phase called for did happen:

- `date` became optional, so upcoming trips can omit exact dates
- `sections` stayed required, because a day with no plan reads better with mood
  titles such as `If the weather holds` than with an empty section list
- no other trip-specific fields turned out to be necessary

## Phase 4: Visual Polish

Status: not started

Goal:

Raise the site from "good baseline" to "memorable".

Likely work:

- stronger home-page rhythm
- improved trip hero composition
- better collapsed/open day states
- refined spacing and typography
- subtle motion polish

## Phase 5: Shareability

Status: not started

Goal:

Make public sharing feel complete.

Likely work:

- stronger metadata and social previews
- final favicon and browser polish
- deployment notes
- light QA pass on mobile and desktop

## Next Recommended Session

Two trips are on deck and shown on the homepage: Šumava in October 2026 and
Portugal in June 2027.

Pick up here next time:

1. write Šumava into `src/content/trips/` once its planning document exists,
   following the Cantabria approach
2. publish it: register it in `src/content/index.ts`, drop it from
   `upcomingTrips` in `src/app/page.tsx`, and record its image attribution
3. otherwise start Phase 4, which is now the oldest untouched work

## Phase 6: Optional Features

Only do these if they improve the product enough to justify more complexity.

- optional map section
- richer day annotations
- better content tooling

Not recommended yet:

- CMS
- database
- live APIs
- account system
