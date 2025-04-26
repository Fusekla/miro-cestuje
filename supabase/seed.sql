-- Create the trips schema
CREATE SCHEMA IF NOT EXISTS trips;

-- Table: trips
CREATE TABLE public.trips (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE,
    description TEXT
);

-- Table: itinerary_days
CREATE TABLE public.itinerary_days (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    trip_id UUID NOT NULL REFERENCES public.trips(id) ON DELETE CASCADE,
    day_number INTEGER NOT NULL,
    date DATE NOT NULL,
    location TEXT NOT NULL,
    highlights TEXT,
    drive_time TEXT,
    lat FLOAT,
    lng FLOAT
);

-- Table: activities
CREATE TABLE public.activities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    day_id UUID NOT NULL REFERENCES public.itinerary_days(id) ON DELETE CASCADE,
    time TEXT NOT NULL,
    description TEXT NOT NULL
);

-- Table: accommodations
CREATE TABLE public.accommodations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    day_id UUID NOT NULL REFERENCES public.itinerary_days(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    link TEXT,
    price TEXT
);

-- Insert trip (Slovenia 2025)
INSERT INTO public.trips (id, name, description) VALUES ('11111111-1111-1111-1111-111111111111', 'Slovenia 2025 Road Trip', 'A 9-day scenic journey through Slovenia, covering lakes, mountains, and coastal towns.');

-- Insert itinerary days
INSERT INTO public.itinerary_days (id, trip_id, day_number, date, location, highlights, drive_time, lat, lng) VALUES ('00000001-0000-0000-0000-000000000000', '11111111-1111-1111-1111-111111111111', 1, '2025-07-19', 'Bratislava → Maribor → Bled/Bohinj', 'Road trip start, exploring Maribor before reaching Bled.', '5.5 hours', 46.369, 14.114);
INSERT INTO public.itinerary_days (id, trip_id, day_number, date, location, highlights, drive_time, lat, lng) VALUES ('00000002-0000-0000-0000-000000000000', '11111111-1111-1111-1111-111111111111', 2, '2025-07-20', 'Lake Bled & Vintgar Gorge', 'Exploring Bled Lake, Castle, and the famous gorge.', '1 hour', 46.369, 14.114);
INSERT INTO public.itinerary_days (id, trip_id, day_number, date, location, highlights, drive_time, lat, lng) VALUES ('00000003-0000-0000-0000-000000000000', '11111111-1111-1111-1111-111111111111', 3, '2025-07-21', 'Triglav National Park & Lake Bohinj', 'Scenic mountain views and Slovenias largest lake.', '1–1.5 hours', 46.276, 13.836);
INSERT INTO public.itinerary_days (id, trip_id, day_number, date, location, highlights, drive_time, lat, lng) VALUES ('00000004-0000-0000-0000-000000000000', '11111111-1111-1111-1111-111111111111', 4, '2025-07-22', 'Bled → Vršič Pass → Bovec', 'Scenic drive through Vršič Pass and ziplining in Bovec.', '2.5–3 hours', 46.337, 13.555);
INSERT INTO public.itinerary_days (id, trip_id, day_number, date, location, highlights, drive_time, lat, lng) VALUES ('00000005-0000-0000-0000-000000000000', '11111111-1111-1111-1111-111111111111', 5, '2025-07-23', 'Soča Valley – Kayaking & Kobarid Museum', 'Outdoor adventures in the stunning Soča Valley.', '1 hour', 46.247, 13.579);
INSERT INTO public.itinerary_days (id, trip_id, day_number, date, location, highlights, drive_time, lat, lng) VALUES ('00000006-0000-0000-0000-000000000000', '11111111-1111-1111-1111-111111111111', 6, '2025-07-24', 'Full-Day Hike → Drive to the Coast', 'Hiking in Triglav National Park, then heading to the seaside.', '3.5–4 hours', 45.516, 13.568);
INSERT INTO public.itinerary_days (id, trip_id, day_number, date, location, highlights, drive_time, lat, lng) VALUES ('00000007-0000-0000-0000-000000000000', '11111111-1111-1111-1111-111111111111', 7, '2025-07-25', 'Beach & Evening in Trieste', 'Relaxing beach day followed by a trip to Trieste.', '1 hour', 45.516, 13.568);
INSERT INTO public.itinerary_days (id, trip_id, day_number, date, location, highlights, drive_time, lat, lng) VALUES ('00000008-0000-0000-0000-000000000000', '11111111-1111-1111-1111-111111111111', 8, '2025-07-26', 'Postojna Cave → Ljubljana', 'Exploring Postojna Cave, Predjama Castle, and arriving in Ljubljana.', '2 hours', 46.051, 14.506);
INSERT INTO public.itinerary_days (id, trip_id, day_number, date, location, highlights, drive_time, lat, lng) VALUES ('00000009-0000-0000-0000-000000000000', '11111111-1111-1111-1111-111111111111', 9, '2025-07-27', 'Ljubljana → Bratislava', 'Final day, optional stop in Graz before returning home.', '4.5–5 hours', 48.148, 17.107);

