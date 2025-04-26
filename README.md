# Miro idze do šveta 🌍

A lighthearted web app to organize and display road trip itineraries, including:
- Dynamic day-by-day plans
- Weather forecast integration
- Interactive maps (Leaflet.js)
- Smooth mobile-friendly design

Built mostly for fun, learning, and trip planning.

---

## ✨ Tech Stack
- Next.js 14 (React 18)
- Tailwind CSS
- Framer Motion (animations)
- Leaflet + React-Leaflet (maps)
- Supabase (database)
- OpenWeatherMap API (forecasts)

---

## 🚀 Local Development

1. Clone the repo
2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the local dev server:

    ```bash
    npm run dev
    ```

4. Requires a Supabase backend + OpenWeatherMap API key (or use mock data).

---

## 🌐 Production Hosting

- Hosted on Vercel
- Supabase used as managed PostgreSQL + REST API

Environment variables required:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- (optional) `NEXT_PUBLIC_OPENWEATHER_API_KEY` (if not hardcoded)

---

## 🛠 Known Limitations

- Only forecast for 5 upcoming days available (OpenWeatherMap free tier)
- Basic error handling
- UI is intentionally simple and minimalistic

---

## 💬 Notes

This project is "vibe-coded" — built mostly by exploring, tinkering, and pasting code from ChatGPT sessions.

A perfect reminder that exploration builds real-world skill! 🚀