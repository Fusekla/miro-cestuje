import type { Trip } from "@/content/types";

export const slovenia2025: Trip = {
  slug: "2025-slovenia",
  title: "Slovenia 2025",
  eyebrow: "Road trip, July 2025",
  destination: "Slovenia",
  dateRange: "19-27 July 2025",
  blurb:
    "A nine-day route from home through lakes, mountain passes, the Soca valley, the coast, and Ljubljana.",
  intro: [
    "A full week through northeastern Slovenia and beyond: old towns, lake mornings, mountain roads, the Soca valley, and a slower coastal landing before the final swing through Ljubljana.",
    "The route stays practical where it should, but the days are built to feel like places rather than checklists. The point is not only to know what happens next, but also why each stop earns its place on the plan.",
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
      title: "Home to Maribor to Bled or Bohinj",
      summary:
        "A long opening drive with a Maribor stop before settling into the lake region.",
      overview:
        "This is the longest opening transfer of the trip, so the day works best as a travel day with one proper pause rather than a heroic attempt to cram in too much. Maribor is a good place for that reset. It is Slovenia's second-largest city, sitting on the Drava River and carrying the feel of a quieter regional center rather than a capital that tries to impress every five minutes. The old town is compact, the riverside gives the place some breathing room, and Piramida Hill adds a useful first panoramic look over the city and its wine-growing surroundings. The hill is also the site of the former Upper Maribor Castle, so it works as more than just a viewpoint. If there is time for something sweet, this is also a good place to remember that northeastern Slovenia takes its pastries seriously, with gibanica and other Central European dessert traditions never far away. After that, the day shifts back into road mode and aims for the lake region, where the atmosphere changes from urban pause to alpine reset.",
      tags: ["travel-heavy", "scenic", "city stop"],
      transport: [{ label: "Drive", duration: "5.5 hours" }],
      accommodationName: "Guest House Golja, Bled",
      highlightImage: {
        src: "/trips/2025-slovenia/highlights/day01.jpg",
        alt: "Day 1 highlight from the Slovenia trip",
      },
      tips: [
        "Keep expectations realistic for the first day and protect energy for the lake stretch ahead.",
        "If the drive starts slipping, preserve the Maribor walk and cut the evening ambitions instead.",
      ],
      sections: [
        {
          title: "Morning",
          items: [
            { text: "Early departure from home." },
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
        "This is the day for the most recognizable version of Slovenia: the postcard lake, the island church, the cliffside castle, and one of the country's best-known natural sights nearby. Bled is famous for good reason, but it can also feel a little too polished if approached like a checklist. The better version of the day is to let the lake itself set the tempo. The pletna boats are part transport and part ritual at this point, carrying visitors to the island the old-fashioned way, while Bled Castle gives the expected high view over the water and the Julian Alps behind it. Vintgar Gorge changes the texture of the day again, replacing the manicured lakefront with a narrower, more physical landscape of boardwalks, rushing water, and rock walls. There is also no moral reason to leave Bled without at least noticing kremna rezina, the local cream cake that became one of the town's edible calling cards. Altogether it is the most classic tourist day of the trip, but if timed well it should still feel earned rather than overpackaged.",
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
        "The rhythm softens here, and that shift matters. Compared with Bled, Bohinj feels broader, quieter, and much less interested in performing for visitors. It sits inside Triglav National Park, the great alpine heart of Slovenia, and the scenery starts to feel a little more serious. Taking the Vogel cable car is the fast way into that scale: in a short time the lake drops away and the mountains begin to dominate the whole horizon. Back at Bohinj, the day becomes less about landmarks and more about atmosphere, with the lake, forest edges, and possible detours like Savica Waterfall all feeding the sense that this is Slovenia at its most naturally composed. Savica itself has literary significance too, appearing in Slovenian cultural imagination through France Preseren's epic poem about the baptism at the Savica. Even without going full literary pilgrimage, the whole day works as a deeper inhale after Bled: less polished, more spacious, and more convincingly alpine.",
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
        "This is one of the signature driving days of the whole route. The point is not merely to get from Bled to Bovec, but to treat the road itself as the main event. Vrsic Pass is the highest mountain pass in Slovenia, built across a sequence of hairpins that make it scenic, a little theatrical, and worth respecting in equal measure. Stops like Lake Jasna ease the day in gently, while the Russian Chapel adds an unexpected historical layer: it commemorates Russian prisoners of war who died building the pass during the First World War. After the crest, the landscape begins to open toward the Soca side, and the mood changes from high mountain transit to outdoor basecamp. Bovec has that practical adventure-town feel that comes from living close to rafting, hiking, canyoning, and river traffic rather than from trying to be charming for tourists. If the weather plays along, this day should feel like entering the wilder middle chapter of the trip.",
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
        "The Soca River is the emotional center of this part of Slovenia, and the day should revolve around that fact. Its unreal blue-green color is not travel-brochure exaggeration; it really does look that clear and that cold, especially where the light hits it properly. Kayaking here gives the valley its most direct and physical experience, turning the landscape from something admired into something entered. Kobarid adds a second layer if the day wants one. The town is small, but its museum gives real context to the brutal Isonzo Front of the First World War, which turned this beautiful valley into one of Europe's hardest-fought mountain battle zones. That contrast is part of what makes the area memorable: astonishingly beautiful terrain carrying a heavy historical echo underneath it. The best version of the day balances both, without overloading it. Let the river remain the main character, and use the culture stop only if it sharpens the place rather than diluting the outdoor energy.",
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
        "This is a day with two clear identities, and it works best if both are accepted rather than forced into one mood. The morning still belongs to the mountain side of the trip, with time for one more proper hike or active stretch in the Soca area before leaving it behind. After that, the route deliberately sheds altitude and shifts toward the Adriatic. That change is one of the pleasures of Slovenia as a road-trip country: in the space of a few hours the landscape can move from alpine drama to Mediterranean ease. By the time Portoroz or Piran comes into reach, the architecture, the light, and even the psychological pace are all different. It is tempting to overdo the morning because the scenery inland is so strong, but the smarter version protects enough energy to enjoy the coast on arrival. The point of the day is not just one more hike. It is the contrast between mountain effort and seaside landing.",
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
        "After several fuller inland days, this part of the trip is meant to exhale. The Slovenian coast is short, but it delivers a distinct tonal change: Venetian traces, salt-air evenings, and a sense that the schedule can loosen without the trip losing shape. A beach or slow morning in Piran or Portoroz is not filler here. It is what makes the later city visit land better. Trieste then adds a different sort of elegance. For long stretches it was the Habsburg Empire's great port, which explains why it feels more literary and cosmopolitan than many cities of similar size nearby. The grand squares, seafront, coffee-house culture, and slightly faded imperial confidence give it a personality that is very different from the more compact Slovenian stops. It is a city built as much on trade and ideas as on monuments. The day should therefore stay relaxed rather than ambitious: sea first, then Trieste as an evening city with enough history and atmosphere to carry itself.",
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
        "This is the inland transition back toward the final city chapter, and Postojna gives it a properly dramatic entry point. Postojna Cave is one of Slovenia's best-known attractions, but unlike some famous natural sights it earns its reputation through scale alone. The underground halls, karst formations, and the strange theatricality of arriving by cave train make it feel part geology, part old grand tour spectacle. If paired with Predjama Castle, the day gets even better. Predjama is one of those places that sounds slightly made up until you see it: a castle built directly into the mouth of a cliffside cave, part fortress and part storybook exaggeration. From there, Ljubljana resets the trip into a different kind of finish. It is small for a capital, but that is exactly why it works so well. The center is walkable, the river gives it structure, and the city has just enough baroque and Secession-era elegance to feel cultivated without becoming pompous. After the coast and caves, Ljubljana should feel like a clean final chapter rather than another rush.",
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
      title: "Ljubljana back home",
      summary:
        "A final city morning followed by the long drive home, with Graz available as an optional pause.",
      overview:
        "The final day is about leaving well rather than trying to steal one last oversized experience from the trip. Ljubljana suits that kind of ending. It is a city that rewards a final breakfast, a short riverside walk, and a last look at the old center without needing an elaborate farewell program. The drive home is long enough to deserve respect, and that is where Graz becomes useful. It is not there to complicate the day, only to make the return feel less like one continuous motorway blur if energy starts to drop. Graz is Austria's second city and has enough architectural weight and café culture to justify a lunch pause if needed, but the route does not depend on it. The real function of the day is closure: one calm morning in Ljubljana, one sensible drive home, and enough margin to finish the trip without turning the last day into a grind.",
      tags: ["return", "travel-heavy", "city morning"],
      transport: [{ label: "Drive", duration: "Approx. 4.5-5 hours" }],
      accommodationName: "Home",
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
            { text: "Drive back home." },
            { text: "Use Graz as an optional stop for lunch or a break." },
          ],
        },
      ],
    },
  ],
};
