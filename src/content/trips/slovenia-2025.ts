import type { Trip } from "@/content/types";

export const slovenia2025: Trip = {
  slug: "2025-slovenia",
  title: "Slovenia 2025",
  eyebrow: "Road trip, July 2025",
  destination: "Slovenia",
  dateRange: "19-27 July 2025",
  blurb:
    "A nine-day route from Bratislava through lakes, mountain passes, the Soca valley, the coast, and Ljubljana.",
  intro: [
    "This plan is built around the version of Slovenia that feels worth driving for: calm lake mornings, alpine viewpoints, the Soca valley, and a soft landing on the coast before finishing in Ljubljana.",
    "Each day starts with the simple headline of the plan. Open a day to see the detailed timing, activity flow, accommodation name, and the amount of driving behind it.",
  ],
  coverImage: {
    src: "/trips/2025-slovenia/highlights/day05.jpg",
    alt: "Slovenia 2025 cover image",
  },
  tags: ["road trip", "nature", "summer"],
  facts: [
    { label: "Duration", value: "9 days" },
    { label: "Style", value: "Scenic road trip" },
    { label: "Shape", value: "Lakes, mountains, coast, city" },
    { label: "Pace", value: "Full days, easier evenings" },
  ],
  planningNotes: [
    "Day 1 and Day 9 carry the longest driving load, so they set the rhythm of the whole route.",
    "The middle stretch, from Vrsic Pass through the Soca valley, is the most active part of the trip.",
  ],
  days: [
    {
      slug: "day-01",
      dayNumber: 1,
      date: "2025-07-19",
      title: "Bratislava to Maribor to Bled or Bohinj",
      summary:
        "A long opening drive with a Maribor stop before settling into the lake region.",
      overview:
        "This is the longest opening transfer of the trip, so the day works best when treated as a scenic travel day rather than a sightseeing sprint. Maribor gives the route a welcome middle pause before the group settles into the lake region.",
      tags: ["travel-heavy", "scenic", "city stop"],
      transport: [{ label: "Drive", duration: "5.5 hours" }],
      accommodationName: "Guest House Golja, Bled",
      highlightImage: {
        src: "/trips/2025-slovenia/highlights/day01.jpg",
        alt: "Day 1 highlight from the Slovenia trip",
      },
      tips: [
        "Keep expectations realistic for the first day and protect energy for the lake stretch ahead.",
      ],
      sections: [
        {
          title: "Morning",
          items: [
            { text: "Early departure from Bratislava." },
            { text: "Drive toward Maribor.", duration: "Approx. 3.5 hours" },
          ],
        },
        {
          title: "Afternoon",
          items: [
            { text: "Stop in Maribor for Old Town, Pyramid Hill, and the Drava promenade." },
          ],
        },
        {
          title: "Evening",
          items: [
            { text: "Continue toward Bled or Bohinj.", duration: "Approx. 2 hours" },
            { text: "Check in and keep the evening light." },
          ],
        },
      ],
    },
    {
      slug: "day-02",
      dayNumber: 2,
      date: "2025-07-20",
      title: "Lake Bled and Vintgar Gorge",
      summary:
        "A full lake day built around the island, the castle, and the famous gorge.",
      overview:
        "This is the classic Bled day: iconic viewpoints, the island, and the gorge. It should feel photogenic and easy to enjoy, but still structured enough to fit the main sights without rushing them.",
      tags: ["lake", "landmarks", "easy-full"],
      transport: [{ label: "Local driving", duration: "Approx. 1 hour" }],
      accommodationName: "Guest House Golja, Bled",
      highlightImage: {
        src: "/trips/2025-slovenia/highlights/day02.jpg",
        alt: "Day 2 highlight from the Slovenia trip",
      },
      sections: [
        {
          title: "Morning",
          items: [
            { text: "Walk around Lake Bled." },
            { text: "Take a pletna boat to Bled Island." },
          ],
        },
        {
          title: "Afternoon",
          items: [
            { text: "Visit Bled Castle." },
            { text: "Hike through Vintgar Gorge." },
          ],
        },
        {
          title: "Evening",
          items: [{ text: "Slow down by the lake or wander through Bled town." }],
        },
      ],
    },
    {
      slug: "day-03",
      dayNumber: 3,
      date: "2025-07-21",
      title: "Triglav National Park and Lake Bohinj",
      summary:
        "A mountain day for cable-car views, Bohinj, and one of the quietest scenic stretches of the trip.",
      overview:
        "The rhythm softens here. Compared with Bled, Bohinj feels wider, calmer, and more alpine, which makes the day useful both as a scenery day and as a mood shift deeper into the trip.",
      tags: ["nature", "mountains", "lake"],
      transport: [{ label: "Local driving", duration: "Approx. 1-1.5 hours" }],
      accommodationName: "Guest House Golja, Bled",
      highlightImage: {
        src: "/trips/2025-slovenia/highlights/day03.jpg",
        alt: "Day 3 highlight from the Slovenia trip",
      },
      options: [
        "Adjust the afternoon between Bohinj, Savica Waterfall, and a short hike based on energy and weather.",
      ],
      sections: [
        {
          title: "Morning",
          items: [{ text: "Take the Vogel cable car for alpine views." }],
        },
        {
          title: "Afternoon",
          items: [
            { text: "Explore Lake Bohinj." },
            { text: "Add Savica Waterfall or a short hike if the energy is there." },
          ],
        },
        {
          title: "Evening",
          items: [{ text: "Return for a slower evening at the accommodation." }],
        },
      ],
    },
    {
      slug: "day-04",
      dayNumber: 4,
      date: "2025-07-22",
      title: "Bled to Vrsic Pass to Bovec",
      summary:
        "The dramatic transfer day: mountain pass scenery, a few short stops, and a more active afternoon in Bovec.",
      overview:
        "This is one of the strongest scenic days of the route. The point is not only to reach Bovec, but to enjoy the mountain road itself and treat the pass as a major experience, not just transit.",
      tags: ["mountain pass", "scenic drive", "active"],
      transport: [{ label: "Drive", duration: "Approx. 2.5-3 hours" }],
      accommodationName: "Apartma Mulino, Kobarid",
      highlightImage: {
        src: "/trips/2025-slovenia/highlights/day04.jpg",
        alt: "Day 4 highlight from the Slovenia trip",
      },
      sections: [
        {
          title: "Morning",
          items: [
            { text: "Drive through Vrsic Pass with options to stop at Lake Jasna and the Russian Chapel." },
            { text: "Add a short hike if the weather and timing allow it." },
          ],
        },
        {
          title: "Afternoon",
          items: [
            { text: "Reach Bovec for lunch and accommodation check-in." },
            { text: "Use the rest of the day for ziplining or a gentler town reset." },
          ],
        },
      ],
    },
    {
      slug: "day-05",
      dayNumber: 5,
      date: "2025-07-23",
      title: "Soca Valley kayaking and Kobarid",
      summary:
        "Outdoor day in the valley, with room for the river and one culture stop if the mood fits.",
      overview:
        "The Soca day should feel active but not overloaded. The river is the emotional center of the day, while the museum or another lighter stop can provide a useful contrast if the group wants it.",
      tags: ["river", "sport", "nature"],
      transport: [{ label: "Local driving", duration: "Approx. 1 hour" }],
      accommodationName: "Apartma Mulino, Kobarid",
      highlightImage: {
        src: "/trips/2025-slovenia/highlights/day05.jpg",
        alt: "Day 5 highlight from the Slovenia trip",
      },
      options: [
        "Swap the museum for a lighter valley activity if the group wants to keep the day more outdoors-focused.",
      ],
      sections: [
        {
          title: "Morning",
          items: [
            { text: "Choose a guided visit of the Kobarid Museum or another lighter valley activity." },
          ],
        },
        {
          title: "Afternoon",
          items: [{ text: "Go kayaking on the Soca River." }],
        },
      ],
    },
    {
      slug: "day-06",
      dayNumber: 6,
      date: "2025-07-24",
      title: "Hike day and transfer to the coast",
      summary:
        "A final mountain push in the morning, then a long scenic move to the seaside.",
      overview:
        "This is a split-identity day: mountain energy first, then a deliberate change of atmosphere as the trip heads toward the coast. It can feel long, so the morning ambition should stay realistic.",
      tags: ["hiking", "transfer", "contrast"],
      transport: [{ label: "Drive", duration: "Approx. 3.5-4 hours" }],
      accommodationName: "Luxury Apartment Magical Portorose",
      highlightImage: {
        src: "/trips/2025-slovenia/highlights/day06.jpg",
        alt: "Day 6 highlight from the Slovenia trip",
      },
      tips: [
        "Do not let the hike expand too much, because the coastal transfer still asks for real driving time afterward.",
      ],
      sections: [
        {
          title: "Morning",
          items: [
            { text: "Use the first part of the day for a fuller hike in the Soca area." },
          ],
        },
        {
          title: "Afternoon",
          items: [
            {
              text: "Drive toward Piran or Portoroz.",
              duration: "Approx. 2.5-3 hours",
            },
          ],
        },
        {
          title: "Evening",
          items: [
            { text: "Check in by the sea." },
            { text: "Walk through Piran Old Town if there is still energy left." },
          ],
        },
      ],
    },
    {
      slug: "day-07",
      dayNumber: 7,
      date: "2025-07-25",
      title: "Beach day and Trieste in the evening",
      summary:
        "A softer coastal day with time to recover before heading into Trieste later on.",
      overview:
        "After the mountain sequence, this day is meant to breathe. The beach and Trieste combination keeps the itinerary interesting without asking for another full-intensity day.",
      tags: ["coast", "slow", "city evening"],
      transport: [{ label: "Driving", duration: "Approx. 1 hour total" }],
      accommodationName: "Luxury Apartment Magical Portorose",
      highlightImage: {
        src: "/trips/2025-slovenia/highlights/day07.jpg",
        alt: "Day 7 highlight from the Slovenia trip",
      },
      sections: [
        {
          title: "Morning",
          items: [{ text: "Keep the morning loose with beach time in Piran or Portoroz." }],
        },
        {
          title: "Afternoon",
          items: [
            { text: "Drive to Trieste and explore the harbour area, grand squares, and Miramare options." },
          ],
        },
        {
          title: "Evening",
          items: [
            { text: "Dinner in Trieste." },
            { text: "Drive back to the coast afterward." },
          ],
        },
      ],
    },
    {
      slug: "day-08",
      dayNumber: 8,
      date: "2025-07-26",
      title: "Postojna Cave and Ljubljana",
      summary:
        "A cave-and-castle stop on the way inland, then a smoother city arrival in Ljubljana.",
      overview:
        "This day works best as a structured inland transition. Postojna gives the route one more iconic stop, while Ljubljana resets the mood into a cleaner urban finish.",
      tags: ["cave", "city", "transfer"],
      transport: [{ label: "Drive", duration: "Approx. 2 hours total" }],
      accommodationName: "City Hotel Ljubljana",
      highlightImage: {
        src: "/trips/2025-slovenia/highlights/day08.jpg",
        alt: "Day 8 highlight from the Slovenia trip",
      },
      sections: [
        {
          title: "Morning",
          items: [
            { text: "Drive to Postojna Cave." },
            { text: "Pair the cave visit with Predjama Castle." },
          ],
        },
        {
          title: "Afternoon",
          items: [
            { text: "Continue to Ljubljana, roughly 40 minutes from Postojna." },
            { text: "Use the rest of the day for the Old Town." },
          ],
        },
      ],
    },
    {
      slug: "day-09",
      dayNumber: 9,
      date: "2025-07-27",
      title: "Ljubljana back to Bratislava",
      summary:
        "A final city morning followed by the long drive home, with Graz available as an optional pause.",
      overview:
        "The final day is about leaving well rather than squeezing in too much. Ljubljana gets one last gentle morning, and the optional Graz stop exists mainly to break the drive if needed.",
      tags: ["return", "travel-heavy", "city morning"],
      transport: [{ label: "Drive", duration: "Approx. 4.5-5 hours" }],
      accommodationName: "Home sweet home",
      highlightImage: {
        src: "/trips/2025-slovenia/highlights/day09.jpg",
        alt: "Day 9 highlight from the Slovenia trip",
      },
      options: ["Use Graz as a lunch or coffee stop if the drive feels too long in one stretch."],
      sections: [
        {
          title: "Morning",
          items: [{ text: "Start slowly in Ljubljana with breakfast and a short last walk." }],
        },
        {
          title: "Afternoon",
          items: [
            { text: "Drive back toward Bratislava." },
            { text: "Use Graz as an optional stop for lunch or a break." },
          ],
        },
      ],
    },
  ],
};
