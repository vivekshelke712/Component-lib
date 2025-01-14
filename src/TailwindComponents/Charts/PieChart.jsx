import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Chart data
  const data = {
    labels: ["Electronics", "Fashion", "Groceries", "Toys", "Books"],
    datasets: [
      {
        label: "Sales Distribution",
        data: [25, 20, 30, 10, 15], // Percentages or raw values
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sales Distribution by Category",
      },
    },
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
        Sales Distribution
      </h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
