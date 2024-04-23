"use client";
import Nothing from "../_components/nothing";
import CtrChart from "../_components/ctrChart";
import PieChart from "../_components/pieChart";
import { useLinkData } from "@/hooks/useLinkData";
import { cityCount, countryCount } from "@/lib/constants";
import SelectUrl from "../_components/selectUrl";
import { cn } from "@/lib/utils";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useEffect } from "react";
import { useAnalyticsData } from "@/hooks/useAnalyticsData";

export default function Page() {
  const { linkData } = useLinkData();
  const analytics = useAnalytics();
  const { totalClick, clickCountPerDay, countryClicks, cityClicks } =
    useAnalyticsData();
  return (
    <div className="flex flex-col justify-center items-center">
      {linkData.length === 0 && <Nothing pagename="analytics" />}

      <pre className="text-meta-5 mt-2 text-sm md:text-base text-wrap mx-2">
        This is in beta! Try it out and let us know what you think at{" "}
        <a
          href="mailto:mishrapriyanshu2003@gmail.com"
          className="underline text-meta-3"
        >
          Email
        </a>
      </pre>
      {linkData.length !== 0 && (
        <>
          <div className="flex items-center gap-x-4 w-full md:w-2/3 px-8 m-2">
            <SelectUrl />
          </div>
          <div
            className={cn(
              "grid grid-cols-2 gap-y-4 gap-x-4 p-8 m-2 relative md:w-2/3",
              analytics.processing && "pointer-events-none opacity-60"
            )}
          >
            {totalClick === 0 && (
              <div className="col-span-2 flex justify-center">
                <Nothing pagename="not found" />
              </div>
            )}
            {totalClick !== 0 && (
              <>
                <div className="w-full col-span-2 flex justify-center">
                  <CtrChart data={clickCountPerDay} totalClicks={totalClick} />
                </div>
                <div className="col-span-1">
                  <PieChart data={countryClicks} forValue="Country" />
                </div>
                <div className="col-span-1">
                  <PieChart data={cityClicks} forValue="City" />
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
