import type { Trip } from "@/content/types";

export const scotland2026: Trip = {
  slug: "2026-scotland",
  title: "Scotland 2026",
  eyebrow: "Public-transport loop, May-June 2026",
  destination: "Scotland",
  dateRange: "28 May - 9 June 2026",
  blurb:
    "A thirteen-day rail, ferry, and bus route from Edinburgh through Oban, Mull, Fort William, Loch Ness, Inverness, and Aviemore before the final return south.",
  intro: [
    "This trip is much more of a stitched-together route than a single-base holiday: city arrival, west-coast harbour days, island weather dependence, Highland rail scenery, and a last swing through the Cairngorms before the flight home. The movement is part of the point.",
    "The shape is strong, but it only works if the fixed transport pieces are treated seriously. A few trains and ferries act as anchors for whole days, and the hardest island day sits right in the middle. When those edges are respected, the route should feel cinematic rather than stressful.",
  ],
  coverImage: {
    src: "/trips/2026-scotland/cover.jpg",
    alt: "Scottish landscape cover image for the Scotland 2026 itinerary",
  },
  tags: ["public transport", "islands", "highlands"],
  facts: [
    { label: "Duration", value: "13 days" },
    { label: "Style", value: "Rail-and-ferry route" },
    { label: "Shape", value: "Edinburgh, Oban, islands, Highlands, Cairngorms" },
    { label: "Pace", value: "Full days, early starts, light evenings" },
  ],
  planningNotes: [
    "The Jacobite steam train and key intercity legs are the schedule-defining pieces, so bookings and timetable checks matter more here than on a road trip.",
    "Day 6 is the hardest logistical day of the trip and Day 12 leads straight into a very early airport morning on 9 June 2026.",
    "Scotland disappears from the homepage future-trip list in this change because it is now a published live itinerary in `src/content/trips/`.",
  ],
  days: [
    {
      slug: "day-01",
      dayNumber: 1,
      date: "2026-05-28",
      title: "Arrival in Edinburgh",
      summary:
        "A soft landing day through Stockbridge, the Water of Leith, and a first easy evening in the city.",
      overview:
        "The first day works best as decompression rather than a grand Edinburgh statement. Stockbridge and the Water of Leith give the city in a gentler register, with enough texture to feel local without asking for much decision-making straight after the flight. It is the right kind of opening: river walk, a little air, one museum fallback if the weather turns, then an early night.",
      tags: ["arrival", "city", "easy start"],
      transport: [
        { label: "Airport tram or bus", duration: "Approx. 30 minutes" },
      ],
      highlightImage: {
        src: "/trips/2026-scotland/highlights/day01.jpg",
        alt: "Edinburgh arrival highlight for day 1",
      },
      sections: [
        {
          title: "Morning",
          items: [
            { time: "08:45", text: "Arrive at Edinburgh Airport." },
            {
              time: "~09:15",
              text: "Take the tram or bus into the city centre.",
              duration: "Approx. 30 minutes",
            },
            {
              time: "~10:00",
              text: "Coffee and a light breakfast in Stockbridge or New Town, with luggage drop if possible.",
            },
            {
              time: "~11:00",
              text: "Walk along the Water of Leith and through Dean Village.",
            },
          ],
        },
        {
          title: "Afternoon",
          items: [
            { time: "~13:00", text: "Light lunch in Stockbridge." },
            {
              time: "~14:30",
              text: "Rest in Princes Street Gardens or use the Scottish National Gallery as a weather fallback.",
            },
            { time: "~16:00", text: "Check in and rest." },
          ],
        },
        {
          title: "Evening",
          items: [
            {
              time: "~19:00",
              text: "Dinner in Stockbridge or New Town and keep the night deliberately early.",
            },
          ],
        },
      ],
    },
    {
      slug: "day-02",
      dayNumber: 2,
      date: "2026-05-29",
      title: "Historic Edinburgh and urban layers",
      summary:
        "A booked Old Town walking tour in the morning, then one stronger afternoon choice instead of trying to consume the whole city.",
      overview:
        "This is the day for Edinburgh's historic weight, but it still works better with restraint than with accumulation. The morning tour gives the Royal Mile, Grassmarket, and Greyfriars the right structure, then the afternoon can stay selective: one viewpoint, one museum, or the castle only if the group genuinely wants it. The city is stronger when it feels legible, not overstuffed.",
      tags: ["old town", "walking tour", "history"],
      transport: [{ label: "Walking", duration: "Most of the day" }],
      highlightImage: {
        src: "/trips/2026-scotland/highlights/day02.jpg",
        alt: "Historic Edinburgh highlight for day 2",
      },
      fixedItems: [
        {
          time: "10:00",
          title: "Old Town History free walking tour",
          note: "Starts at 351 High Street on the Royal Mile; booked.",
        },
      ],
      options: [
        "Choose one main afternoon focus: Salisbury Crags, the National Museum of Scotland, or Edinburgh Castle if the group strongly wants it.",
      ],
      sections: [
        {
          title: "Morning",
          items: [
            { time: "~09:00", text: "Breakfast near the accommodation." },
            {
              time: "10:00",
              text: "Join the Old Town History walking tour from 351 High Street.",
              duration: "1 hour 45 minutes",
              fixed: true,
              note: "Royal Mile, St Giles', Grassmarket, and Greyfriars context.",
            },
          ],
        },
        {
          title: "Afternoon",
          items: [
            {
              time: "11:45",
              text: "Lunch around Grassmarket or Victoria Street after the tour.",
            },
            {
              time: "~13:30",
              text: "Use the afternoon for one stronger focus rather than a grab-bag of smaller stops.",
            },
            { time: "~17:00", text: "Coffee or a short rest in the city centre." },
          ],
        },
        {
          title: "Evening",
          items: [
            {
              time: "~19:00",
              text: "Dinner in Old Town, New Town, or Leith, with an optional quiet evening walk.",
            },
          ],
        },
      ],
    },
    {
      slug: "day-03",
      dayNumber: 3,
      date: "2026-05-30",
      title: "Edinburgh to Glasgow to Oban",
      summary:
        "A transfer day built around the fixed West Highland Line departure, with just enough Glasgow in the middle to make the move feel like part of the trip.",
      overview:
        "The crucial fact here is that Glasgow is not the main event; the 16:35 departure to Oban is. That discipline still leaves enough room for lunch, the cathedral, and the Necropolis, which is exactly the right scale of urban interlude before the route turns west into the long scenic rail section. The day succeeds if Oban feels earned rather than merely reached.",
      tags: ["transfer", "rail journey", "west coast"],
      transport: [
        { label: "Train", duration: "Edinburgh to Glasgow approx. 1 hour" },
        { label: "West Highland Line", duration: "Glasgow to Oban approx. 3 hours" },
      ],
      highlightImage: {
        src: "/trips/2026-scotland/highlights/day03.jpg",
        alt: "West Highland Line journey highlight for day 3",
      },
      fixedItems: [
        {
          time: "16:35",
          title: "West Highland Line departure from Glasgow Queen Street",
          note: "Must not be missed.",
        },
      ],
      notes: [
        "The Glasgow stop only works inside the constraints of the Oban train timetable.",
      ],
      sections: [
        {
          title: "Morning",
          items: [
            { time: "~09:00", text: "Breakfast and check out." },
            {
              time: "~10:00",
              text: "Take a suggested train from Edinburgh Waverley to Glasgow Queen Street.",
              duration: "Approx. 1 hour",
            },
            {
              time: "~11:00",
              text: "Arrive in Glasgow and drop bags at left luggage if available.",
            },
          ],
        },
        {
          title: "Afternoon",
          items: [
            { time: "~11:30", text: "Lunch near Queen Street." },
            {
              time: "~12:30",
              text: "Walk to Glasgow Cathedral for a short visit.",
            },
            {
              time: "~13:30",
              text: "Continue to the Necropolis for views across the city.",
            },
            { time: "~15:00", text: "Coffee and head back toward Queen Street." },
            {
              time: "16:35",
              text: "Board the West Highland Line service to Oban.",
              duration: "Approx. 3 hours",
              fixed: true,
            },
          ],
        },
        {
          title: "Evening",
          items: [
            { time: "19:40", text: "Arrive at Oban station." },
            { time: "~20:00", text: "Check in after the short walk from the station." },
            { time: "~20:30", text: "Dinner around the harbour and a relaxed evening." },
          ],
        },
      ],
    },
    {
      slug: "day-04",
      dayNumber: 4,
      date: "2026-05-31",
      title: "Oban town and harbour views",
      summary:
        "An easier orientation day for Oban, with coastal viewpoints, a bit of breathing room, and the booked distillery visit in the late afternoon.",
      overview:
        "After the long rail move west, Oban should be allowed to register as a place rather than just a base for island departures. The waterfront, Dunollie side, and McCaig's Tower all do that well without turning the day into a march. The distillery booking then gives the afternoon one firm point of focus and keeps the rest of the day comfortably loose.",
      tags: ["harbour town", "viewpoints", "booked stop"],
      transport: [{ label: "Walking", duration: "All day in town" }],
      highlightImage: {
        src: "/trips/2026-scotland/highlights/day04.jpg",
        alt: "Oban harbour and McCaig's Tower highlight for day 4",
      },
      fixedItems: [
        {
          time: "16:30",
          title: "Oban Distillery tour",
          note: "Booked; allow around 1 hour.",
        },
      ],
      sections: [
        {
          title: "Morning",
          items: [
            { time: "~09:00", text: "Easy breakfast start." },
            { time: "~10:00", text: "Walk the harbour and waterfront." },
            {
              time: "~11:00",
              text: "Head toward Dunollie Castle or the nearby coastal viewpoint.",
            },
          ],
        },
        {
          title: "Afternoon",
          items: [
            { time: "~12:30", text: "Lunch in the town centre." },
            {
              time: "~14:00",
              text: "Climb to McCaig's Tower for the broad harbour view.",
            },
            { time: "~15:00", text: "Coffee and rest before the tour." },
            {
              time: "16:30",
              text: "Take the booked Oban Distillery tour.",
              fixed: true,
            },
            { time: "~17:30", text: "Browse the shop only if there is still interest." },
          ],
        },
        {
          title: "Evening",
          items: [{ time: "~19:00", text: "Dinner around the harbour." }],
        },
      ],
    },
    {
      slug: "day-05",
      dayNumber: 5,
      date: "2026-06-01",
      title: "Isle of Mull and Tobermory",
      summary:
        "The first island day: ferry to Craignure, bus to Tobermory, and a slower harbour-town rhythm before returning to Oban.",
      overview:
        "Tobermory is useful precisely because it is not trying to be an epic expedition. The coloured harbour front and slower island pacing give the route a change of register before the much heavier Day 6. That makes this a good day to stay open to weather, ferry rhythm, and how much walking the group actually wants rather than pushing it beyond what the island naturally offers.",
      tags: ["island day", "ferry", "slower rhythm"],
      transport: [
        { label: "Ferry", duration: "Oban to Craignure approx. 45 minutes" },
        { label: "Bus", duration: "Craignure to Tobermory approx. 45 minutes" },
      ],
      highlightImage: {
        src: "/trips/2026-scotland/highlights/day05.jpg",
        alt: "Isle of Mull and Tobermory highlight for day 5",
      },
      notes: [
        "Check whether the Craignure-Tobermory public bus needs advance booking for a group of five.",
      ],
      sections: [
        {
          title: "Morning",
          items: [
            { time: "~08:30", text: "Breakfast and walk to the ferry terminal." },
            {
              time: "~09:00",
              text: "Take the CalMac ferry from Oban to Craignure.",
              duration: "Approx. 45 minutes",
            },
            {
              time: "~09:45",
              text: "Continue by bus across Mull to Tobermory.",
              duration: "Approx. 45 minutes",
            },
            { time: "~10:30", text: "Explore Tobermory harbour, shops, and cafes." },
          ],
        },
        {
          title: "Afternoon",
          items: [
            { time: "~12:30", text: "Light lunch in town." },
            {
              time: "~14:00",
              text: "Optional gentle walk in Aros Park for views back across the harbour.",
            },
            { time: "~15:30", text: "Return toward the bus stop for Craignure." },
            {
              time: "~16:15",
              text: "Bus back across Mull and ferry onward to Oban.",
            },
          ],
        },
        {
          title: "Evening",
          items: [
            { time: "~17:30", text: "Arrive back in Oban and rest." },
            { time: "~19:00", text: "Dinner and a relaxed evening." },
          ],
        },
      ],
    },
    {
      slug: "day-06",
      dayNumber: 6,
      date: "2026-06-02",
      title: "Staffa, Lunga and Iona",
      summary:
        "The most demanding day of the trip: fully managed island logistics, puffins and basalt, then the abbey-and-beach atmosphere on Iona.",
      overview:
        "This is the trip's expedition day and it should be treated as such. The logistics are helpfully handled by the operator, but it is still an early, weather-sensitive, physically full sequence that starts before seven and does not end until after eight at night. That effort is also what earns it: Atlantic boat time, Staffa's geology, Lunga's puffins, and Iona's older spiritual gravity all stacked into one day.",
      tags: ["islands", "booked excursion", "demanding"],
      transport: [
        { label: "Ferry", duration: "Oban-Craignure return" },
        { label: "Coach", duration: "Craignure-Fionnphort return" },
        { label: "Boat", duration: "Staffa, Lunga, and Iona circuit" },
      ],
      highlightImage: {
        src: "/trips/2026-scotland/highlights/day06.jpg",
        alt: "Staffa, Lunga, and Iona highlight for day 6",
      },
      fixedItems: [
        {
          time: "06:55",
          title: "Be at Oban ferry terminal",
          note: "West Coast Motors day begins here; show the booking email.",
        },
        { time: "07:25", title: "Ferry departs for Craignure" },
        { time: "17:15", title: "Latest departure from Iona" },
        { time: "20:15", title: "Return to Oban" },
      ],
      notes: [
        "If anyone wants the abbey interior, it needs separate advance booking.",
        "This is the most physically and logistically demanding day of the whole itinerary.",
      ],
      sections: [
        {
          title: "Early start",
          items: [
            {
              time: "06:55",
              text: "Be at Oban ferry terminal and collect CalMac tickets.",
              fixed: true,
            },
            {
              time: "07:25",
              text: "Ferry from Oban to Craignure.",
              fixed: true,
            },
            { time: "08:20", text: "Arrive in Craignure." },
            {
              time: "08:25",
              text: "Coach across Mull to Fionnphort.",
              fixed: true,
            },
            { time: "09:40", text: "Reach Fionnphort and board the small boat." },
          ],
        },
        {
          title: "Island circuit",
          items: [
            { time: "~10:00", text: "Lunga for puffins and coastal walking." },
            { time: "~12:00", text: "Staffa for Fingal's Cave and basalt columns." },
            {
              time: "~13:00",
              text: "Iona for beaches, the village, and the abbey if pre-booked.",
              duration: "Approx. 2 hours",
            },
          ],
        },
        {
          title: "Return",
          items: [
            { time: "17:15", text: "Leave Iona no later than this.", fixed: true },
            { time: "17:45", text: "Coach departs from Fionnphort.", fixed: true },
            { time: "19:25", text: "Ferry departs Craignure for Oban.", fixed: true },
            {
              time: "20:15",
              text: "Arrive back in Oban, keep dinner simple, and end the day early.",
              fixed: true,
            },
          ],
        },
      ],
    },
    {
      slug: "day-07",
      dayNumber: 7,
      date: "2026-06-03",
      title: "Oban to Fort William",
      summary:
        "A shorter transfer day with enough room for a gentle Fort William arrival instead of pushing straight into another headline stop.",
      overview:
        "After the strain of the island day, this transfer benefits from staying modest. The bus leg is short, the scenery still does the work, and Fort William is most useful here as a base where the group can recalibrate before the steam-train and Glencoe days. That makes the canal or lochside walk a better fit than anything more ambitious.",
      tags: ["transfer", "recovery day", "highlands"],
      transport: [{ label: "Direct bus", duration: "Oban to Fort William approx. 2 hours" }],
      highlightImage: {
        src: "/trips/2026-scotland/highlights/day07.jpg",
        alt: "Fort William arrival highlight for day 7",
      },
      sections: [
        {
          title: "Morning",
          items: [
            { time: "~09:00", text: "Easy breakfast and one final harbour walk." },
            {
              time: "~10:00",
              text: "Take the direct bus from Oban to Fort William.",
              duration: "Approx. 2 hours",
            },
          ],
        },
        {
          title: "Afternoon",
          items: [
            { time: "~12:00", text: "Arrive, check in, or drop luggage." },
            { time: "~12:30", text: "Lunch in Fort William." },
            {
              time: "~14:00",
              text: "Choose a relaxed walk at Neptune's Staircase or along Loch Linnhe.",
            },
            { time: "~17:00", text: "Rest at the accommodation." },
          ],
        },
        {
          title: "Evening",
          items: [
            { time: "~19:00", text: "Dinner near the accommodation and an early night." },
          ],
        },
      ],
    },
    {
      slug: "day-08",
      dayNumber: 8,
      date: "2026-06-04",
      title: "Jacobite Steam Train to Mallaig",
      summary:
        "One of the signature days of the route: Glenfinnan by rail, lunch in Mallaig, and the return through the same landscape in different light.",
      overview:
        "This is the most recognisable transport day of the trip, which is exactly why the booking risk matters so much. If those tickets are secured, the day more or less carries itself: the Glenfinnan Viaduct, long lochside stretches, the west-coast pull into Mallaig, then the whole route again on the way back with a different mood. There is no need to overcomplicate it beyond keeping the timing disciplined.",
      tags: ["steam train", "scenic rail", "book early"],
      transport: [{ label: "Jacobite steam train", duration: "Fort William-Mallaig return" }],
      highlightImage: {
        src: "/trips/2026-scotland/highlights/day08.jpg",
        alt: "Jacobite steam train highlight for day 8",
      },
      notes: [
        "The Jacobite is not yet bookable for 2026 in the source material, so this still needs monitoring and quick action once sales open.",
      ],
      fixedItems: [
        {
          time: "~10:15",
          title: "Jacobite departure from Fort William",
          note: "Book outbound and return separately.",
        },
        { time: "~14:05", title: "Jacobite return departure from Mallaig" },
      ],
      sections: [
        {
          title: "Morning",
          items: [
            { time: "~08:30", text: "Early breakfast and short walk to the station." },
            {
              time: "~10:15",
              text: "Board the Jacobite for Mallaig.",
              fixed: true,
              note: "The route crosses the Glenfinnan Viaduct.",
            },
          ],
        },
        {
          title: "Afternoon",
          items: [
            { time: "~12:20", text: "Arrive in Mallaig." },
            {
              time: "~12:30",
              text: "Lunch by the harbour and a short waterfront walk.",
            },
            { time: "~14:00", text: "Coffee or a short look around before returning." },
            {
              time: "~14:05",
              text: "Take the Jacobite back to Fort William.",
              fixed: true,
            },
            { time: "~16:00", text: "Arrive back in Fort William." },
          ],
        },
        {
          title: "Evening",
          items: [
            { time: "~19:00", text: "Dinner near the accommodation and a relaxed evening." },
          ],
        },
      ],
    },
    {
      slug: "day-09",
      dayNumber: 9,
      date: "2026-06-05",
      title: "Glencoe",
      summary:
        "A booked bus day into one of the strongest Highland landscapes, with massacre history, the Greenway, Loch Achtriochtan, and a pub lunch at Clachaig.",
      overview:
        "Glencoe carries both scenery and historical charge, and the day is at its best when it gives both some room. Starting at the visitor centre provides the massacre context, then the movement through the glen turns the place from image into scale. It is also useful that the route is not just roadside stopping: the Greenway and quieter old-road sections make it feel properly entered rather than merely observed from a bus window.",
      tags: ["glencoe", "history", "booked bus"],
      transport: [
        { label: "Citylink bus", duration: "Fort William to Glencoe return" },
      ],
      highlightImage: {
        src: "/trips/2026-scotland/highlights/day09.jpg",
        alt: "Glencoe highlight for day 9",
      },
      fixedItems: [
        {
          time: "09:10",
          title: "Citylink 915 from Fort William",
          note: "Booked to the Glencoe Visitor Centre stop.",
        },
        {
          time: "16:35",
          title: "Citylink 915 back to Fort William",
          note: "Booked from Glencoe outside Hotel.",
        },
      ],
      notes: [
        "Book the Citylink bus well in advance for five people.",
        "Glenfinnan appears once by train on Day 8 and again on foot-related landscape days; that repetition is intentional in the source plan.",
      ],
      sections: [
        {
          title: "Morning",
          items: [
            { time: "~09:00", text: "Breakfast." },
            {
              time: "09:10",
              text: "Take the booked Citylink bus from Fort William.",
              fixed: true,
            },
            {
              time: "~09:40",
              text: "Start at the visitor centre and take in the massacre context before heading into the landscape.",
            },
            {
              time: "~10:45",
              text: "Walk the Greenway eastward from the visitor centre.",
            },
            {
              time: "~11:15",
              text: "Spend time around Loch Achtriochtan for the core Glencoe view.",
            },
          ],
        },
        {
          title: "Afternoon",
          items: [
            { time: "~12:15", text: "Lunch at Clachaig Inn." },
            {
              time: "~13:30",
              text: "Continue west via the quieter old road toward Glencoe village.",
            },
            {
              time: "~14:30",
              text: "Short look around the village, with the Massacre Monument as an optional extra.",
            },
            {
              time: "16:35",
              text: "Take the booked Citylink back to Fort William.",
              fixed: true,
            },
            { time: "~17:05", text: "Arrive back and rest." },
          ],
        },
        {
          title: "Evening",
          items: [
            {
              time: "~19:00",
              text: "Dinner and a final relaxed Highlands evening before moving on tomorrow.",
            },
          ],
        },
      ],
    },
    {
      slug: "day-10",
      dayNumber: 10,
      date: "2026-06-06",
      title: "Fort William to Loch Ness to Inverness",
      summary:
        "A Great Glen transfer with one meaningful stop at Urquhart Castle instead of trying to scatter Loch Ness into several smaller fragments.",
      overview:
        "This day is a good example of the route working because of one clear intermediate stop. Urquhart Castle is the Loch Ness moment that earns its place: direct loch frontage, strong views, and a clean handover from Fort William to Inverness. It still needs timetable discipline, because the castle entry slot only makes sense once the Citylink timing is confirmed.",
      tags: ["transfer", "Loch Ness", "booked entry needed"],
      transport: [
        { label: "Citylink 919", duration: "Fort William-Urquhart Castle-Inverness" },
      ],
      highlightImage: {
        src: "/trips/2026-scotland/highlights/day10.jpg",
        alt: "Loch Ness and Urquhart Castle highlight for day 10",
      },
      notes: [
        "Urquhart Castle entry needs advance booking once the northbound bus timetable is confirmed.",
      ],
      fixedItems: [
        {
          time: "~09:35",
          title: "Citylink 919 northbound",
          note: "Confirm exact 2026 time and align the castle entry slot.",
        },
      ],
      sections: [
        {
          title: "Morning",
          items: [
            { time: "~09:00", text: "Breakfast and check out." },
            {
              time: "~09:35",
              text: "Take the Citylink 919 north from Fort William.",
              fixed: true,
            },
            {
              time: "~11:01",
              text: "Get off at the Urquhart Castle stop right by the entrance.",
            },
            {
              time: "~11:15",
              text: "Visit Urquhart Castle and focus on the lochfront setting and Grant Tower views.",
              duration: "Approx. 2 hours",
            },
          ],
        },
        {
          title: "Afternoon",
          items: [
            {
              time: "~13:15",
              text: "Take the next Citylink north to Inverness.",
              fixed: true,
            },
            { time: "~14:00", text: "Check in and take a gentle walk along the River Ness." },
          ],
        },
        {
          title: "Evening",
          items: [{ time: "~19:00", text: "Dinner in Inverness." }],
        },
      ],
    },
    {
      slug: "day-11",
      dayNumber: 11,
      date: "2026-06-07",
      title: "Culloden, Clava Cairns, and Aviemore",
      summary:
        "Battlefield, prehistoric stonework, then a short evening rail shift into the Cairngorms.",
      overview:
        "This is a day of historical layering more than visual spectacle. Culloden asks for attention rather than speed, while Clava Cairns gives the schedule a much older, quieter register before the route turns south into Aviemore. That combination works well because none of it needs to be rushed, but it still meaningfully changes the trip's mood before the final forest-and-loch day.",
      tags: ["history", "prehistoric site", "cairngorms"],
      transport: [
        { label: "Bus", duration: "Inverness to Culloden return" },
        { label: "Taxi", duration: "Culloden to Clava Cairns approx. 5 minutes" },
        { label: "Train", duration: "Inverness to Aviemore approx. 35 minutes" },
      ],
      highlightImage: {
        src: "/trips/2026-scotland/highlights/day11.jpg",
        alt: "Culloden and Clava Cairns highlight for day 11",
      },
      sections: [
        {
          title: "Morning",
          items: [
            { time: "~09:00", text: "Breakfast." },
            {
              time: "~09:30",
              text: "Take the Stagecoach route 5 bus from Inverness to Culloden.",
            },
            {
              time: "~10:00",
              text: "Visit Culloden Battlefield and the visitor centre at an unhurried pace.",
            },
          ],
        },
        {
          title: "Afternoon",
          items: [
            {
              time: "~12:00",
              text: "Short taxi to Clava Cairns.",
              duration: "Approx. 5 minutes",
            },
            {
              time: "~12:15",
              text: "Spend time at Clava Cairns and the surrounding stone circles.",
            },
            { time: "~13:30", text: "Return by bus to Inverness." },
            { time: "~14:00", text: "Late lunch, coffee, and a short rest." },
            {
              time: "~17:00",
              text: "Train from Inverness to Aviemore.",
              duration: "Approx. 35 minutes",
            },
            { time: "~17:40", text: "Arrive in Aviemore, check in, and keep the evening relaxed." },
          ],
        },
      ],
    },
    {
      slug: "day-12",
      dayNumber: 12,
      date: "2026-06-08",
      title: "Cairngorms morning and return to Edinburgh",
      summary:
        "A quieter final full day for loch walking or easy cycling around Aviemore before the evening train back south.",
      overview:
        "The final full day is valuable precisely because it stops competing with the itinerary's larger set-pieces. Loch an Eilein and Rothiemurchus give the route one calmer, woodland register before the jump back to Edinburgh. The only thing that really matters beyond that is not missing the 16:27 train, because the next morning's flight turns this into a tight turnaround by design.",
      tags: ["forest", "loch", "return south"],
      transport: [
        { label: "Walking or cycling", duration: "Flexible daytime pacing" },
        { label: "Train", duration: "Aviemore to Edinburgh approx. 2.5-3 hours" },
      ],
      highlightImage: {
        src: "/trips/2026-scotland/highlights/day12.jpg",
        alt: "Loch an Eilein and Cairngorms highlight for day 12",
      },
      fixedItems: [
        {
          time: "16:27",
          title: "Train from Aviemore to Edinburgh",
          note: "Book in advance and treat it as non-negotiable.",
        },
      ],
      notes: [
        "The Edinburgh arrival on 8 June 2026 runs straight into a 09:00 departure on 9 June 2026.",
      ],
      options: [
        "Swap the bike plan for more walking or simple rest if the group wants a calmer final day.",
      ],
      sections: [
        {
          title: "Morning",
          items: [
            { time: "~09:00", text: "Easy breakfast start." },
            {
              time: "~10:00",
              text: "Walk around Loch an Eilein at a relaxed pace.",
            },
          ],
        },
        {
          title: "Afternoon",
          items: [
            { time: "~12:30", text: "Lunch around Aviemore or Rothiemurchus." },
            {
              time: "~14:00",
              text: "Optional bike ride in Rothiemurchus Forest, or keep walking, or simply rest.",
            },
            {
              time: "~14:30",
              text: "Head back, pack, and leave enough buffer to reach the station from the forest area.",
            },
            {
              time: "16:27",
              text: "Board the train from Aviemore to Edinburgh.",
              fixed: true,
            },
            { time: "19:43", text: "Arrive in Edinburgh and check in for the final short night." },
          ],
        },
      ],
    },
    {
      slug: "day-13",
      dayNumber: 13,
      date: "2026-06-09",
      title: "Departure",
      summary:
        "A short final morning built entirely around getting to Edinburgh Airport without friction.",
      overview:
        "There is no need to romanticise the final day. It is an airport morning, and the right version is simply the smooth one: wake up early, leave with margin, and let the trip end cleanly.",
      tags: ["departure", "airport", "early start"],
      transport: [{ label: "Airport transfer", duration: "Approx. 30-40 minutes" }],
      highlightImage: {
        src: "/trips/2026-scotland/highlights/day13.jpg",
        alt: "Departure morning highlight for day 13",
      },
      fixedItems: [
        { time: "~07:00", title: "Be at Edinburgh Airport" },
        { time: "09:00", title: "Flight departs Edinburgh" },
      ],
      sections: [
        {
          title: "Early start",
          items: [
            { time: "~06:00", text: "Wake up and finish packing." },
            {
              time: "~06:20",
              text: "Transfer to the airport by tram or taxi.",
              fixed: true,
            },
            {
              time: "~07:00",
              text: "Arrive at Edinburgh Airport for check-in and security.",
              fixed: true,
            },
            { time: "09:00", text: "Flight home.", fixed: true },
          ],
        },
      ],
    },
  ],
};
