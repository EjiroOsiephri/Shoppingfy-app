import React from "react";
import { useSelector } from "react-redux";
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
  const chartQuantity = useSelector((state) => state.cart.items);

  const Dummy_data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Monthly Summary",
        data: chartQuantity.map((item) => item.quantity * 10),
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

  return <Line data={Dummy_data} options={options} />;
};

export default Charts;
