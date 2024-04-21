"use client";
import { ApexOptions } from "apexcharts";
import { MapPin } from "lucide-react";
import React, { useEffect, useState } from "react";
import ApexChart from "./apexChart";
import { Data } from "@/lib/constants";

interface UsersChartState {
  series: number[];
}

const colors = [
  "#40A2E3",
  "#A1EEBD",
  "#FA7070",
  "#BEADFA",
  "#FFA447",
  "#F6F7C4",
  "#D2E0FB",
  "#7BD3EA",
  "#F6D6D6",
  "#94ADD7",
  "#FF90BC",
];
const PieChart = ({ data }: { data: Data[] }) => {
  const options: ApexOptions = {
    chart: {
      fontFamily: "Inter, sans-serif",
      type: "donut",
    },
    colors: colors,
    labels: data.map((item) => item.name),
    legend: {
      show: false,
      position: "bottom",
    },

    plotOptions: {
      pie: {
        donut: {
          size: "25%",
          background: "transparent",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 380,
            type: "pie",
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };
  const values = data.map((item) => item.count);
  const [state, setState] = useState<UsersChartState>({
    series: [0, 0, 0],
  });
  useEffect(() => {
    // if (values.length > 0 && percentages.length > 0) {
    handleReset();
    // }
  }, []);

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      series: values,
    }));
  };

  return (
    <div className="col-span-12 rounded-lg border border-stroke bg-white p-5 shadow sm:px-7 xl:col-span-5 h-full">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-meta-3 flex items-center gap-x-2">
            Locations
            <MapPin size={24} className="text-meta-4/70" />
          </h5>
        </div>
      </div>

      <div className="mb-2">
        <div id="UsersChart" className="mx-auto flex justify-center">
          <ApexChart options={options} series={state.series} type="pie" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-4  items-center justify-center gap-y-3">
        {data.map((item, index) => (
          <div key={index} className="w-full ">
            <div className="flex w-full items-center">
              <span
                className="mr-2 block h-3 w-full max-w-3 rounded-full"
                style={{ backgroundColor: colors[index] }}
              ></span>
              <p className="flex w-full justify-between text-sm font-medium text-black">
                <span>{item.name}</span>
                <span> {item.count} </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
