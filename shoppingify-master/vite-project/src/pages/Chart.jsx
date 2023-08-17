import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js/auto";

ChartJS.register(LineElement, PointElement, LinearScale, Title);

const Charts = () => {
  const Dummy_data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Monthly Summary",
        data: [140, 60, 20, 40, 120, 80, 100],
        backgroundColor: ["rgba(249, 161, 9, 1)"],
        borderColor: ["rgba(249, 161, 9, 1)"],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category",
        labels: Dummy_data.labels,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <Line data={Dummy_data} options={options} />
      </div>
    </>
  );
};

export default Charts;
