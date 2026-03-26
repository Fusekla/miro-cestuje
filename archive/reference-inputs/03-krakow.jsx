import { useState } from "react";

const days = [
  {
    id: 1,
    date: "Saturday, 28 March 2026",
    label: "Day 1",
    title: "Home → Olomouc → Kraków",
    color: "#8B7355",
    blocks: [
      {
        time: "Morning",
        booked: false,
        items: [
          "Departure from home before lunch",
          "Drive to Olomouc (approx. 1.5 h)",
        ],
      },
      {
        time: "Midday — Olomouc stop (2–3 h)",
        booked: false,
        items: [
          "Lunch around Horní náměstí",
          "Horní náměstí & Lower Square",
          "Holy Trinity Column (UNESCO)",
          "Astronomical Clock",
          "Arcaded streets in historic centre",
          "Coffee break",
        ],
      },
      {
        time: "Afternoon",
        booked: false,
        items: ["Drive Olomouc → Kraków (approx. 3 h)"],
      },
      {
        time: "Evening",
        booked: false,
        items: [
          "Arrival in Kraków ~17:00–18:00",
          "Apartment check-in",
          "Light dinner near accommodation",
          "Easy walk or rest",
        ],
      },
    ],
    food: [],
    notes: [],
  },
  {
    id: 2,
    date: "Sunday, 29 March 2026",
    label: "Day 2",
    title: "Old Town Free Walking Tour + Light City Time",
    color: "#5C7A5C",
    blocks: [
      {
        time: "Morning",
        booked: true,
        items: [
          "10:00–12:30 Old Town Free Walking Tour (English)",
          "Main Market Square (Rynek Główny)",
          "Cloth Hall (Sukiennice)",
          "St. Mary's Basilica (exterior context)",
          "Collegium Maius area",
          "Old Town streets and history overview",
        ],
      },
      {
        time: "Afternoon",
        booked: false,
        items: [
          "Lunch near Old Town",
          "Wawel Castle grounds & Cathedral exterior",
          "Vistula river walk",
          "Coffee / rest",
        ],
      },
      {
        time: "Evening",
        booked: false,
        items: ["Dinner at leisure"],
      },
    ],
    food: [
      { name: "Morskie Oko", note: "Classic Polish cuisine, reliable. Good after the walking tour." },
      { name: "Szara Gęś", note: "Modern Polish, slightly upscale. Reservation recommended." },
      { name: "Milkbar Tomasza", note: "Authentic Polish milk bar — fast, cheap, local." },
      { name: "Café Camelot", note: "Cozy café with cakes, classic Kraków atmosphere." },
      { name: "Massolit Books & Café", note: "Bookstore café, quiet and relaxed." },
      { name: "— Near accommodation —", note: "" },
      { name: "Toscanizzazione ArtBistro", note: "Italian bistro on Przybyszewskiego, ~5 min walk. Highly rated — great pasta, warm atmosphere. Good dinner option when you don't want to go back into the centre." },
      { name: "dolc&salato", note: "Sicilian pizza near Machaya St, ~10 min walk. Closed Mondays. Casual and authentic." },
      { name: "Alibi", note: "Small Polish restaurant on Armii Krajowej, ~15 min walk. One person operation, traditional food, relaxed pace. Closed Mondays." },
      { name: "Hanguk Bistro", note: "Korean on Lea 189 — practically next door to the apartment. 4.9★, generous portions. Good backup for a low-effort evening." },
    ],
    notes: [],
  },
  {
    id: 3,
    date: "Monday, 30 March 2026",
    label: "Day 3",
    title: "Wieliczka Salt Mine + Light Evening",
    color: "#6B7FA3",
    blocks: [
      {
        time: "Morning",
        booked: true,
        items: [
          "Drive to Wieliczka",
          "09:00 Guided visit — Wieliczka Salt Mine",
        ],
      },
      {
        time: "Afternoon",
        booked: false,
        items: ["Return to Kraków", "Lunch", "Rest / free time"],
      },
      {
        time: "Evening",
        booked: false,
        items: ["Optional short walk or dinner near accommodation"],
      },
    ],
    food: [],
    notes: ["Salt Mine visit fixed at 09:00 — plan early departure from accommodation."],
  },
  {
    id: 4,
    date: "Tuesday, 31 March 2026",
    label: "Day 4",
    title: "Jewish Kraków Walking Tour + Schindler's Factory",
    color: "#8B6B7A",
    blocks: [
      {
        time: "Morning",
        booked: true,
        items: [
          "10:30–13:00 Jewish Kraków Free Walking Tour (English)",
          "Kazimierz district",
          "Jewish history and synagogues (exterior context)",
          "Cultural and historical background",
        ],
      },
      {
        time: "Afternoon",
        booked: false,
        items: [
          "Lunch in Kazimierz",
          "Free time / rest",
          "16:00 Schindler's Factory Museum — guided tour (English) [BOOKED]",
        ],
      },
      {
        time: "Evening",
        booked: false,
        items: ["Dinner in Kazimierz"],
      },
    ],
    food: [
      { name: "Hamsa", note: "Middle Eastern / Israeli-inspired. Great for lunch after the Jewish tour." },
      { name: "Ariel", note: "Traditional Jewish-style cuisine, large portions." },
      { name: "Zazie Bistro", note: "French bistro, intimate. Reservation recommended." },
      { name: "Emalia", note: "Polish classics near Schindler's Factory, calm and reliable." },
      { name: "Starka", note: "Polish-Jewish influenced, atmospheric, not touristy. One of the better dinner options in Kazimierz — good for the evening after Schindler's." },
      { name: "Alchemia", note: "Atmospheric evening spot in Kazimierz — good for a coffee or non-alcoholic drink." },
    ],
    notes: ["Schindler's Factory at 16:00 is booked. Allow ~30 min travel from Kazimierz centre."],
  },
  {
    id: 5,
    date: "Wednesday, 1 April 2026",
    label: "Day 5",
    title: "Auschwitz-Birkenau + Drive to Slovakia",
    color: "#5C5C5C",
    blocks: [
      {
        time: "Morning",
        booked: true,
        items: [
          "Early checkout from Kraków",
          "Drive to Auschwitz (~1.5 h)",
          "08:30 Guided group visit (English)",
          "Auschwitz I and Birkenau (approx. 3 h 45 min)",
        ],
      },
      {
        time: "Midday",
        booked: false,
        items: ["Quiet lunch nearby after visit"],
      },
      {
        time: "Afternoon",
        booked: false,
        items: ["Drive home"],
      },
    ],
    food: [],
    notes: ["08:30 visit is fixed — early checkout required. Pack bags the night before."],
  },
];

