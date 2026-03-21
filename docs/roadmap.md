# Roadmap

## Current State

The project now has:

- a clean content-first architecture
- two published trips
- archived legacy material
- working lint, typecheck, build, and dev setup
- a first-pass design direction
- committed image attribution tracking
- improved desktop trip-page scrolling behavior

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

Status: in progress

Goal:

Convert the archived Krakow, Scotland, and Cantabria plans into the final live content format.

Success looks like:

- Slovenia remains the canonical example trip
- one clean content file per trip
- consistent copy style
- no dead fields
- no duplicate truth sources

Completed so far:

- Krakow 2026 is now live in the new content model, with real trip imagery and richer editorial copy

Still pending:

- migrate Cantabria
- migrate Scotland

## Phase 4: Visual Polish

Goal:

Raise the site from "good baseline" to "memorable".

Likely work:

- stronger home-page rhythm
- improved trip hero composition
- better collapsed/open day states
- refined spacing and typography
- subtle motion polish

## Phase 5: Shareability

Goal:

Make public sharing feel complete.

Likely work:

- stronger metadata and social previews
- final favicon and browser polish
- deployment notes
- light QA pass on mobile and desktop

## Next Recommended Session

Pick up here next time:

1. migrate Cantabria into `src/content/trips/`
2. review whether the current schema needs any trip-specific optional fields after Cantabria
3. migrate Scotland last, because it is the most logistics-heavy of the remaining archived plans

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
