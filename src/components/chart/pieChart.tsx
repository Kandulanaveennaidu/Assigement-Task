import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

// Defining ApexCharts options for the Pie chart
const pieChartOptions: ApexOptions = {
  chart: {
    type: "pie",
  },
  labels: ["Basic", "Custom", "Super"],
  colors: ["#98D89E", "#EE8484", "#F6DC7D"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: false,
    width: 0,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

const PieChart = () => {
  // Defining Pie chart data
  const PieChartData = [44, 55, 13];
  return (
    <div id="chart">
      <ReactApexChart
        options={pieChartOptions}
        series={PieChartData}
        type="pie"
        width={300}
      />
    </div>
  );
};

export default PieChart;
