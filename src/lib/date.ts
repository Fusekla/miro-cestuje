const dayFormatter = new Intl.DateTimeFormat("en-GB", {
  weekday: "short",
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function formatTripDate(date: string) {
  return dayFormatter.format(new Date(`${date}T12:00:00`));
}
