"use client";
import Hero from "@/components/hero/hero";
import Nothing from "../_components/nothing";
import CtrChart from "../_components/ctrChart";
import PieChart from "../_components/pieChart";
import { useLinkData } from "@/hooks/useLinkData";
import { cityCount, countryCount } from "@/lib/constants";

export default function Page() {
  const { linkData } = useLinkData();
  return (
    <div className="flex flex-col justify-center items-center">
      {linkData.length === 0 && <Nothing pagename="analytics" />}

      <pre className="text-meta-5 mt-2">This page is under development</pre>
      {linkData.length !== 0 && (
        <div className="grid grid-cols-2 gap-y-4 gap-x-4 p-8 m-2 relative w-2/3">
          <div className="w-full col-span-2 flex justify-center">
            <CtrChart data={[5, 8, 2, 3, 9, 6, 4, 7, 1, 10, 5, 3]} />
          </div>
          <div className="col-span-1">
            <PieChart data={countryCount} />
          </div>
          <div className="col-span-1">
            <PieChart data={cityCount} />
          </div>
        </div>
      )}
    </div>
  );
}
