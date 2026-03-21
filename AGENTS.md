# AGENTS

## Purpose

This repository is a public, read-only travel itinerary website.

The site exists to help friends quickly understand:

- what each trip is
- what happens on each day
- approximate timing and pace
- accommodation name
- the general mood of the plan

## Product Rules

- Keep the site content-first and file-based.
- Use local trip files only.
- Treat `src/content/` as the live source of truth.
- Treat `archive/` as reference material only, never as live runtime data.
- Keep the site public and English-only.
- Show accommodation names only, not prices or booking links.
- Focus on trip plans, not travel memories.

## Do Not Add Unless Explicitly Requested

- database
- Supabase
- authentication
- admin panel or CMS
- weather integration
- user accounts
- payments
- comments
- analytics-heavy scripts

## Architecture Rules

- Prefer static pages and simple server components.
- Avoid app-like complexity when plain content rendering is enough.
- Keep one trip per content file in `src/content/trips/`.
- If the trip schema changes, update all three in the same change:
  - `src/content/types.ts`
  - `docs/content-model.md`
  - affected rendering code

## Design Rules

- Preserve the editorial travel-magazine direction.
- Lead with photography, typography, whitespace, and clear hierarchy.
- Avoid generic SaaS or dashboard styling.
- Avoid adding visual clutter just because content exists.
- Maps are optional and should only stay if they genuinely improve the page.

## Documentation Rules

- If product scope changes, update `docs/product-bible.md`.
- If design intent changes, update `docs/design-direction.md`.
- If the roadmap changes materially, update `docs/roadmap.md`.
- If a major decision is likely to be revisited, add a short ADR in `docs/decisions/`.

## Working Style

- Prefer small, reviewable changes.
- Keep explanations plain and non-jargony.
- Preserve archived source material unless explicitly asked to delete it.
- Before adding new trip data fields, confirm they solve a real content need.

## Definition Of Done

A feature or content change is only done when:

- the live source of truth is clear
- docs remain aligned with the implementation
- `npm run lint` passes
- `npm run typecheck` passes
- `npm run build` passes
