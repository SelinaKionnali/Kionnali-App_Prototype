import React from "react";
import "./LoadingScreen.css";

export default function LoadingScreen() {
	const handleClick = () => {
		console.log("Button clicked!");
	};
	return (
		<>
			<div className="loading-screen"></div>
			<div className="off-grid"></div>
			<div
				className="button-container"
				onClick={handleClick}></div>
		</>
	);
}
