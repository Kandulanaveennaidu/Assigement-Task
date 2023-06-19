import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React, { FC } from "react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

// Defining ApexCharts options for the line chart
const lineChartOptions: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
  },
  xaxis: {
    labels: {
      style: {
        colors: "#858585",
        fontSize: "14px",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#858585",
        fontSize: "14px",
      },
    },
  },
  grid: {
    strokeDashArray: 5,
  },
  colors: ["#E9A0A0", "#9BDD7C"],
};

const LineChart: FC = () => {
  // Defining line chart data
  const lineChartData = [
    {
      name: "Guest",
      data: [5, 7, 3, 10],
    },
    {
      name: "User",
      data: [2, 5, 7, 8],
    },
  ];

  return (
    <ReactApexChart
      options={lineChartOptions}
      series={lineChartData}
      type="line"
      width="100%"
      height="100%"
    />
  );
};

export default LineChart;
