import { create } from "zustand";
import { ClickCountPerDay, CountryCount } from "./useAnalytics";
interface AnalyticsDataState {
  totalClick: number;
  setTotalClick: (totalClick: number) => void;
  clickCountPerDay: ClickCountPerDay[];
  setClickCountPerDay: (clickcountperday: ClickCountPerDay[]) => void;
  countryClicks: CountryCount[];
  setCountryClicks: (countryClicks: CountryCount[]) => void;
  cityClicks: CountryCount[];
  setCityClicks: (cityClicks: CountryCount[]) => void;
}
export const useAnalyticsData = create<AnalyticsDataState>((set) => ({
  totalClick: 0,
  setTotalClick: (totalClick) => set({ totalClick }),
  clickCountPerDay: [],
  setClickCountPerDay: (clickCountPerDay) => set({ clickCountPerDay }),
  countryClicks: [],
  setCountryClicks: (countryClicks) => set({ countryClicks }),
  cityClicks: [],
  setCityClicks: (cityClicks) => set({ cityClicks }),
}));
