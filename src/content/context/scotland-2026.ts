import rawContext from "@/content/context/scotland-2026-context.json";
import type { DayContext } from "@/content/types";

type RawContextDay = {
  day: string;
  theme: string;
  places: Array<{
    name: string;
    subtitle: string;
    body: string;
  }>;
};

const daySlugByLabel: Record<string, string> = {
  "Day 2": "day-02",
  "Day 3": "day-03",
  "Day 4": "day-04",
  "Day 6": "day-06",
  "Day 8": "day-08",
  "Day 9": "day-09",
  "Day 10": "day-10",
  "Day 11": "day-11",
  "Day 12": "day-12",
};

const placeMetaByDay: Record<
  string,
  Record<string, { slug: string; aliases?: string[] }>
> = {
  "Day 2": {
    "Edinburgh Old Town & the Royal Mile": {
      slug: "edinburgh-old-town-royal-mile",
      aliases: ["Royal Mile", "Old Town"],
    },
    "St Giles' Cathedral": {
      slug: "st-giles-cathedral",
      aliases: ["St Giles'"],
    },
    "Greyfriars Kirkyard": {
      slug: "greyfriars-kirkyard",
      aliases: ["Greyfriars"],
    },
  },
  "Day 3": {
    "Glasgow Cathedral & the Necropolis": {
      slug: "glasgow-cathedral-necropolis",
      aliases: ["Glasgow Cathedral", "Necropolis"],
    },
  },
  "Day 4": {
    "Oban Distillery": {
      slug: "oban-distillery",
      aliases: ["Oban Distillery"],
    },
    "McCaig's Tower": {
      slug: "mccaigs-tower",
      aliases: ["McCaig's Tower"],
    },
  },
  "Day 6": {
    "Staffa & Fingal's Cave": {
      slug: "staffa-fingals-cave",
      aliases: ["Staffa", "Fingal's Cave"],
    },
    "Lunga & the Puffin Colony": {
      slug: "lunga-puffin-colony",
      aliases: ["Lunga"],
    },
    "Iona Abbey": {
      slug: "iona-abbey",
      aliases: ["Iona Abbey", "Iona"],
    },
  },
  "Day 8": {
    "Glenfinnan Viaduct": {
      slug: "glenfinnan-viaduct",
      aliases: ["Glenfinnan Viaduct"],
    },
    "Glenfinnan Monument": {
      slug: "glenfinnan-monument",
      aliases: ["Glenfinnan Monument"],
    },
  },
  "Day 9": {
    "Glencoe — the Massacre and the Landscape": {
      slug: "glencoe-massacre-landscape",
      aliases: ["Glencoe", "Loch Achtriochtan"],
    },
  },
  "Day 10": {
    "Urquhart Castle": {
      slug: "urquhart-castle",
      aliases: ["Urquhart Castle"],
    },
  },
  "Day 11": {
    "Culloden Battlefield": {
      slug: "culloden-battlefield",
      aliases: ["Culloden Battlefield", "Culloden"],
    },
    "Clava Cairns": {
      slug: "clava-cairns",
      aliases: ["Clava Cairns"],
    },
  },
  "Day 12": {
    "Loch an Eilein & Rothiemurchus Forest": {
      slug: "loch-an-eilein-rothiemurchus-forest",
      aliases: ["Loch an Eilein", "Rothiemurchus"],
    },
  },
};

const contextDays = rawContext as RawContextDay[];

export const scotlandContextByDay = Object.fromEntries(
  contextDays.map((day) => {
    const slug = daySlugByLabel[day.day];
    const placeMeta = placeMetaByDay[day.day] ?? {};

    const context: DayContext = {
      theme: day.theme,
      places: day.places.map((place) => {
        const meta = placeMeta[place.name];

        return {
          slug: meta?.slug ?? place.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
          name: place.name,
          subtitle: place.subtitle,
          body: place.body,
          aliases: meta?.aliases,
        };
      }),
    };

    return [slug, context];
  }),
) as Record<string, DayContext>;
