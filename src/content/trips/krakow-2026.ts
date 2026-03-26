import type { Trip } from "@/content/types";

export const krakow2026: Trip = {
  slug: "2026-krakow",
  title: "Krakow 2026",
  eyebrow: "City break, March 2026",
  destination: "Poland",
  dateRange: "28 March - 1 April 2026",
  blurb:
    "A five-day city break built around Krakow's Old Town, Kazimierz, Wieliczka, and two heavier memory sites on the way out.",
  intro: [
    "This one is a shorter city trip rather than a road-trip sprawl: one main base, a few fixed timed visits, and enough room between them to actually feel Krakow instead of just marching through it.",
    "The shape stays compact, but the mood should still shift from the ceremonial centre of old Krakow to Kazimierz, then outward to Wieliczka and the two more serious final stops. It is meant to feel cultured and grounded, not frantic.",
  ],
  coverImage: {
    src: "/trips/2026-krakow/cover.jpg",
    alt: "Krakow skyline and historic centre for the Krakow 2026 trip",
  },
  baseLocation: "Krakow",
  tags: ["city break", "history", "culture"],
  facts: [
    { label: "Duration", value: "5 days" },
    { label: "Style", value: "Compact city trip" },
    { label: "Shape", value: "Old Town, Kazimierz, Wieliczka, memory sites" },
    { label: "Pace", value: "Full days, light evenings" },
  ],
  planningNotes: [
    "Day 3, Day 4, and Day 5 all contain fixed timed visits, so those mornings and transitions should stay disciplined.",
    "The final two days are heavier in tone, so it makes sense to keep the earlier city days lighter and more atmospheric.",
  ],
  days: [
    {
      slug: "day-01",
      dayNumber: 1,
      date: "2026-03-28",
      title: "Home to Olomouc to Krakow",
      summary:
        "A travel day with one proper stop in Olomouc before the final push into Krakow.",
      overview:
        "The opening day works best when treated as a measured arrival rather than dead transit. Olomouc is a strong halfway stop because it has the feel of an old Moravian city that still knows what it is, without needing to perform for weekend crowds in the same way bigger capitals do. Horni namesti gives the centre of gravity, the Holy Trinity Column brings the expected UNESCO weight, and the astronomical clock adds one of those Central European civic oddities that makes a square feel lived-in rather than generic. It is the right sort of stop for lunch and a short walk under arcades before getting back on the road. By the time Krakow comes into reach, the day should already feel like the trip has started rather than merely being in transfer mode. The evening then stays intentionally loose: check in, get bearings, eat nearby, and leave the city to unfold properly from the next morning onward.",
      tags: ["travel day", "old town", "gentle start"],
      transport: [
        { label: "Drive", duration: "Approx. 4.5-5 hours total" },
        { label: "Olomouc stop", duration: "Approx. 2-3 hours" },
      ],
      accommodationName: "Apartmenty Lea",
      highlightImage: {
        src: "/trips/2026-krakow/highlights/day01.jpg",
        alt: "Olomouc stop and Krakow arrival highlight for day 1",
      },
      tips: [
        "Keep Day 1 comfortable rather than ambitious. The point is to arrive in Krakow with enough energy left for the next two full city days.",
      ],
      sections: [
        {
          title: "Morning",
          items: [
            { text: "Leave home before lunch." },
            { text: "Drive toward Olomouc.", duration: "Approx. 1.5 hours" },
          ],
        },
        {
          title: "Midday",
          items: [
            { text: "Lunch around Horni namesti." },
            { text: "Walk the Upper and Lower Squares." },
            { text: "See the Holy Trinity Column and the astronomical clock." },
            { text: "Take a coffee break before the second leg of the drive." },
          ],
        },
        {
          title: "Afternoon",
          items: [
            { text: "Drive from Olomouc to Krakow.", duration: "Approx. 3 hours" },
          ],
        },
        {
          title: "Evening",
          items: [
            { text: "Arrive in Krakow around late afternoon or early evening." },
            { text: "Check in and keep dinner close to the accommodation." },
            { text: "Take a short walk only if there is still energy for it." },
          ],
        },
      ],
    },
    {
      slug: "day-02",
      dayNumber: 2,
      date: "2026-03-29",
      title: "Old Town walking tour and light city time",
      summary:
        "A classic first proper day in Krakow: the Old Town, the main square, Wawel, and enough free time to let the city register.",
      overview:
        "This is the ceremonial Krakow day, and it should lean into that. Rynek Glowny is one of the largest medieval market squares in Europe, which is why the centre feels less like a decorative old town and more like a real urban stage. The Cloth Hall, St. Mary's Basilica, and the surrounding lanes all carry the familiar royal-city weight, but Krakow works best when some of that grandeur is cut with slower moments: a coffee break, a river walk, time on Wawel Hill without trying to consume every interior in one shot. The walking tour is useful here because Krakow's history is layered rather than instantly legible. Royal capital, university city, mercantile crossroads, and later occupied city all overlap in a relatively compact area. By the end of the day, the goal is not to have ticked off every church and courtyard. It is to understand the tone of the city well enough that the later days feel connected rather than separate excursions.",
      tags: ["old town", "walking tour", "landmarks"],
      transport: [{ label: "City walking", duration: "Most of the day" }],
      accommodationName: "Apartmenty Lea",
      fixedItems: [
        {
          time: "10:00-12:30",
          title: "Old Town Free Walking Tour",
          note: "English tour in the historic centre.",
        },
      ],
      highlightImage: {
        src: "/trips/2026-krakow/highlights/day02.jpg",
        alt: "Krakow Old Town highlight for day 2",
      },
      tips: [
        "Morskie Oko is a reliable classic Polish option after the tour.",
        "Cafe Camelot or Massolit work well if the afternoon needs a slower coffee stop rather than another sight.",
        "Toscanizzazione ArtBistro or Hanguk Bistro are easy evening fallbacks near the accommodation.",
      ],
      sections: [
        {
          title: "Morning",
          items: [
            {
              time: "10:00",
              text: "Join the Old Town free walking tour.",
              duration: "Approx. 2.5 hours",
              fixed: true,
            },
            { text: "Cover Rynek Glowny, Sukiennice, St. Mary's context, and the Collegium Maius area." },
          ],
        },
        {
          title: "Afternoon",
          items: [
            { text: "Lunch near the Old Town." },
            { text: "Walk Wawel Castle grounds and the cathedral exterior." },
            { text: "Continue with an easy Vistula river walk." },
            { text: "Leave time for coffee or a slower break." },
          ],
        },
        {
          title: "Evening",
          items: [{ text: "Dinner at leisure, ideally without forcing one more major stop." }],
        },
      ],
    },
    {
      slug: "day-03",
      dayNumber: 3,
      date: "2026-03-30",
      title: "Wieliczka Salt Mine and a lighter evening",
      summary:
        "A fixed early visit to Wieliczka, then a softer return to Krakow with room to decompress.",
      overview:
        "Wieliczka gives the trip one of those places that sounds almost too famous until it turns out to justify itself. It is not just an old mine but a whole underground world of chambers, chapels, carved salt details, and industrial history stacked over centuries. The guided structure matters here because the site is too large and too strange to appreciate properly as random wandering. The famous St. Kinga's Chapel is the visual climax, but the mine's deeper charm is that it shows how much wealth, labour, and quiet ingenuity once sat below the surface of ordinary life. Because the visit starts early, the rest of the day should remain deliberately lighter. Returning to Krakow for lunch and a low-pressure evening is not wasted time. It gives the trip some breathing room before the more historically heavy fourth and fifth days.",
      tags: ["fixed visit", "underground site", "lighter evening"],
      transport: [
        { label: "Drive", duration: "Short transfer to Wieliczka and back" },
      ],
      accommodationName: "Apartmenty Lea",
      fixedItems: [
        {
          time: "09:00",
          title: "Wieliczka Salt Mine guided visit",
          note: "Early departure from the accommodation needed.",
        },
      ],
      highlightImage: {
        src: "/trips/2026-krakow/highlights/day03.jpg",
        alt: "Wieliczka Salt Mine highlight for day 3",
      },
      notes: [
        "Salt Mine visit is fixed at 09:00, so the morning should stay simple and punctual.",
      ],
      tips: [
        "Do not overpack the evening. Wieliczka is more tiring than it sounds because of the early start and the amount of walking underground.",
      ],
      sections: [
        {
          title: "Morning",
          items: [
            { text: "Drive to Wieliczka." },
            {
              time: "09:00",
              text: "Guided visit of the Wieliczka Salt Mine.",
              fixed: true,
            },
          ],
        },
        {
          title: "Afternoon",
          items: [
            { text: "Return to Krakow." },
            { text: "Have lunch and keep the rest of the afternoon free." },
          ],
        },
        {
          title: "Evening",
          items: [
            { text: "Short optional walk or an easy dinner near the accommodation." },
          ],
        },
      ],
    },
    {
      slug: "day-04",
      dayNumber: 4,
      date: "2026-03-31",
      title: "Jewish Krakow walking tour and Schindler's Factory",
      summary:
        "Kazimierz in the morning, then a more serious historical layer in the afternoon at Schindler's Factory.",
      overview:
        "This is one of the richest days of the trip because Kazimierz carries several lives at once. It was once an independent town, later the centre of Jewish life in Krakow, and today remains one of the city's most atmospheric districts, where cafés, synagogues, courtyards, and memorial traces all sit close together. A walking tour is the right way in because the district can otherwise blur into mood without enough historical clarity. By the afternoon, Schindler's Factory shifts the tone from neighbourhood texture to the machinery of occupation and wartime survival. It is one of those museum visits that asks for attention rather than speed, so the day works best when the gap between lunch and the museum stays relaxed. Dinner in Kazimierz afterwards can restore some warmth without trivialising what came before. The district is strong enough to hold both memory and everyday life at the same time, which is exactly what makes it worth lingering in.",
      tags: ["kazimierz", "history", "booked museum"],
      transport: [
        { label: "City walking", duration: "Most of the day" },
        { label: "Transfer", duration: "Allow approx. 30 minutes to Schindler's" },
      ],
      accommodationName: "Apartmenty Lea",
      fixedItems: [
        {
          time: "10:30-13:00",
          title: "Jewish Krakow Free Walking Tour",
          note: "English tour through Kazimierz.",
        },
        {
          time: "16:00",
          title: "Schindler's Factory Museum guided tour",
          note: "Booked English visit.",
        },
      ],
      highlightImage: {
        src: "/trips/2026-krakow/highlights/day04.jpg",
        alt: "Kazimierz and Schindler's Factory highlight for day 4",
      },
      notes: [
        "Schindler's Factory at 16:00 is booked, so do not let lunch drift too long.",
      ],
      tips: [
        "Hamsa works well for lunch after the morning tour.",
        "Starka is one of the stronger evening options in Kazimierz if you want dinner with atmosphere rather than something rushed.",
        "Alchemia is a good softer stop for coffee or a non-alcoholic drink if the day needs a pause.",
      ],
      sections: [
        {
          title: "Morning",
          items: [
            {
              time: "10:30",
              text: "Join the Jewish Krakow free walking tour.",
              duration: "Approx. 2.5 hours",
              fixed: true,
            },
            { text: "Cover Kazimierz, Jewish history, synagogues, and district context." },
          ],
        },
        {
          title: "Afternoon",
          items: [
            { text: "Lunch in Kazimierz." },
            { text: "Keep some free time or rest before the museum." },
            {
              time: "16:00",
              text: "Guided tour of Schindler's Factory Museum.",
              fixed: true,
            },
          ],
        },
        {
          title: "Evening",
          items: [{ text: "Dinner in Kazimierz." }],
        },
      ],
    },
    {
      slug: "day-05",
      dayNumber: 5,
      date: "2026-04-01",
      title: "Auschwitz-Birkenau and the drive home",
      summary:
        "An early departure, a fixed memorial visit, and then the drive home without trying to force much else into the day.",
      overview:
        "This final day should be treated differently from the others. Auschwitz-Birkenau is not another historical attraction on the list but a memorial site that changes the weight of the whole schedule around it. The early start is practical because the visit is fixed, but the more important adjustment is mental rather than logistical: leave space for the site to be what it is, and do not try to decorate the day with too many extras around it. The guided structure is helpful because the scale and horror of the place need context, but it will still be emotionally demanding. Afterward, a quiet lunch and the drive home are enough. This is not the day for one more detour or one last city flourish. The cleanest ending is to let the visit stand on its own and keep the rest of the route functional.",
      tags: ["fixed visit", "memorial site", "return day"],
      transport: [
        { label: "Drive to Auschwitz", duration: "Approx. 1.5 hours" },
        { label: "Drive onward", note: "Home after the visit" },
      ],
      fixedItems: [
        {
          time: "08:30",
          title: "Auschwitz-Birkenau guided group visit",
          note: "Approx. 3 hours 45 minutes across Auschwitz I and Birkenau.",
        },
      ],
      highlightImage: {
        src: "/trips/2026-krakow/highlights/day05.jpg",
        alt: "Auschwitz-Birkenau memorial highlight for day 5",
      },
      notes: [
        "08:30 visit is fixed, so pack and check out early without adding friction to the morning.",
      ],
      tips: [
        "Pack bags the night before so the morning can stay quiet and simple.",
      ],
      sections: [
        {
          title: "Morning",
          items: [
            { text: "Early checkout from Krakow." },
            { text: "Drive to Auschwitz.", duration: "Approx. 1.5 hours" },
            {
              time: "08:30",
              text: "Guided group visit of Auschwitz I and Birkenau.",
              duration: "Approx. 3 hours 45 minutes",
              fixed: true,
            },
          ],
        },
        {
          title: "Midday",
          items: [{ text: "Quiet lunch nearby after the visit." }],
        },
        {
          title: "Afternoon",
          items: [{ text: "Drive home." }],
        },
      ],
    },
  ],
};
