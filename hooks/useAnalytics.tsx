import { useState, useCallback } from "react";
import axios from "axios";
import { analyticsUrl } from "@/lib/static";
import { useAnalyticsData } from "./useAnalyticsData";

export interface ClickCountPerDay {
  day: string;
  count: number;
}

export interface CountryCount {
  name: string;
  count: number;
}

interface DeviceInfo {
  isMobile: boolean;
  Os: string;
  browserName: string;
}

interface AnalyticsResponse {
  processing: boolean;
  getAnalytics: (urlId: string) => Promise<void>;
  error: string;
  totalClicks: number;
  clickCountPerDay: ClickCountPerDay[];
  countryClicks: CountryCount[];
  cityClicks: CountryCount[];
  deviceInfo: DeviceInfo[];
}

type Click = { day: string; time: string };
type Curr = [string, string, string];

export const useAnalytics = (): AnalyticsResponse => {
  const [state, setState] = useState<AnalyticsResponse>({
    processing: false,
    getAnalytics: async () => {},
    error: "",
    totalClicks: 0,
    clickCountPerDay: [],
    countryClicks: [],
    cityClicks: [],
    deviceInfo: [],
  });
  const {
    setTotalClick,
    setClickCountPerDay,
    setCountryClicks,
    setCityClicks,
  } = useAnalyticsData();
  const getAnalytics = useCallback(async (urlId: string) => {
    if (!urlId) return;
    setState((prevState) => ({ ...prevState, processing: true, error: "" }));

    try {
      const response = await axios.get(`${analyticsUrl}/${urlId}`);
      const data = await response.data;

      if (response.status === 200) {
        const clickCountPerDay = data.allTimestamps.reduce(
          (acc: ClickCountPerDay[], curr: Click) => {
            const index = acc.findIndex((item) => item.day === curr.day);
            if (index !== -1) {
              acc[index].count += 1;
            } else {
              acc.push({ day: curr.day, count: 1 });
            }
            return acc;
          },
          []
        );

        const countryCount = data.alllocations.reduce(
          (acc: CountryCount[], curr: Curr) => {
            const index = acc.findIndex((item) => item.name === curr[1]);
            if (index !== -1) {
              acc[index].count += 1;
            } else {
              acc.push({ name: curr[1], count: 1 });
            }
            return acc;
          },
          []
        );

        const cityCount = data.alllocations.reduce(
          (acc: CountryCount[], curr: Curr) => {
            const index = acc.findIndex((item) => item.name === curr[0]);
            if (index !== -1) {
              acc[index].count += 1;
            } else {
              acc.push({ name: curr[0], count: 1 });
            }
            return acc;
          },
          []
        );
        setTotalClick(data.totalClicks);
        setClickCountPerDay(clickCountPerDay);
        setCountryClicks(countryCount);
        setCityClicks(cityCount);
        setState((prevState) => ({
          ...prevState,
          processing: false,
          totalClicks: data.totalClicks,
          clickCountPerDay: clickCountPerDay,
          countryClicks: countryCount,
          cityClicks: cityCount,
        }));
      }
    } catch (err: any) {
      setState((prevState) => ({
        ...prevState,
        error: err.message,
        processing: false,
      }));
    }
  }, []);

  return { ...state, getAnalytics };
};
