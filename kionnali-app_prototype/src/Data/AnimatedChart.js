import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

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
	{
		day: "Saturday",
		thermalBatteryPercentage: 60,
		electricBatteryPercentage: 40,
	},
	{
		day: "Sunday",
		thermalBatteryPercentage: 70,
		electricBatteryPercentage: 30,
	},
	{
		day: "Monday",
		thermalBatteryPercentage: 80,
		electricBatteryPercentage: 20,
	},
	{
		day: "Tuesday",
		thermalBatteryPercentage: 90,
		electricBatteryPercentage: 10,
	},
	{
		day: "Wednesday",
		thermalBatteryPercentage: 100,
		electricBatteryPercentage: 0,
	},
	{
		day: "Thursday",
		thermalBatteryPercentage: 90,
		electricBatteryPercentage: 10,
	},
	{
		day: "Friday",
		thermalBatteryPercentage: 80,
		electricBatteryPercentage: 20,
	},
	// Add more days as needed
];

const processData = () => {
	const labels = jsonData.map((item) => item.day);

	const datasets = [
		{
			label: "Thermal Battery %",
			data: jsonData.map((item) => item.thermalBatteryPercentage),
			fill: false,
			backgroundColor: "#FFC700",
			borderColor: "#FA8E60",
		},
		{
			label: "Electric Battery %",
			data: jsonData.map((item) => item.electricBatteryPercentage),
			fill: false,
			backgroundColor: "#FFC700",
			borderColor: "#658229",
		},
	];

	return { labels, datasets };
};

export default function AnimatedChart() {
	const chartData = processData();

	const options = {
		animation: {
			duration: 2000, // Duration of the entire animation
			easing: "linear", // Use a linear easing for smooth animation
			delay: (context) => {
				let delay = 0;
				// Increment the delay for each data index to animate progressively
				if (
					context.type === "data" &&
					context.mode === "default" &&
					!context.dropped
				) {
					delay = context.dataIndex * 150;
				}
				return delay;
			},
		},
		// ... include other options as needed
	};

	return (
		<div>
			<Line
				data={chartData}
				options={options}
			/>
		</div>
	);
}
