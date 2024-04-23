"use client";
import Nothing from "../_components/nothing";
import CtrChart from "../_components/ctrChart";
import PieChart from "../_components/pieChart";
import { useLinkData } from "@/hooks/useLinkData";
import SelectUrl from "../_components/selectUrl";
import { cn } from "@/lib/utils";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useAnalyticsData } from "@/hooks/useAnalyticsData";

export default function Page() {
  const { linkData } = useLinkData();
  const analytics = useAnalytics();
  const { totalClick, clickCountPerDay, countryClicks, cityClicks } =
    useAnalyticsData();
  return (
    <div className="flex flex-col justify-center items-center">
      {linkData.length === 0 && <Nothing pagename="analytics" />}
      {linkData.length !== 0 && (
        <>
          <h1 className="text-2xl font-semibold text-center text-meta-3 my-4">
            Analyse your links with ease
          </h1>
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