export default function KrakowItinerary() {
  const [activeDay, setActiveDay] = useState(1);
  const [showFood, setShowFood] = useState(false);
  const day = days.find((d) => d.id === activeDay);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#F5F0E8",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#2C2416",
    }}>
      {/* Header */}
      <div style={{
        background: "#2C2416",
        color: "#F5F0E8",
        padding: "2rem 2rem 1.5rem",
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.5, marginBottom: "0.4rem" }}>
            Trip Itinerary
          </div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: "normal", margin: 0, letterSpacing: "0.03em" }}>
            Kraków
          </h1>
          <div style={{ fontSize: "0.83rem", opacity: 0.6, marginTop: "0.35rem" }}>
            28 March – 1 April 2026 &nbsp;·&nbsp; Cultural &nbsp;·&nbsp; 2 people
          </div>
        </div>
      </div>

      {/* Day tabs */}
      <div style={{
        background: "#EDE8DC",
        borderBottom: "1px solid #D4C8B0",
        overflowX: "auto",
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex" }}>
          {days.map((d) => (
            <button
              key={d.id}
              onClick={() => { setActiveDay(d.id); setShowFood(false); }}
              style={{
                padding: "0.85rem 1.1rem",
                background: activeDay === d.id ? "#2C2416" : "transparent",
                color: activeDay === d.id ? "#F5F0E8" : "#6B5A3E",
                border: "none",
                borderRight: "1px solid #D4C8B0",
                cursor: "pointer",
                fontFamily: "inherit",
                fontSize: "0.75rem",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
                transition: "background 0.15s, color 0.15s",
              }}
            >
              <div style={{ fontWeight: "bold" }}>{d.label}</div>
              <div style={{ opacity: 0.7, fontSize: "0.68rem", marginTop: "0.1rem" }}>
                {d.date.split(" ").slice(1, 3).join(" ")}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1.5rem" }}>
        {/* Day title */}
        <div style={{ marginBottom: "1.8rem" }}>
          <div style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.55, marginBottom: "0.5rem" }}>
            {day.date}
          </div>
          <div style={{ display: "flex", alignItems: "stretch", gap: "0.7rem" }}>
            <div style={{ width: 3, background: day.color, borderRadius: 2, flexShrink: 0 }} />
            <h2 style={{ fontSize: "1.35rem", fontWeight: "normal", margin: 0, lineHeight: 1.3 }}>
              {day.title}
            </h2>
          </div>
        </div>

        {/* Warnings */}
        {day.notes.length > 0 && (
          <div style={{
            background: "#FFFBF0",
            border: "1px solid #E8D090",
            borderLeft: `3px solid #C8A000`,
            borderRadius: 3,
            padding: "0.75rem 1rem",
            marginBottom: "1.5rem",
            fontSize: "0.81rem",
            color: "#6B4E00",
            lineHeight: 1.6,
          }}>
            {day.notes.map((n, i) => <div key={i}>⚑ {n}</div>)}
          </div>
        )}

        {/* Time blocks */}
        {day.blocks.map((block, i) => (
          <div key={i} style={{ marginBottom: "1.6rem" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "0.55rem",
            }}>
              <span style={{
                fontSize: "0.65rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: block.booked ? day.color : "#9B8370",
                fontWeight: block.booked ? "bold" : "normal",
              }}>
                {block.time}
              </span>
              {block.booked && (
                <span style={{
                  background: day.color,
                  color: "white",
                  fontSize: "0.58rem",
                  padding: "0.1rem 0.45rem",
                  borderRadius: 2,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                }}>booked</span>
              )}
            </div>
            <ul style={{ margin: 0, paddingLeft: "1.25rem", lineHeight: 1.8 }}>
              {block.items.map((item, j) => (
                <li key={j} style={{
                  fontSize: "0.875rem",
                  color: item.includes("[BOOKED]") ? day.color : "#2C2416",
                  fontWeight: item.includes("[BOOKED]") ? "bold" : "normal",
                }}>
                  {item.replace(" [BOOKED]", "")}
                  {item.includes("[BOOKED]") && (
                    <span style={{
                      marginLeft: "0.4rem",
                      background: day.color,
                      color: "white",
                      fontSize: "0.58rem",
                      padding: "0.1rem 0.35rem",
                      borderRadius: 2,
                      verticalAlign: "middle",
                      letterSpacing: "0.06em",
                    }}>booked</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Food toggle */}
        {day.food.length > 0 && (
          <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid #D4C8B0" }}>
            <button
              onClick={() => setShowFood(!showFood)}
              style={{
                background: "none",
                border: "1px solid #C8BAA0",
                borderRadius: 3,
                padding: "0.5rem 0.9rem",
                cursor: "pointer",
                fontFamily: "inherit",
                fontSize: "0.76rem",
                color: "#6B5A3E",
                letterSpacing: "0.06em",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ fontSize: "0.65rem" }}>{showFood ? "▲" : "▼"}</span>
              Food & café suggestions for this day
            </button>
            {showFood && (
              <div style={{ marginTop: "1rem" }}>
                {day.food.map((f, i) => (
                  <div key={i} style={{
                    padding: "0.65rem 0",
                    borderBottom: i < day.food.length - 1 ? "1px solid #E8E0D0" : "none",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "baseline",
                  }}>
                    <div style={{ fontWeight: "bold", fontSize: "0.83rem", minWidth: 140, color: "#2C2416", flexShrink: 0 }}>
                      {f.name}
                    </div>
                    <div style={{ fontSize: "0.81rem", color: "#6B5A3E", lineHeight: 1.55 }}>
                      {f.note}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "0 1.5rem 3rem",
        fontSize: "0.7rem",
        color: "#9B8B70",
        display: "flex",
        gap: "1.5rem",
        flexWrap: "wrap",
        borderTop: "1px solid #D4C8B0",
        paddingTop: "1rem",
        marginTop: "1rem",
      }}>
        <span>🚗 Car: Wieliczka (Day 3), Auschwitz (Day 5)</span>
        <span>🚶 Walking + tram: Days 2 & 4</span>
        <span style={{ color: day?.color }}>■ Booked = fixed, cannot reschedule</span>
      </div>
    </div>
  );
}
