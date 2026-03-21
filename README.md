# Miro's Roadbook

A simple travel-magazine style website for sharing holiday itineraries with friends.

## Current Direction

- Public, read-only website
- Content edited in files
- One home page
- One page per trip
- Each day opens to reveal detailed itinerary
- No database
- No weather integration

## Content Source

Published trips live in `src/content/trips/`.

Shared content types and loaders live in:

- `src/content/types.ts`
- `src/content/index.ts`

Raw planning references that should not drive the live site directly live in:

- `archive/reference-inputs/`
- `archive/legacy-app/`
- `archive/legacy-public/`

Project guidance for humans and agents lives in:

- `AGENTS.md`
- `docs/product-bible.md`
- `docs/content-model.md`
- `docs/design-direction.md`
- `docs/roadmap.md`

## Local Development

Recommended runtime:

- Node.js `24.14.0` LTS preferred
- Node.js `20.19.0+` minimum for the current toolchain

```bash
npm run dev
```

Lint:

```bash
npm run lint
```

Typecheck:

```bash
npm run typecheck
```

Build:

```bash
npm run build
```
