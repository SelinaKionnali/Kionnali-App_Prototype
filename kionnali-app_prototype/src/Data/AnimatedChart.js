import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const jsonData = [
  { day: 'Saturday', thermalBatteryPercentage: 60, electricBatteryPercentage: 40 },
  { day: 'Sunday', thermalBatteryPercentage: 70, electricBatteryPercentage: 30 },
  // Add more days as needed
];

const processData = () => {
  const labels = jsonData.map((item) => item.day);

  const datasets = [
    {
      label: 'Thermal Battery %',
      data: jsonData.map((item) => item.thermalBatteryPercentage),
      fill: false,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
    },
    {
      label: 'Electric Battery %',
      data: jsonData.map((item) => item.electricBatteryPercentage),
      fill: false,
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
    },
  ];

  return { labels, datasets };
};

export default function AnimatedChart() {
  const chartData = processData();

  const options = {
    animation: {
      duration: 2000, // Animation duration in milliseconds
      easing: 'easeOutBounce', // Animation easing function
      onProgress: (animation) => console.log(animation.currentStep / animation.numSteps),
      onComplete: () => console.log('Animation completed!'),
    },
    // ... include other options as needed
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
}
