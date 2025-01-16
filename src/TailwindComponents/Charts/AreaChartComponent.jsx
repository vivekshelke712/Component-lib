import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const AreaChartComponent = () => {
  // Chart Data
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Revenue",
        data: [300, 500, 400, 600, 700],
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Area fill color
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        tension: 0.4, // Smooth curve
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#e5e7eb", // Light gray gridlines
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Area Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default AreaChartComponent;
