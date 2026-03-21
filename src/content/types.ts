export type TripFact = {
  label: string;
  value: string;
};

export type TransportEntry = {
  label: string;
  duration?: string;
  note?: string;
};

export type FixedItem = {
  title: string;
  time?: string;
  note?: string;
};

export type DayItem = {
  text: string;
  time?: string;
  duration?: string;
  fixed?: boolean;
  note?: string;
};

export type DaySection = {
  title: string;
  items: DayItem[];
};

export type TripDay = {
  slug: string;
  dayNumber: number;
  date: string;
  title: string;
  summary: string;
  overview?: string;
  tags?: string[];
  transport?: TransportEntry[];
  fixedItems?: FixedItem[];
  accommodationName?: string;
  highlightImage?: {
    src: string;
    alt: string;
  };
  notes?: string[];
  tips?: string[];
  options?: string[];
  sections: DaySection[];
};

export type Trip = {
  slug: string;
  title: string;
  eyebrow: string;
  destination: string;
  dateRange: string;
  blurb: string;
  intro: string[];
  coverImage: {
    src: string;
    alt: string;
  };
  baseLocation?: string;
  tags?: string[];
  facts: TripFact[];
  planningNotes?: string[];
  days: TripDay[];
};
