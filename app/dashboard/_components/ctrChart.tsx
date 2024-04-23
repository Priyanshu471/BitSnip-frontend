"use client";
import { ApexOptions } from "apexcharts";
import React, { useEffect, useState } from "react";
import ApexChart from "./apexChart";
import { MousePointer2 } from "lucide-react";
import { ClickCountPerDay } from "@/hooks/useAnalytics";
interface CtrChatState {
  series: {
    name: string;
    data: number[];
  }[];
}
interface CtrChartProps {
  data: ClickCountPerDay[];
  totalClicks: number;
}

const CtrChart = ({ data, totalClicks }: CtrChartProps) => {
  const [state, setState] = useState<CtrChatState>({
    series: [
      {
        name: "CTR",
        data: [5, 8, 2, 3, 9, 6, 4, 7, 1, 10, 5, 3],
      },
    ],
  });

  useEffect(() => {
    handleReset();
  }, [data, totalClicks]);

  const handleReset = () => {
    setState({
      series: [
        {
          name: "Click",
          data: data.map((item) => item.count),
        },
      ],
    });
  };

  const options: ApexOptions = {
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#6938cc", "#80CAEE"],
    chart: {
      height: 335,
      type: "area",
      dropShadow: {
        enabled: true,
        color: "#623CEA14",
        top: 10,
        blur: 4,
        left: 0,
        opacity: 0.1,
      },

      toolbar: {
        show: true,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 350,
          },
        },
      },
    ],
    stroke: {
      width: [2, 2],
      curve: "smooth",
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 4,
      colors: "#fff",
      strokeColors: ["#6938CC", "#80CAEE"],
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      hover: {
        size: undefined,
        sizeOffset: 5,
      },
    },
    xaxis: {
      type: "category",
      categories: data.map((item) => item.day),
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: "0px",
        },
      },
      min: 0,
      max: Math.max(...data.map((item) => item.count)) + 2,
    },
  };
  return (
    <div className="w-full col-span-12 rounded-lg border border-stroke bg-white p-5 shadow sm:px-7 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-48">
            <span className="mr-2 mt-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-meta-3">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-meta-3"></span>
            </span>
            <div className="flex flex-col">
              <div className="w-full flex items-center gap-x-2 text-2xl">
                <p className="font-semibold text-meta-3">{totalClicks}</p>
                <MousePointer2 size={24} className="text-meta-4/70" />
              </div>
              <p className="text-meta-4 font-medium">Total Click</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="ctr" className="-ml-5">
          <ApexChart
            options={options}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default CtrChart;
