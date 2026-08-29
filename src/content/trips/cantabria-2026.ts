import { cantabriaContextByDay } from "@/content/context/cantabria-2026";
import type { Trip } from "@/content/types";

export const cantabria2026: Trip = {
  slug: "2026-cantabria",
  title: "Cantabria 2026",
  eyebrow: "Slow coast, September 2026",
  destination: "Spain",
  dateRange: "September 2026",
  blurb:
    "Eight days on the Cantabrian coast from a single base, with one anchor each day and the afternoons left open.",
  intro: [
    "Cantabria at walking speed. One house for the whole week on the green coast between Bilbao and the Picos, and days built around a single thing worth leaving the garden for — a painted ceiling, a Gaudí folly, a cave, a market street at lunchtime, an anchovy factory — with the hours on either side left deliberately open.",
    "This is the opposite of a route. Nothing here has to be seen, every drive is under an hour, and one day has no plan in it at all. The point is to be somewhere specific for a week rather than to cover ground.",
  ],
  coverImage: {
    src: "/trips/2026-cantabria/cover.jpg",
    alt: "Cantabrian coast cover image for the Cantabria 2026 trip",
  },
  baseLocation: "Santillana del Mar",
  tags: ["slow travel", "atlantic coast", "food"],
  facts: [
    { label: "Duration", value: "8 days" },
    { label: "Style", value: "One base, short drives" },
    { label: "Shape", value: "Santillana, Comillas, Santander, Santoña" },
    { label: "Pace", value: "One anchor a day, afternoons open" },
  ],
  planningNotes: [
    "El Capricho and El Soplao are the only hard bookings of the week, so everything else can move without consequence.",
    "Bilbao airport car returns get congested, so the last morning wants more buffer than it looks like it needs.",
  ],
  days: [
    {
      slug: "day-01",
      dayNumber: 1,
      dateLabel: "Friday",
      title: "Landing at Bilbao and the drive west",
      summary:
        "A flight, a rental car, and under two hours of motorway before the week actually starts.",
      overview:
        "Nothing is asked of day one except arriving. Pick the car up at Bilbao and drive west on the A-8, which runs the length of this coast a ridge inland from the sea — an hour and three quarters, no passes, no navigation worth the name. The country changes on the way and it is worth watching: the industrial approaches to Bilbao give out into the wet, folded, aggressively green landscape that earns northern Spain its nickname, with the Picos somewhere south behind whatever cloud is in the way. Arrive late afternoon, work out where the loungers are, and let the week start tomorrow. Dinner in Santillana del Mar chosen on effort rather than merit, because the only job tonight is to stop moving.",
      tags: ["arrival", "drive", "settle in"],
      transport: [
        { label: "Flight", duration: "Into Bilbao" },
        { label: "Drive", duration: "Bilbao to Santillana del Mar on the A-8, about 1 hour 45" },
      ],
      accommodationName: "Villaverde Village",
      highlightImage: {
        src: "/trips/2026-cantabria/highlights/day01.jpg",
        alt: "Arrival on the Cantabrian coast highlight for day 1",
      },
      notes: [
        "Check-in is autonomous, so arrival time is flexible and nobody needs to be met.",
      ],
      sections: [
        {
          title: "Getting there",
          items: [
            { text: "Collect the rental car at Bilbao airport." },
            { text: "West on the A-8, straight through." },
          ],
        },
        {
          title: "Landing",
          items: [
            { text: "Arrive late afternoon, unpack, and stop." },
            { text: "First dinner in the old town, low effort by design." },
          ],
        },
      ],
    },
    {
      slug: "day-02",
      dayNumber: 2,
      dateLabel: "Saturday",
      title: "Santillana and Altamira",
      summary:
        "The old town before the coaches, the painted ceiling at Altamira, and an afternoon with nothing in it.",
      overview:
        "Day two starts gently on purpose. Santillana del Mar is a genuinely beautiful medieval village that has been thoroughly discovered — cobbles, a Romanesque collegiate church, stone houses with wooden balconies — and for about two hours each morning it belongs to whoever is already standing in it. After that the coaches arrive. So the morning is a walk through it before that happens, and a coffee on the way back. The anchor is Altamira, two kilometres out of town. What you actually visit is the Neocueva, an exact replica built beside the real cave, which has been closed for decades because the breath and body heat of too many visitors began damaging paintings that had survived at least fourteen thousand years. That sounds like a compromise and partly it is, but the effect in the low chamber is the intended one: a ceiling crowded with bison, painted by people who used the bulges in the rock to give the animals their shoulders and haunches. Then lunch, and an afternoon with nothing in it.",
      tags: ["old town", "cave art", "gentle"],
      context: cantabriaContextByDay["day-02"],
      transport: [
        { label: "On foot", duration: "Santillana old town, at whatever pace the morning wants" },
        { label: "Short drive", duration: "Santillana to Altamira, about five minutes" },
      ],
      highlightImage: {
        src: "/trips/2026-cantabria/highlights/day02.jpg",
        alt: "Altamira and Santillana del Mar highlight for day 2",
      },
      fixedItems: [
        {
          title: "Altamira Neocueva",
          note: "Booked ahead; the only thing the day is committed to.",
        },
      ],
      notes: [
        "Altamira slots are limited and sell out well in advance, so this is the one booking that shapes the morning.",
      ],
      options: [
        "The Colegiata de Santa Juliana, if the Romanesque church is worth more than the walk past it.",
        "Nothing at all after lunch — the garden and the loungers are a legitimate use of day two.",
      ],
      sections: [
        {
          title: "Early",
          items: [
            { text: "Walk the old town while it is still quiet." },
            { text: "Coffee somewhere on the way back." },
          ],
        },
        {
          title: "The anchor",
          items: [
            {
              text: "Altamira Neocueva, a few minutes out of town.",
              fixed: true,
            },
          ],
        },
        {
          title: "The rest of the day",
          items: [
            { text: "Lunch, then deliberately nothing." },
            { text: "An easy first proper dinner." },
          ],
        },
      ],
    },
    {
      slug: "day-03",
      dayNumber: 3,
      dateLabel: "Sunday",
      title: "Comillas and San Vicente de la Barquera",
      summary:
        "A Gaudí folly at midday, then a harbour lunch and a castle above the estuary.",
      overview:
        "Two towns, both taken at strolling pace. Comillas first, early enough to have it to yourself — a small town that became improbably grand in the nineteenth century when its emigrants came back rich from the Americas and spent the money on architecture. The anchor is El Capricho, which Gaudí built here in the 1880s for one of them: a summer villa banded in sunflower tiles with a tower like a minaret dropped into a Cantabrian garden, and one of only three buildings he ever completed outside Catalonia. It is small, strange, and takes about an hour. Afterwards the road runs fifteen minutes west to San Vicente de la Barquera, which sits on an estuary behind a long bridge with a ruined royal castle on the hill above it. Lunch by the harbour — sorropotún, the tuna and potato stew the town is known for, if anyone is making it — then the castle, the estuary, and a walk with no particular destination.",
      tags: ["modernista", "harbour", "estuary"],
      context: cantabriaContextByDay["day-03"],
      transport: [
        { label: "Drive", duration: "Santillana to Comillas, about 25 minutes" },
        { label: "Drive", duration: "Comillas to San Vicente de la Barquera, about 15 minutes" },
      ],
      highlightImage: {
        src: "/trips/2026-cantabria/highlights/day03.jpg",
        alt: "El Capricho and San Vicente de la Barquera highlight for day 3",
      },
      fixedItems: [
        {
          time: "12:30",
          title: "El Capricho guided tour",
          note: "Booked; about an hour.",
        },
      ],
      tips: [
        "Park at the municipal polideportivo in Comillas — free, rarely full, and ten minutes on foot from El Capricho.",
        "The bakeries in San Vicente sell corbatas, a twisted puff pastry worth carrying home in a paper bag.",
      ],
      options: [
        "Oyambre beach on the drive back, if the afternoon is holding.",
        "The rest of Comillas — the Sobrellano palace and the old pontifical university are visible from most of the town and free to walk around.",
      ],
      sections: [
        {
          title: "Early",
          items: [
            { text: "Comillas old town before the day-trippers, with coffee somewhere in it." },
          ],
        },
        {
          title: "The anchor",
          items: [
            {
              time: "12:30",
              text: "El Capricho, guided.",
              duration: "About an hour",
              fixed: true,
            },
          ],
        },
        {
          title: "After",
          items: [
            { text: "West to San Vicente de la Barquera and a late harbour lunch." },
            { text: "The castle, the estuary, and no fixed time to leave." },
          ],
        },
      ],
    },
    {
      slug: "day-04",
      dayNumber: 4,
      dateLabel: "Monday",
      title: "El Soplao and the road into the hills",
      summary:
        "An hour underground in one of the odder caves in Europe, then a mountain village and whatever the afternoon wants.",
      overview:
        "The only early start of the week, and it earns it. El Soplao was found in 1908 by miners cutting into the hillside for zinc and lead, which is the usual way these things happen, but what they broke into is unusual even by cave standards: the chambers are full of eccentrics, thin mineral filaments that grow sideways and upward against gravity in defiance of how a cave is supposed to work. The tour runs about an hour and is in Spanish only, which matters less than it sounds — the guide talks, and the cave does the rest. Afterwards the day turns rural. Carmona is a small stone village in the hills with almost nothing in it, and the point of going is that it feels nothing like the coast twenty minutes away: darker timber, steeper ground, kitchens that cook chicken with paprika and ham rather than anything out of the sea. Then either a river walk or a slow drive back, depending entirely on how the legs feel.",
      tags: ["cave", "mountains", "inland"],
      context: cantabriaContextByDay["day-04"],
      transport: [
        { label: "Drive", duration: "Santillana to El Soplao, about 45 minutes" },
        { label: "Drive", duration: "On to Carmona and back to the coast through the valley" },
      ],
      highlightImage: {
        src: "/trips/2026-cantabria/highlights/day04.jpg",
        alt: "El Soplao cave and the Cantabrian hills highlight for day 4",
      },
      fixedItems: [
        {
          time: "10:00",
          title: "El Soplao, Visita Turística",
          note: "Booked; about 55 minutes, Spanish only.",
        },
      ],
      notes: [
        "Rural kitchens inland keep their own hours and can be shut on a weekday, so lunch in Carmona is worth confirming before driving up.",
      ],
      options: [
        "The Valle del Nansa river path, roughly six kilometres out and back through chestnut woods.",
        "The valley road back to the coast at half speed, with a coffee stop and an early afternoon at the house.",
      ],
      sections: [
        {
          title: "The anchor",
          items: [
            {
              time: "10:00",
              text: "El Soplao, underground.",
              duration: "About 55 minutes",
              fixed: true,
            },
          ],
        },
        {
          title: "Midday",
          items: [
            { text: "Up to Carmona — a short walk around it is the whole village." },
            { text: "Lunch there if the kitchen is open." },
          ],
        },
        {
          title: "Whichever way the afternoon goes",
          items: [
            { text: "The Nansa valley on foot, or the same valley through a windscreen." },
          ],
        },
      ],
    },
    {
      slug: "day-05",
      dayNumber: 5,
      dateLabel: "Tuesday",
      title: "Santander, slowly",
      summary:
        "A headland walk, the local lunch hour around the Mercado del Este, and no fixed time to come home.",
      overview:
        "Santander gets a morning and no plan beyond it. The Magdalena peninsula first, early, when it is just sea and joggers and nobody selling anything — a headland with a royal summer palace on it and a path around the edge that takes an hour if you dawdle. Then a slow drift inland as the bars around the Mercado del Este start setting up, which they do towards lunchtime and not a minute before. What follows is the anchor, and it is the one anchor of the week that nobody booked: the pintxos hour. You stand, you point at what looks good, you pay a couple of euros, you move to the next place. Rabas — squid rings fried crisp, lemon, nothing else — are the standard order and a fair test of any bar. After that the day has no opinion. Another neighbourhood, a coffee with a view, or the drive back the moment it stops being fun.",
      tags: ["city", "pintxos", "no agenda"],
      context: cantabriaContextByDay["day-05"],
      transport: [
        { label: "Drive", duration: "Santillana to Santander, about half an hour" },
      ],
      highlightImage: {
        src: "/trips/2026-cantabria/highlights/day05.jpg",
        alt: "Santander waterfront highlight for day 5",
      },
      tips: [
        "The bars near the Mercado del Este do not get going until close to lunchtime, so arriving early just means an empty street.",
      ],
      options: [
        "MUPAC, the prehistory museum under the Mercado del Este, which follows on well from Altamira.",
        "The market itself, for cheese and a browse rather than a meal.",
        "A second neighbourhood, if the city is holding your attention.",
      ],
      sections: [
        {
          title: "Early",
          items: [
            { text: "Drive in and walk the Magdalena peninsula before the day warms up." },
          ],
        },
        {
          title: "Around one",
          items: [
            { text: "Drift towards the Mercado del Este as the bars open." },
            { text: "Eat standing, a couple of things at a time, and keep moving." },
          ],
        },
        {
          title: "Open end",
          items: [
            { text: "Stay as long as it stays interesting." },
            { text: "Drive back whenever." },
          ],
        },
      ],
    },
    {
      slug: "day-06",
      dayNumber: 6,
      dateLabel: "Wednesday",
      title: "Santoña and the anchovies",
      summary:
        "A free factory tour, a working fishing port with no tourists in it, and the coast road home.",
      overview:
        "Santoña is forty-five minutes east, past the marshes that make up one of the better bird reserves on this coast, and it is the least decorated place on the whole itinerary. It is a working port that happens to produce what most of Spain agrees is the best anchovy in the country. The tour at the cannery is free, runs every hour, needs no booking, and is genuinely interesting: the fish are salted and pressed and left for months before anyone touches them again, then filleted by hand, one at a time, by women who have been doing it for decades. There is a tasting at the end — the salt-cured fillets in oil, and the paler boquerones in vinegar, which are a different thing entirely and worth trying side by side. Afterwards the town: a harbour, a fort above it, no gift shops to speak of, and lunch on the waterfront. The drive back can take as long as you let it.",
      tags: ["fishing port", "anchovies", "no crowds"],
      context: cantabriaContextByDay["day-06"],
      transport: [
        { label: "Drive", duration: "Santillana to Santoña, about 45 minutes east" },
      ],
      highlightImage: {
        src: "/trips/2026-cantabria/highlights/day06.jpg",
        alt: "Santoña harbour and anchovy town highlight for day 6",
      },
      tips: [
        "The tour runs hourly through the late morning and takes no reservation, so going on the first one means a smaller group.",
      ],
      options: [
        "Noja or Trengandín on the coast road back, if a beach stop appeals.",
        "The fort above the harbour, for the view rather than the history.",
      ],
      sections: [
        {
          title: "Getting there",
          items: [
            { text: "East along the coast, past the marshland reserve." },
          ],
        },
        {
          title: "The anchor",
          items: [
            { text: "The anchovy tour — film, factory floor, and a tasting at the end." },
            { text: "Try the boquerones as well as the salt-cured fillets." },
          ],
        },
        {
          title: "The rest",
          items: [
            { text: "Harbour walk, the fort, and lunch on the water." },
            { text: "Home slowly, with or without a beach on the way." },
          ],
        },
      ],
    },
    {
      slug: "day-07",
      dayNumber: 7,
      dateLabel: "Thursday",
      title: "A day with nothing in it",
      summary:
        "No anchor, no drive, no obligation — and the one day the coast gets to explain itself.",
      overview:
        "This is the day the week has been building towards, which is to say it contains nothing. It is also the right moment to say what this coast actually is. Cantabria is the wet green edge of Spain, a two-hundred-kilometre strip where the mountains come down almost to the water — the Picos de Europa are barely thirty kilometres inland, which is why the weather arrives so fast and why the grass is the colour it is. It never became a resort coast. It stayed dairy country and fishing country, and the result in September is a shoreline with proper sand on it and nobody standing on the sand. The food divides along exactly the same line as the geography: anchovies and hake and squid on one side of that thirty kilometres, and on the other, bean stew with blood sausage, beef from a mountain breed, cheese aged in caves. Somewhere in the middle sits quesada, the dense baked custard that every restaurant makes slightly differently, which is as good a reason as any to order it twice. Today is for a beach or a lounger, and no further plan than that.",
      tags: ["free day", "beach", "rest"],
      context: cantabriaContextByDay["day-07"],
      highlightImage: {
        src: "/trips/2026-cantabria/highlights/day07.jpg",
        alt: "Cantabrian beach and coastline highlight for day 7",
      },
      tips: [
        "Tonight is the last proper dinner of the trip, so it is the one worth booking a day ahead.",
      ],
      options: [
        "Llanes, an hour west into Asturias — a walled old town, a working harbour, and the painted concrete blocks on the breakwater, which are better than they sound.",
        "Castro Urdiales, an hour and a half east, for a Gothic church on a sea cliff and a quieter coastline.",
      ],
      sections: [
        {
          title: "If the weather holds",
          items: [
            { text: "Playa de Santa Justa, ten minutes away — a small cove with a rock arch and usually nobody in it." },
            { text: "Or Arnía, twenty-five minutes east, where the limestone breaks up into towers and pools." },
          ],
        },
        {
          title: "If it does not",
          items: [
            { text: "The garden, the jacuzzi, and no apology for either." },
            { text: "Or drive somewhere on impulse, on the grounds that nothing is booked." },
          ],
        },
      ],
    },
    {
      slug: "day-08",
      dayNumber: 8,
      dateLabel: "Friday",
      title: "Departure",
      summary:
        "Last coffee in the old town, the coast road back east, and a car to hand over at Bilbao.",
      overview:
        "The last morning is a transfer with a coffee in front of it. Pack, walk the old town once more while it is still quiet, and then the A-8 back the way it came — the same hour and three quarters, the same green, in the opposite direction. The only thing worth watching is the clock at the far end.",
      tags: ["departure", "drive", "airport"],
      transport: [
        { label: "Drive", duration: "Santillana del Mar to Bilbao airport, about 1 hour 45" },
      ],
      highlightImage: {
        src: "/trips/2026-cantabria/highlights/day08.jpg",
        alt: "Departure morning on the Cantabrian coast highlight for day 8",
      },
      notes: [
        "Car returns at Bilbao airport back up badly at peak times, so the schedule wants twenty or thirty minutes of slack in it.",
      ],
      sections: [
        {
          title: "Last morning",
          items: [
            { text: "Breakfast, packing, and a final walk through Santillana." },
          ],
        },
        {
          title: "East along the coast",
          items: [
            { text: "The A-8 back to Bilbao." },
            { text: "Return the car with time in hand, then fly." },
          ],
        },
      ],
    },
  ],
};
