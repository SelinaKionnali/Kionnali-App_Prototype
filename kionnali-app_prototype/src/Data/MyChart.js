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
		1: 69600,
		2: 69168.39177490909,
		3: 68720.065368,
		4: 68261.20790654545,
		5: 67702.04135418181,
		6: 67116.11716545455,
		7: 66312.98141018182,
		8: 65377.75006363636,
		9: 64662.928356363635,
		10: 63932.09735163636,
		11: 66762.49307418181,
		12: 71113.02243309091,
		13: 75580.128592,
		14: 79551.68280909091,
		15: 83337.79507709092,
		16: 84582.92552690911,
		17: 84105.13797672729,
		18: 83641.5300629091,
		19: 83123.81656945456,
		20: 82263.99233854547,
		"Hour #": "Thermal battery SOC",
	},
	{
		1: 18750,
		2: 18716.3965,
		3: 18682.792999999998,
		4: 18646.117499999997,
		5: 18609.441999999995,
		6: 18567.236499999995,
		7: 18525.030999999995,
		8: 18220.179499999995,
		9: 17871.973999999995,
		10: 18506.476499999997,
		11: 19489.796561643834,
		12: 20737.719061643835,
		13: 21719.749561643832,
		14: 22522.42806164383,
		15: 22856.18656164383,
		16: 22856.136741018832,
		17: 22794.78524101883,
		18: 22275.353741018833,
		19: 22002.961802662667,
		20: 21755.070637662666,
		"Hour #": "Electric battery SOC",
	},
];

const processData = () => {
	// Extract the hours for the labels (assuming hours are the keys '1' to '20')
	const labels = Object.keys(jsonData[0])
		.filter((key) => !isNaN(key))
		.map((key) => `Hour ${key}`);

	// Create a dataset for each type of battery
	const datasets = jsonData.map((item, index) => {
		// Extract the SOC values and remove the "Hour #" label
		const { "Hour #": label, ...dataPoints } = item;

		return {
			label: label,
			data: Object.keys(dataPoints).map((key) => dataPoints[key]),
			fill: false,
			backgroundColor:
				index === 0 ? "rgba(255, 99, 132, 0.5)" : "rgba(54, 162, 235, 0.5)",
			borderColor:
				index === 0 ? "rgba(255, 99, 132, 1)" : "rgba(54, 162, 235, 1)",
		};
	});

	return { labels, datasets };
};

const MyChart = () => {
	const chartData = {
		labels: processData().labels,
		datasets: processData().datasets,
	};

	return (
		<div>
			<Line data={chartData} />
		</div>
	);
};

export default MyChart;
