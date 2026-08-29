# Image Credits

Attribution for third-party images is published on the site itself, at the foot
of each trip page, and the data behind it lives in code:

- `src/content/image-credits.ts` - one `ImageCredit[]` per trip slug
- `src/content/types.ts` - the `ImageCredit` shape

This file used to hold the attribution list as prose. It no longer does, because
the site now renders credits and two copies of the same list would drift apart.
Edit the module instead.

## Adding a credit

Add one entry per image file, keyed under the trip slug:

```ts
{
  path: "/trips/2026-cantabria/highlights/day03.jpg",
  author: "Santiago Pena Bossano",
  platform: "Pexels",
  source: "https://www.pexels.com/photo/...",
}
```

For a Creative Commons image, add `license` and `licenseUrl` as well. The trip
page renders the author, the platform, and the licence, each linked, and
deduplicates by author so a photographer credited twice appears once.

## Conventions

- Photographs taken by the site author are not listed. There is nothing to
  attribute, and an empty credit line reads worse than none.
- Pixabay and Pexels do not require attribution; we credit anyway.
- Creative Commons images do require it, so `license` and `licenseUrl` are not
  optional in practice for anything from Wikimedia Commons.
- `title` and `original` are optional and only carry provenance for images that
  came to Wikimedia Commons from somewhere else, such as Geograph.
