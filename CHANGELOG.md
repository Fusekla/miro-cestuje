# Changelog

All notable changes to this project will be documented in this file.

The archived pre-rebuild implementation lives in:

- `archive/legacy-app/`
- `archive/legacy-public/`
- `archive/reference-inputs/`

## [2.0.3] - 2026-08-29

### Added

- published the Cantabria 2026 trip: eight days on the Cantabrian coast from a single base, written in a slower register than the earlier trips, with one anchor a day and the optional half of each day kept in `options` rather than dressed up as a schedule
- added 15 background essays across six Cantabria days, covering Altamira, El Capricho and the indianos, El Soplao, the Magdalena peninsula, the Santoña anchovy trade, and the coast itself
- added cover and day images for Cantabria, with attribution recorded in `docs/image-credits.md`

### Changed

- made `date` optional on trip days so upcoming trips can omit exact dates; the site is public and the whole day object is serialised into the page, so an exact date was readable in the page source even when `dateLabel` hid it from the day header
- restored native spelling for place names across all trips: Soča, Vršič, Portorož, Prešeren, Kraków, Rynek Główny, Horní náměstí
- folded the Scotland context essays out of JSON and into one typed module matching the shape used for Cantabria, removing a type assertion that had been defeating type checking
- documented in `docs/content-model.md` where day context lives and that section titles need not be clock blocks
- Cantabria now leads the homepage as the featured trip and has left the on-deck list

## [2.0.2] - 2026-08-29

### Changed

- corrected Scotland day 12 to reflect what the trip actually did: Loch Morlich and Glenmore Forest in place of Loch an Eilein and Rothiemurchus, with the walk distance, transport, and day sections adjusted to match
- rewrote the day 12 background essay for Loch Morlich and Glenmore, keeping the Caledonian Forest framing and adding the loch's beach geology and the free-ranging Cairngorm reindeer herd
- corrected a factual error carried in the old day 12 essay, which described the Speyside ospreys as reintroduced from Scandinavia when they in fact recolonised on their own in the 1950s
- replaced the day 12 highlight image with an original photograph taken at Loch Morlich, and updated `docs/image-credits.md` accordingly

### Security

- upgraded `next` to 16.3.3 and `react`/`react-dom` to 19.2.8, and refreshed transitive dev dependencies, clearing all reported advisories
- revoked the legacy OpenWeatherMap API key that remained exposed in git history from before the 2.0.1 sanitization pass

## [2.0.1] - 2026-03-21

### Changed

- renamed the live site title and header branding to `Miro idze do šveta`
- rewrote the homepage and trip-page helper copy to remove generic product language and use a more personal, tongue-in-cheek editorial tone
- expanded the Slovenia trip intro and all day overviews so the opened itinerary gives more place context, factual hooks, and travel mood instead of only route mechanics
- replaced the Krakow placeholder artwork with local JPG trip photography for the cover and each day highlight
- changed desktop trip pages from a sticky sidebar layout to two independently scrollable columns so scrolling follows the pane under the cursor more intuitively
- added the Krakow accommodation name to the live itinerary so it appears directly in the relevant day details
- sanitized public trip content and archived legacy references to remove private home-location hints, exact temporary address detail, old booking links/prices, and a legacy weather API key
- made the featured trip image on the homepage clickable so it behaves consistently with the trip cards below

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
