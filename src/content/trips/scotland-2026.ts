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
    "Scotland the slow way and the wild way, at once. From Edinburgh we ride the West Highland Line to the west coast, sail out to Staffa for puffins and Fingal's Cave, cross to Iona's white beaches, board the Jacobite steam train over Glenfinnan Viaduct, walk into Glencoe, stand above Loch Ness at Urquhart Castle, and finish among the ancient pines of the Cairngorms.",
    "Thirteen days, five travellers, zero rental cars — a route built entirely from rails, ferries, and Highland buses, with the big-ticket Scotland everyone imagines and the quieter corners most itineraries miss.",
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
  ],
  days: [
    {
      slug: "day-01",
      dayNumber: 1,
      date: "2026-05-28",
      title: "Arrival in Edinburgh",
      summary:
        "A soft landing into Edinburgh through Stockbridge, the hidden gorge of the Water of Leith, and the old mill-buildings of Dean Village.",
      overview:
        "The first day isn't the day for Edinburgh's headline postcard. After the flight, a bus or tram into town and a first coffee somewhere in Stockbridge is the right register — a neighbourhood that used to be a fishing village on the Water of Leith and still has the feel of one, with independent shops, Georgian tenements and an unpretentious local rhythm rather than the Royal Mile's crowds. From there we drop down to the river itself, which cuts a wooded gorge through the middle of the city at a level most visitors never see, and follow it a short way to Dean Village — a cluster of old mill buildings tucked under Thomas Telford's Dean Bridge that is quietly one of Edinburgh's most photographed corners. Lunch, a slow afternoon in Princes Street Gardens with the castle looming above us, the Scottish National Gallery as a free and comfortable weather fallback if the rain sets in, and then an early dinner and an earlier night. The city proper can wait until morning.",
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
            { text: "Tram or bus into the city centre." },
            {
              text: "Coffee and a light breakfast in Stockbridge, with luggage drop if possible.",
            },
            { text: "Walk along the Water of Leith and through Dean Village." },
          ],
        },
        {
          title: "Afternoon",
          items: [
            { text: "Light lunch in Stockbridge." },
            {
              text: "Rest in Princes Street Gardens, or use the Scottish National Gallery as a weather fallback.",
            },
            { text: "Check in and rest." },
          ],
        },
        {
          title: "Evening",
          items: [
            {
              text: "Dinner in Stockbridge or New Town, and an early night.",
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
        "The ceremonial Edinburgh day: the Royal Mile under a booked walking tour, then one strong afternoon choice — a volcanic ridge walk, a national museum, or the castle itself.",
      overview:
        "Today is Edinburgh's ceremonial day, and it works best when the morning gives it some structure. At ten we join the Old Town History walking tour from halfway down the Royal Mile, and over the next couple of hours the Old Town's layers start to untangle themselves: St Giles' Cathedral and the medieval spine of the High Street, Grassmarket below the castle rock where livestock markets and public executions used to share the same square, and Greyfriars Kirkyard with its crooked seventeenth-century headstones and the grave of the loyal terrier Bobby tucked near the gate. By lunch the shape of historic Edinburgh should feel legible rather than overwhelming. The afternoon then gets one strong focus rather than a grab-bag of smaller stops — Salisbury Crags and the old volcanic ridge above Holyrood for the broadest view of the city, the National Museum of Scotland for the depth and breadth of Scottish material culture, or Edinburgh Castle itself if the group genuinely wants to climb up to the rock. We keep the evening unforced: dinner in the Old Town, New Town, or Leith, and an easy walk through streets that look best in the long northern dusk.",
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
            { text: "Breakfast near the accommodation." },
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
            { text: "Lunch around Grassmarket or Victoria Street after the tour." },
            {
              text: "Spend the afternoon on one stronger focus rather than a grab-bag of smaller stops.",
            },
            { text: "Coffee or a short rest in the city centre." },
          ],
        },
        {
          title: "Evening",
          items: [
            {
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
        "A transfer day with enough Glasgow in the middle to feel like part of the trip, then the slow pull west on the West Highland Line to the harbour town of Oban.",
      overview:
        "Today is a movement day, but the movement is the point. A short morning train from Edinburgh Waverley drops us at Glasgow Queen Street with just enough time for lunch and a proper urban interlude before the real journey begins. We walk up to Glasgow Cathedral — twelfth century, the only mainland Scottish cathedral to have come through the Reformation more or less intact — and then step across to the Necropolis, a Victorian hilltop cemetery crowded with ornate tombs and broad views back over the city. It is a surprisingly theatrical piece of Glasgow and a good counterweight to the afternoon that follows. At half past four we board the West Highland Line service to Oban: one of the great scenic railways of Britain. The route runs along the western shore of Loch Lomond, splits at Crianlarich, and then turns west through Strath Fillan and down the long Pass of Brander beside Loch Awe — with the ruin of Kilchurn Castle at the head of the loch — before passing Taynuilt, crossing the Connel tidal bridge, and rolling into Oban as the light starts to go. By dinnertime we are in a working west-coast harbour town with ferries to the islands stacked up in the distance, and the day feels earned.",
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
            { text: "Breakfast and check out." },
            {
              text: "Train from Edinburgh Waverley to Glasgow Queen Street.",
              duration: "Approx. 1 hour",
            },
            { text: "Drop bags at left luggage if available." },
          ],
        },
        {
          title: "Afternoon",
          items: [
            { text: "Lunch near Queen Street." },
            {
              text: "Walk up to Glasgow Cathedral and continue to the Necropolis for views back across the city.",
            },
            { text: "Coffee and head back toward Queen Street." },
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
            { text: "Arrive at Oban station and walk the short way to the accommodation." },
            { text: "Dinner around the harbour and a relaxed evening." },
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
        "An easier orientation day for Oban: harbour walks, a coastal path to a ruined MacDougall stronghold, the Colosseum-shaped folly above the bay, and a booked distillery tour.",
      overview:
        "After the long rail move west, Oban gets to be a place rather than just a base. The morning is for the harbour and waterfront: a walk along the crescent of Oban Bay with the ferries coming and going to Mull, Colonsay and the outer isles, and then a gentler coastal path north to Dunollie Castle, a thirteenth-century MacDougall stronghold now falling quietly to ivy and sea wind on its headland above the bay. Lunch back in town — Oban calls itself the seafood capital of Scotland and makes a reasonable case for it — and then we climb up behind the harbour to McCaig's Tower, the Colosseum-inspired folly that a local banker built on the hill in 1897 as both a family monument and a make-work scheme for unemployed stonemasons through a hard winter. The circular walls frame a postcard view back across the bay, and on a clear afternoon you can see the low shapes of the islands strung out west. At half past four we drop down the hill again for the booked tour at Oban Distillery — one of the oldest working distilleries in Scotland, founded in 1794 right in the middle of what would become the town — and finish the day with dinner around the harbour as the light fades over the Sound of Kerrera.",
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
            { text: "Easy breakfast start." },
            { text: "Walk the harbour and waterfront." },
            { text: "Continue along the coastal path to Dunollie Castle." },
          ],
        },
        {
          title: "Afternoon",
          items: [
            { text: "Lunch in the town centre." },
            { text: "Climb to McCaig's Tower for the broad harbour view." },
            { text: "Coffee and rest before the tour." },
            {
              time: "16:30",
              text: "Oban Distillery tour.",
              fixed: true,
            },
            { text: "Browse the shop only if there is still interest." },
          ],
        },
        {
          title: "Evening",
          items: [{ text: "Dinner around the harbour." }],
        },
      ],
    },
    {
      slug: "day-05",
      dayNumber: 5,
      date: "2026-06-01",
      title: "Isle of Mull and Tobermory",
      summary:
        "A softer island day: the ferry to Mull, a slow harbour rhythm in Tobermory's painted front, and a walk in Aros Park before heading back to Oban.",
      overview:
        "Tobermory is the kind of day you want in the middle of a trip like this, because it doesn't ask anything heroic of you. The morning starts with breakfast and a short walk to the ferry terminal, where we board the CalMac service across to Craignure — about forty-five minutes of open water with Kerrera sliding past on the left and the Morvern coast off to the north. From Craignure a single-decker bus winds across the middle of Mull to Tobermory, which sits at the top of the island on a sheltered bay facing out toward Ardnamurchan. The town was founded as a planned fishing station in 1788, and its famous curve of painted seafront houses — blue, red, yellow, pink — is still the thing most people have in mind when they picture Mull. We spend the core of the day there at a slow pace: coffee and a browse around the harbour, lunch in one of the small cafés or fish bars, and then a gentle walk into Aros Park, the wooded headland just east of town with a short path to a waterfall and open views back across the Sound of Mull. Late afternoon we retrace our steps — bus across the island, ferry back to Oban — in time for a quiet dinner and an early night, because tomorrow is the big one.",
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
            { text: "Breakfast and walk to the ferry terminal." },
            {
              text: "CalMac ferry from Oban to Craignure.",
              duration: "Approx. 45 minutes",
            },
            {
              text: "Continue by bus across Mull to Tobermory.",
              duration: "Approx. 45 minutes",
            },
            { text: "Explore Tobermory harbour, shops, and cafés." },
          ],
        },
        {
          title: "Afternoon",
          items: [
            { text: "Light lunch in town." },
            {
              text: "Gentle walk in Aros Park for views back across the Sound of Mull.",
            },
            { text: "Return toward the bus stop for Craignure." },
            { text: "Bus back across Mull and ferry onward to Oban." },
          ],
        },
        {
          title: "Evening",
          items: [
            { text: "Arrive back in Oban and rest." },
            { text: "Dinner and a relaxed evening." },
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
        "The expedition day — an early ferry, a coach across Mull, a small boat to Lunga's puffin cliffs and Staffa's basalt cathedral, then the white beaches and abbey of Iona.",
      overview:
        "Today is the expedition day and also the one people remember. It starts before seven at Oban ferry terminal, because the day runs on a single well-oiled handover of ferries, coaches and small boats out to three islands and back. The first ferry crosses to Craignure; then a coach runs all the way across Mull to Fionnphort at the island's south-western tip; from there a small open boat takes us out into the Atlantic. Lunga, the largest of the Treshnish Isles, is first — in early June the puffins are nesting in burrows right at the edge of the cliff path, and at this time of year they stand at arm's length and entirely ignore you. From Lunga the boat runs a few miles south to Staffa, a tiny uninhabited island where cooling basalt set into vertical hexagonal columns on the same geological pattern as the Giant's Causeway in Ireland, and where a vast sea cave cut through the stone becomes Fingal's Cave — the space whose echoing walls inspired Mendelssohn's Hebrides overture and drew Turner, Queen Victoria and Keats before us. The last stop is Iona, a different register entirely: three miles long, white shell-sand beaches on the Atlantic side, and the old abbey St Columba founded from Ireland in 563, which has stood as the cradle of Christianity in Scotland ever since. We have time for the beaches, the village and the abbey grounds before the whole circuit runs in reverse — boat back to Fionnphort, coach across Mull, ferry to Oban — arriving back just after eight. A simple dinner, an early night, and a day that easily pays for itself.",
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
            {
              time: "08:25",
              text: "Coach across Mull to Fionnphort.",
              fixed: true,
            },
            { text: "Reach Fionnphort and board the small boat." },
          ],
        },
        {
          title: "Island circuit",
          items: [
            { text: "Lunga for puffins and coastal walking." },
            { text: "Staffa for Fingal's Cave and the basalt columns." },
            {
              text: "Iona for the white beaches, the village, and the abbey grounds.",
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
              text: "Arrive back in Oban. Keep dinner simple and end the day early.",
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
        "A short transfer day up the west coast to Fort William — the Connel Bridge, the shore of Loch Linnhe, and an easy afternoon at Telford's Neptune's Staircase below Ben Nevis.",
      overview:
        "After yesterday's long circuit, today is meant to be easier. One direct bus runs north from Oban along the A828 — over the Connel Bridge with the tidal race of the Falls of Lora below, up the shore of Loch Creran, through Appin, past Castle Stalker standing on its small offshore rock, and along the length of Loch Linnhe into Fort William. The town sits at the head of the loch with Ben Nevis immediately behind it, and its useful role on this trip is as a base rather than a set-piece: somewhere to unpack, stretch the legs, and regather for the two bigger days that follow. The afternoon can stay modest. A gentle walk west out to Corpach and Neptune's Staircase — Thomas Telford's flight of eight locks on the Caledonian Canal, the longest staircase lock in Britain, climbing under the shoulder of Ben Nevis — is the right kind of stretch: water, iron, wet stone, and a view straight up the glen toward Loch Lochy. Back in town for coffee, then dinner near the accommodation and an early night. The steam train leaves tomorrow morning.",
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
            { text: "Easy breakfast and one final harbour walk." },
            {
              text: "Direct Citylink bus from Oban to Fort William.",
              duration: "Approx. 2 hours",
            },
          ],
        },
        {
          title: "Afternoon",
          items: [
            { text: "Arrive, check in, or drop luggage." },
            { text: "Lunch in Fort William." },
            {
              text: "Gentle walk west to Corpach and Neptune's Staircase, or along Loch Linnhe.",
            },
            { text: "Rest at the accommodation." },
          ],
        },
        {
          title: "Evening",
          items: [
            { text: "Dinner near the accommodation and an early night." },
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
        "The Jacobite day — real steam, lochside track, and the long curve of Glenfinnan Viaduct, twice in one ride.",
      overview:
        "Today is the Jacobite day, the one that most looks the part of a Scottish travel poster and largely earns it. We board at Fort William station just before the mid-morning departure: a heritage steam locomotive, maroon carriages, a short platform hiss, and then the train pulling west along Loch Eil with Ben Nevis somewhere behind us. The first hour is the one everyone comes for. The line climbs gently through Lochaber and curves around the head of Loch Shiel to cross the Glenfinnan Viaduct — twenty-one concrete arches, thirty metres up, the whole train leaning into the bend so that from the window you can watch the locomotive and the front carriages swinging round ahead of you. Below the viaduct stands the tall stone monument to the 1745 rising, where Bonnie Prince Charlie first raised his standard; steam and Jacobite history in one frame, and the train's name stops feeling like a marketing choice. From there the track threads through Arisaig — the westernmost railway station in Britain — with flashes of white shell-sand and, on a clear day, the low shapes of Rum and Eigg out across the sound. The line finishes at Mallaig, a working fishing harbour where the morning's catch is mostly langoustine and the CalMac ferries come and go to Skye. We eat something simple by the quay, stretch our legs for an hour, and then take the same train back — the afternoon light sits differently on the lochs, and the second pass over Glenfinnan reads differently again.",
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
          time: "10:15",
          title: "Jacobite departure from Fort William",
          note: "Book outbound and return separately.",
        },
        { time: "14:05", title: "Jacobite return departure from Mallaig" },
      ],
      sections: [
        {
          title: "Morning",
          items: [
            { text: "Early breakfast and a short walk to Fort William station." },
            {
              time: "10:15",
              text: "Board the Jacobite bound for Mallaig.",
              fixed: true,
              note: "The route crosses the Glenfinnan Viaduct.",
            },
          ],
        },
        {
          title: "Afternoon",
          items: [
            {
              text: "Lunch by the harbour, a short walk along the quay, and a look around town before heading back to the station.",
            },
            {
              time: "14:05",
              text: "Take the Jacobite back to Fort William.",
              fixed: true,
            },
          ],
        },
        {
          title: "Evening",
          items: [
            { text: "Dinner near the accommodation and a relaxed evening." },
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
        "A day in Glencoe — the glen's massacre history at the visitor centre, a walk along the Greenway, the long view down to Loch Achtriochtan, and lunch at Clachaig Inn.",
      overview:
        "Glencoe is one of those places whose scenery and history are completely entangled. We take the Citylink bus west out of Fort William and drop off at the National Trust visitor centre, which is the right place to start because it lays out the massacre of 1692 with appropriate weight: on the night of 12 February, after twelve days of quartered hospitality, government troops turned on their MacDonald hosts and killed around thirty-eight of them at first light. It is a story Scotland has never quite finished processing, and Glencoe carries it still. From the visitor centre we walk east along the Greenway, the old military road that now runs as a quiet path through the glen parallel to the main road, with the Three Sisters of Bidean nam Bian rising on the south side and the long Aonach Eagach ridge on the north. Loch Achtriochtan sits at the head of the glen under the steepest part of the ridge, and is the classic Glencoe view — dark water, dark walls, nothing in a hurry. Lunch is at Clachaig Inn, the old walker's and climber's pub whose door once carried the sign 'No Hawkers or Campbells' and which is still, quietly, the right place for it. In the afternoon we continue west along the quieter old road toward Glencoe village, a short look around, perhaps the Massacre Monument if the mood holds, and then the bus back to Fort William before the evening settles in.",
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
            { text: "Breakfast." },
            {
              time: "09:10",
              text: "Citylink 915 from Fort William to the Glencoe Visitor Centre.",
              fixed: true,
            },
            {
              text: "Start at the visitor centre with the massacre context.",
            },
            { text: "Walk the Greenway eastward from the visitor centre." },
            { text: "Spend time around Loch Achtriochtan for the core Glencoe view." },
          ],
        },
        {
          title: "Afternoon",
          items: [
            { text: "Lunch at Clachaig Inn." },
            { text: "Continue west via the quieter old road toward Glencoe village." },
            {
              text: "Short look around the village, with the Massacre Monument as an optional extra.",
            },
            {
              time: "16:35",
              text: "Citylink 915 back to Fort William.",
              fixed: true,
            },
            { text: "Arrive back and rest." },
          ],
        },
        {
          title: "Evening",
          items: [
            {
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
        "Along the Great Glen from Fort William to Inverness, with a long pause at Urquhart Castle on its promontory over Loch Ness.",
      overview:
        "Today we travel the length of the Great Glen — the ruler-straight geological fault that cuts diagonally across the Highlands from the west coast to the Moray Firth, stringing four lochs together on the way. A morning Citylink bus runs the whole line, and we get off at Urquhart Castle, which is the one Loch Ness stop that genuinely earns its place on an itinerary. The castle sits on a low promontory jutting out into the loch roughly halfway along its length, and its thirteenth-century ruins — sieged, held and blown up repeatedly through the Jacobite risings — are arranged exactly the way you want a romantic Scottish ruin to be arranged: Grant Tower still mostly standing at the highest point, crumbled curtain walls facing across the water, and views straight down twenty-three miles of dark loch that holds more fresh water than all the lakes of England and Wales combined. We spend a proper couple of hours there, including the visitor centre and the walk out to the tower, and then take the next bus north to Inverness. Inverness itself is the Highland capital and an easy small city to arrive in: the River Ness runs through the middle of it, the red sandstone Victorian castle looks down from a bluff, and a gentle walk along the riverbank with a coffee is enough to mark the arrival. Dinner in town, and an easy evening.",
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
          time: "09:35",
          title: "Citylink 919 northbound",
          note: "Confirm exact 2026 time and align the castle entry slot.",
        },
      ],
      sections: [
        {
          title: "Morning",
          items: [
            { text: "Breakfast and check out." },
            {
              time: "09:35",
              text: "Citylink 919 north from Fort William.",
              fixed: true,
            },
            { text: "Get off at the Urquhart Castle stop right by the entrance." },
            {
              text: "Urquhart Castle — the visitor centre, the walk out to Grant Tower, and the lochfront setting.",
              duration: "Approx. 2 hours",
            },
          ],
        },
        {
          title: "Afternoon",
          items: [
            { text: "Next Citylink north to Inverness." },
            { text: "Check in and take a gentle walk along the River Ness." },
          ],
        },
        {
          title: "Evening",
          items: [{ text: "Dinner in Inverness." }],
        },
      ],
    },
    {
      slug: "day-11",
      dayNumber: 11,
      date: "2026-06-07",
      title: "Culloden, Clava Cairns, and Aviemore",
      summary:
        "A day of Scottish layers: the silent moor at Culloden, 4000-year-old Bronze Age cairns at Clava, and an evening train south into the pinewoods of the Cairngorms.",
      overview:
        "This is the trip's historical spine, and it works best when it isn't rushed. A short bus east from Inverness takes us to Culloden Battlefield, the flat and windswept moor where on 16 April 1746 the last pitched battle on British soil was fought and lost in about an hour. The Jacobite army of Charles Edward Stuart was broken there by government troops under the Duke of Cumberland — the rising ended, clan culture was systematically dismantled in the decades that followed, and Scotland's relationship with the Highlands has never been quite the same. Today the moor is kept in its 1746 state, the clan graves are marked only with low stones, and lines of flags still show where the armies stood. It is a place to walk slowly rather than to photograph. A short taxi ride later we are at Clava Cairns, which is almost the opposite thing: three four-thousand-year-old Bronze Age burial cairns, still surrounded by their rings of standing stones, aligned to the midwinter setting sun, and sitting quietly in a wooded field with almost no signage or fuss. Seeing Culloden and Clava in the same morning is the real texture of the day — one wound and one deep silence, a few miles apart. We return to Inverness for a late lunch and a short rest, and in the late afternoon a train lifts us south into Strathspey and drops us at Aviemore, gateway to the Cairngorms. Pinewoods, different air, and a quiet evening to close the day.",
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
            { text: "Breakfast." },
            { text: "Stagecoach route 5 bus from Inverness to Culloden." },
            {
              text: "Visit Culloden Battlefield and the visitor centre at an unhurried pace.",
            },
          ],
        },
        {
          title: "Afternoon",
          items: [
            {
              text: "Short taxi to Clava Cairns.",
              duration: "Approx. 5 minutes",
            },
            { text: "Spend time at Clava Cairns and the surrounding stone circles." },
            { text: "Return by bus to Inverness." },
            { text: "Late lunch, coffee, and a short rest." },
            {
              text: "Train from Inverness to Aviemore.",
              duration: "Approx. 35 minutes",
            },
            { text: "Arrive in Aviemore, check in, and keep the evening relaxed." },
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
        "A last, quieter Highland day: the old pinewoods and the island castle at Loch an Eilein, then the evening train south to Edinburgh.",
      overview:
        "The last full day of the trip is deliberately the quietest. Aviemore sits on the western edge of the Cairngorms, and a short walk or bike ride in the Rothiemurchus estate gets us into one of the last surviving fragments of the Great Caledonian Forest — the Scots pine woodland that once covered most of the Highlands and is now reduced to a few stubborn pockets. The main objective is Loch an Eilein, a small quiet loch ringed by old pines with a ruined fourteenth-century castle standing on its wooded islet a few metres from the shore. A gentle circular path runs the whole way around the water — about four miles — and the loop is the day's one deliberate walk: slow, piney, and rarely busy. Red squirrels, crested tits, and the occasional osprey high over the loch. Lunch around Aviemore or Rothiemurchus, an optional second walk or a bike ride through the forest if anyone still has energy, and then packing up and heading back to the station. The afternoon train south is the one fixed point of the day: it runs the Highland Main Line over the Drumochter Pass, down through Pitlochry and Perth and across the Forth into Edinburgh, arriving in the long northern evening. One last short night in the city, and then the airport at first light.",
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
            { text: "Easy breakfast start." },
            { text: "Walk around Loch an Eilein at a relaxed pace." },
          ],
        },
        {
          title: "Afternoon",
          items: [
            { text: "Lunch around Aviemore or Rothiemurchus." },
            {
              text: "Optional bike ride in Rothiemurchus Forest, more walking, or simple rest.",
            },
            { text: "Pack and leave enough buffer to reach the station." },
            {
              time: "16:27",
              text: "Train from Aviemore to Edinburgh.",
              fixed: true,
            },
            { text: "Arrive in Edinburgh and check in for the final short night." },
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
        "An airport morning — early wake-up, the tram to Edinburgh Airport, and the flight home.",
      overview:
        "The last morning is a transfer and nothing more. An early wake-up, the quickest possible breakfast or none at all, packed bags out the door before first light, the tram or a taxi to Edinburgh Airport, and through security with time to spare for a coffee on the other side. Flight home at nine, and the rest of the day is airports.",
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
            { text: "Wake up and finish packing." },
            { text: "Transfer to the airport by tram or taxi." },
            {
              time: "07:00",
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