-- Insert activities
INSERT INTO public.activities (id, day_id, time, description) VALUES ('00000001-0000-0000-0000-000000000000', '00000001-0000-0000-0000-000000000000', 'Morning', 'Early departure from Bratislava (~3.5-hour drive).');
INSERT INTO public.activities (id, day_id, time, description) VALUES ('00000001-0001-0000-0000-000000000000', '00000001-0000-0000-0000-000000000000', 'Afternoon', 'Stop in Maribor – explore Old Town, Pyramid Hill, and the Drava River promenade.');
INSERT INTO public.activities (id, day_id, time, description) VALUES ('00000001-0002-0000-0000-000000000000', '00000001-0000-0000-0000-000000000000', 'Evening', 'Continue to Bled/Bohinj (~2-hour drive), check into accommodation.');
INSERT INTO public.activities (id, day_id, time, description) VALUES ('00000002-0000-0000-0000-000000000000', '00000002-0000-0000-0000-000000000000', 'Morning', 'Walk around Lake Bled and take a pletna boat to Bled Island.');
INSERT INTO public.activities (id, day_id, time, description) VALUES ('00000002-0001-0000-0000-000000000000', '00000002-0000-0000-0000-000000000000', 'Afternoon', 'Visit Bled Castle and hike through Vintgar Gorge.');
INSERT INTO public.activities (id, day_id, time, description) VALUES ('00000002-0002-0000-0000-000000000000', '00000002-0000-0000-0000-000000000000', 'Evening', 'Relax at a lakeside café or explore Bled Town.');
INSERT INTO public.activities (id, day_id, time, description) VALUES ('00000003-0000-0000-0000-000000000000', '00000003-0000-0000-0000-000000000000', 'Morning', 'Take the Vogel Cable Car for stunning mountain views.');
INSERT INTO public.activities (id, day_id, time, description) VALUES ('00000003-0001-0000-0000-000000000000', '00000003-0000-0000-0000-000000000000', 'Afternoon', 'Explore Lake Bohinj, visit Savica Waterfall, or take a short hike.');
INSERT INTO public.activities (id, day_id, time, description) VALUES ('00000003-0002-0000-0000-000000000000', '00000003-0000-0000-0000-000000000000', 'Evening', 'Return to accommodation for a relaxed evening.');
INSERT INTO public.activities (id, day_id, time, description) VALUES ('00000004-0000-0000-0000-000000000000', '00000004-0000-0000-0000-000000000000', 'Morning', 'Drive through Vršič Pass (~1.5 hours) with optional short hike to Slemenova Špica (~2–3 hours). Stop at Russian Chapel & Lake Jasna.');
INSERT INTO public.activities (id, day_id, time, description) VALUES ('00000004-0001-0000-0000-000000000000', '00000004-0000-0000-0000-000000000000', 'Afternoon', 'Lunch in Bovec, check into accommodation, then enjoy ziplining (~2 hours).');
INSERT INTO public.activities (id, day_id, time, description) VALUES ('00000005-0000-0000-0000-000000000000', '00000005-0000-0000-0000-000000000000', 'Morning', 'Guided tour of Kobarid Museum, or choose an alternative activity (hike, cheese tasting, rafting).');
INSERT INTO public.activities (id, day_id, time, description) VALUES ('00000005-0001-0000-0000-000000000000', '00000005-0000-0000-0000-000000000000', 'Afternoon', 'Go kayaking on the Soča River.');
INSERT INTO public.activities (id, day_id, time, description) VALUES ('00000006-0000-0000-0000-000000000000', '00000006-0000-0000-0000-000000000000', 'Morning', 'Full-day hike in Soča Valley (Soča Trail, Krn Lake, or Seven Lakes Valley).');
INSERT INTO public.activities (id, day_id, time, description) VALUES ('00000006-0001-0000-0000-000000000000', '00000006-0000-0000-0000-000000000000', 'Afternoon', 'Drive to Piran/Portorož (~2.5–3 hours).');
INSERT INTO public.activities (id, day_id, time, description) VALUES ('00000006-0002-0000-0000-000000000000', '00000006-0000-0000-0000-000000000000', 'Evening', 'Check into seaside accommodation, walk around Piran Old Town.');
INSERT INTO public.activities (id, day_id, time, description) VALUES ('00000007-0000-0000-0000-000000000000', '00000007-0000-0000-0000-000000000000', 'Morning', 'Relax at Piran or Portorož Beach.');
INSERT INTO public.activities (id, day_id, time, description) VALUES ('00000007-0001-0000-0000-000000000000', '00000007-0000-0000-0000-000000000000', 'Afternoon', 'Drive to Trieste (~30 min) and explore Piazza Unità d’Italia, Grand Canal, and Castello di Miramare.');
INSERT INTO public.activities (id, day_id, time, description) VALUES ('00000007-0002-0000-0000-000000000000', '00000007-0000-0000-0000-000000000000', 'Evening', 'Dinner at a harborside Italian restaurant, then drive back to Piran (~30 min).');
INSERT INTO public.activities (id, day_id, time, description) VALUES ('00000008-0000-0000-0000-000000000000', '00000008-0000-0000-0000-000000000000', 'Morning', 'Drive to Postojna Cave (~1 hour), visit the cave and Predjama Castle.');
INSERT INTO public.activities (id, day_id, time, description) VALUES ('00000008-0001-0000-0000-000000000000', '00000008-0000-0000-0000-000000000000', 'Afternoon', 'Drive to Ljubljana (~40 min) and explore the Old Town.');
INSERT INTO public.activities (id, day_id, time, description) VALUES ('00000009-0000-0000-0000-000000000000', '00000009-0000-0000-0000-000000000000', 'Morning', 'Enjoy breakfast and explore Ljubljana.');
INSERT INTO public.activities (id, day_id, time, description) VALUES ('00000009-0001-0000-0000-000000000000', '00000009-0000-0000-0000-000000000000', 'Afternoon', 'Drive back to Bratislava (~4.5 hours). Optional stop in Graz for sightseeing & lunch.');
-- Insert accommodations
INSERT INTO public.accommodations (id, day_id, name, link, price) VALUES ('00000001-9999-0000-0000-000000000000', '00000001-0000-0000-0000-000000000000', 'Guest House Golja, Bled', 'https://www.booking.com/hotel/si/apartment-and-rooms-golja.html', '€908 for 3 nights, 4 people');
INSERT INTO public.accommodations (id, day_id, name, link, price) VALUES ('00000002-9999-0000-0000-000000000000', '00000002-0000-0000-0000-000000000000', 'Guest House Golja, Bled', 'https://www.booking.com/hotel/si/apartment-and-rooms-golja.html', '');
INSERT INTO public.accommodations (id, day_id, name, link, price) VALUES ('00000003-9999-0000-0000-000000000000', '00000003-0000-0000-0000-000000000000', 'Guest House Golja, Bled', 'https://www.booking.com/hotel/si/apartment-and-rooms-golja.html', '');
INSERT INTO public.accommodations (id, day_id, name, link, price) VALUES ('00000004-9999-0000-0000-000000000000', '00000004-0000-0000-0000-000000000000', 'Apartma Mulino, Kobarid', 'https://www.booking.com/hotel/si/apartma-mulino.html', '€370 for 2 nights, 4 people');
INSERT INTO public.accommodations (id, day_id, name, link, price) VALUES ('00000005-9999-0000-0000-000000000000', '00000005-0000-0000-0000-000000000000', 'Apartma Mulino, Kobarid', 'https://www.booking.com/hotel/si/apartma-mulino.html', '');
INSERT INTO public.accommodations (id, day_id, name, link, price) VALUES ('00000006-9999-0000-0000-000000000000', '00000006-0000-0000-0000-000000000000', 'Luxury Apartment Magical Portorose', 'https://www.booking.com/hotel/si/luxury-apartment-magical-portorose.html', '€534 for 2 nights, 4 people');
INSERT INTO public.accommodations (id, day_id, name, link, price) VALUES ('00000007-9999-0000-0000-000000000000', '00000007-0000-0000-0000-000000000000', 'Luxury Apartment Magical Portorose', 'https://www.booking.com/hotel/si/luxury-apartment-magical-portorose.html', '');
INSERT INTO public.accommodations (id, day_id, name, link, price) VALUES ('00000008-9999-0000-0000-000000000000', '00000008-0000-0000-0000-000000000000', 'City Hotel Ljubljana', 'https://www.booking.com/hotel/si/cityhotelljubljana.html', '€316 for 2 nights, 4 people');
INSERT INTO public.accommodations (id, day_id, name, link, price) VALUES ('00000009-9999-0000-0000-000000000000', '00000009-0000-0000-0000-000000000000', 'Home sweet home!', '', '');

-- Enable RLS and allow anon to read from all tables
ALTER TABLE public.trips ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anon read" ON public.trips FOR SELECT TO anon USING (true);

ALTER TABLE public.itinerary_days ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anon read" ON public.itinerary_days FOR SELECT TO anon USING (true);

ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anon read" ON public.activities FOR SELECT TO anon USING (true);

ALTER TABLE public.accommodations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anon read" ON public.accommodations FOR SELECT TO anon USING (true);
