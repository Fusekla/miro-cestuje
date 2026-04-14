# Content Model

## Purpose

This document defines the current live trip content model used by the website.

The implementation source of truth is:

- `src/content/types.ts`
- `src/content/trips/*.ts`

If this document and the code disagree, fix the mismatch immediately.

## Current Live Model

Each trip is stored as one TypeScript file exporting one `Trip` object.

### Trip Fields

- `slug`
  - unique route id
  - also used in the URL
  - example: `2025-slovenia`

- `title`
  - human-friendly trip title

- `eyebrow`
  - short label above the main title
  - example: `Road trip, July 2025`

- `destination`
  - broad destination label

- `dateRange`
  - human-readable trip date range

- `blurb`
  - one-sentence overview used on cards and in the hero

- `intro`
  - array of short paragraphs shown on the trip page

- `coverImage`
  - object with:
    - `src`
    - `alt`

- `baseLocation`
  - optional
  - useful for trips that stay mainly in one place

- `tags`
  - optional trip-level labels
  - keep these small and editorial, not technical

- `facts`
  - array of `{ label, value }`
  - intended for quick scan information

- `planningNotes`
  - optional short notes for the whole trip

- `days`
  - ordered array of trip days

### Day Fields

- `slug`
  - stable internal id

- `dayNumber`
  - display order

- `date`
  - ISO-like date string in `YYYY-MM-DD`

- `dateLabel`
  - optional public-facing replacement for the rendered date string
  - use this when the site should show a softer label such as only the weekday
  - the underlying `date` still stays in the content for ordering and internal consistency

- `title`
  - day headline

- `summary`
  - short collapsed summary shown before opening the day

- `overview`
  - optional richer paragraph shown after opening the day

- `tags`
  - optional day labels
  - keep to a small number, usually 3 or fewer

- `transport`
  - optional array of transport entries
  - each entry may include label, duration, and note

- `fixedItems`
  - optional array of items that should stand out immediately
  - use for hard-timed or pre-booked moments

- `accommodationName`
  - optional
  - name only

- `highlightImage`
  - optional object with:
    - `src`
    - `alt`

- `notes`
  - optional array of short caution or planning notes

- `tips`
  - optional array of practical tips

- `options`
  - optional array of optional ideas or alternative versions of the day

- `context`
  - optional day-scoped background material for places mentioned in the itinerary
  - intended for richer editorial context, not logistics
  - contains:
    - optional `theme`
    - `places`, each with `slug`, `name`, `subtitle`, `body`, and optional `aliases`

- `sections`
  - ordered array of day sections

### Day Section Fields

- `title`
  - examples: `Morning`, `Afternoon`, `Evening`

- `items`
  - array of day items

### Day Item Fields

- `text`
  - one line describing an activity or timing block

- `time`
  - optional
  - approximate or exact time

- `duration`
  - optional
  - approximate time to allocate

- `fixed`
  - optional boolean
  - use when something is booked or fixed in time

- `note`
  - optional small clarifying note

### Extra Supporting Types

#### Transport Entry

- `label`
  - examples: `Drive`, `Train`, `Ferry`

- `duration`
  - optional

- `note`
  - optional

#### Fixed Item

- `title`
  - short fixed event label

- `time`
  - optional

- `note`
  - optional

## File And Image Rules

- one trip per file
- put trip files in `src/content/trips/`
- keep file names aligned with slug when practical
- store live trip images in `public/trips/<slug>/...`
- keep alt text plain and factual

## Example Shape

```ts
export const exampleTrip = {
  slug: "2026-example",
  title: "Example Trip 2026",
  eyebrow: "City break, spring 2026",
  destination: "Exampleland",
  dateRange: "3-6 April 2026",
  blurb: "A short sample trip that demonstrates the live content model.",
  intro: [
    "This is the first paragraph.",
    "This is the second paragraph.",
  ],
  coverImage: {
    src: "/trips/2026-example/cover.jpg",
    alt: "Example trip cover image",
  },
  baseLocation: "Example City",
  tags: ["city break", "spring"],
  facts: [
    { label: "Duration", value: "4 days" },
    { label: "Style", value: "City break" },
  ],
  planningNotes: ["One short trip-level note."],
  days: [
    {
      slug: "day-01",
      dayNumber: 1,
      date: "2026-04-03",
      dateLabel: "Thursday",
      title: "Arrival and city centre",
      summary: "Arrival, check-in, and a calm first evening.",
      overview: "A gentle landing day with enough structure to feel purposeful without becoming heavy.",
      tags: ["arrival", "city", "easy"],
      transport: [{ label: "Drive", duration: "45 min" }],
      fixedItems: [{ title: "Dinner reservation", time: "19:30" }],
      accommodationName: "Example House",
      highlightImage: {
        src: "/trips/2026-example/day-01.jpg",
        alt: "Day 1 highlight image",
      },
      notes: ["Dinner booking is fixed at 19:30."],
      tips: ["Keep the first day light and use it to orient yourself."],
      options: ["Swap the city walk for rest if arrival runs later than expected."],
      context: {
        theme: "Example history",
        places: [
          {
            slug: "example-old-town",
            name: "Example Old Town",
            subtitle: "Why this part of the city matters",
            body: "Longer editorial background text goes here.",
            aliases: ["Old Town"],
          },
        ],
      },
      sections: [
        {
          title: "Afternoon",
          items: [
            { text: "Arrive and check in." },
            { text: "Walk through the old town." },
          ],
        },
        {
          title: "Evening",
          items: [{ text: "Dinner reservation.", time: "19:30", fixed: true }],
        },
      ],
    },
  ],
};
```

## Not Yet Supported In The Live UI

The following may be useful later, but are not part of the current live model:

- map coordinates
- food recommendations
- travel mode chips beyond simple tags
- booking links
- prices
- map coordinates
- public/private content split

Do not add these casually. If a new field becomes necessary, update:

1. `src/content/types.ts`
2. this document
3. the UI that renders it
