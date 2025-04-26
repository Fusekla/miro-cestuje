type ForecastEntry = {
    dt: number;
    main: {
      temp: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
    dt_txt: string;
  };
  
  type DailySummary = {
    date: string;
    temp: number;
    icon: string;
    description: string;
  };
  
  export async function getDailyForecast(lat: number, lon: number): Promise<DailySummary[] | null> {
  
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=3a4f66679a08357803b5c2134b4ad9cb`
    );
  
    if (!res.ok) {
        console.error("Weather fetch failed:", res.statusText);
        return null;
      }
  
    const data = await res.json();
  
    const groupedByDate: Record<string, ForecastEntry[]> = {};
  
    for (const entry of data.list as ForecastEntry[]) {
      const date = entry.dt_txt.split(" ")[0];
      if (!groupedByDate[date]) groupedByDate[date] = [];
      groupedByDate[date].push(entry);
    }
  
    // Pick the forecast closest to 12:00 each day
    const daily: DailySummary[] = Object.entries(groupedByDate).map(([date, entries]) => {
      const closestToNoon = entries.reduce((prev, curr) => {
        const target = 12;
        const prevHour = parseInt(prev.dt_txt.split(" ")[1].split(":")[0], 10);
        const currHour = parseInt(curr.dt_txt.split(" ")[1].split(":")[0], 10);
        return Math.abs(currHour - target) < Math.abs(prevHour - target) ? curr : prev;
      });
  
      return {
        date,
        temp: Math.round(closestToNoon.main.temp),
        icon: `https://openweathermap.org/img/wn/${closestToNoon.weather[0].icon}.png`,
        description: closestToNoon.weather[0].description,
      };
    });
  
    return daily;
  }
  