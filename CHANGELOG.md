# Changelog

All notable changes to this project will be documented in this file.

The archived pre-rebuild implementation lives in:

- `archive/legacy-app/`
- `archive/legacy-public/`
- `archive/reference-inputs/`

## [2.0.1] - 2026-03-21

### Changed

- renamed the live site title and header branding to `Miro idze do šveta`
- rewrote the homepage and trip-page helper copy to remove generic product language and use a more personal, tongue-in-cheek editorial tone
- expanded the Slovenia trip intro and all day overviews so the opened itinerary gives more place context, factual hooks, and travel mood instead of only route mechanics
- replaced the Krakow placeholder artwork with local JPG trip photography for the cover and each day highlight
- changed desktop trip pages from a sticky sidebar layout to two independently scrollable columns so scrolling follows the pane under the cursor more intuitively

### Added

- migrated the Krakow 2026 city-break plan into the live content model
- committed `docs/image-credits.md` to track attribution for third-party trip imagery used in the published site

## [2.0.0] - 2026-03-21

### Added

- new content-first architecture with live trip data stored in `src/content/`
- new editorial homepage and trip page flow for the rebuilt site
- richer trip schema with support for:
  - trip tags
  - optional base location
  - day overviews
  - day tags
  - transport entries
  - fixed highlighted items
  - practical tips
  - optional ideas
- canonical Slovenia trip migrated into the new schema
- committed project guidance:
  - `AGENTS.md`
  - `docs/product-bible.md`
  - `docs/content-model.md`
  - `docs/design-direction.md`
  - `docs/roadmap.md`
  - `docs/decisions/0001-content-first-site.md`
- local runtime guidance via `.nvmrc`
- verified scripts for `lint`, `typecheck`, `build`, and local dev

### Changed

- rebuilt the site from a small app-style implementation into a static, public travel itinerary website
- changed the design direction toward a travel-magazine / editorial presentation
- replaced duplicated trip data sources with a single live source of truth
- updated the stack to the current modern baseline:
  - Next.js 16
  - React 19
  - TypeScript 5.9
  - Tailwind 4
  - ESLint 9 flat config
- switched production build execution to `next build --webpack`
- normalized the repository structure so active code, archived legacy code, and raw planning references are clearly separated
- moved published trip images to `public/trips/`
- restored favicon support for the rebuilt app

### Removed

- live Supabase-backed runtime from the active site
- weather integration from the active site
- old duplicate JSON/database content flow from the active site
- legacy route and component structure from the live app
- unused public assets from the active `public/` root

### Archived

- previous Supabase schema and seed files under `archive/legacy-app/supabase/`
- previous app implementation under `archive/legacy-app/src/`
- previous public data and root assets under `archive/legacy-public/`
- future trip planning references for Krakow, Scotland, and Cantabria under `archive/reference-inputs/`

### Notes

- this release establishes the new baseline for future trip migrations
- Slovenia is now the canonical example for the live schema
- Krakow, Scotland, and Cantabria remain archived source material until they are migrated into `src/content/trips/`
