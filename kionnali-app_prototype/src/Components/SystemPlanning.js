import React from "react";
import "./SystemPlanning.css";

export default function SystemPlanning(props) {
	return (
		<div className="planning-container grid">
			<div className="rainfall-tile grid-1">
				<h5>Rainfall</h5>
				<div className="three-dots"></div>
				<div
					className="rainfall-tile-img"
					onClick={props.handleRainfallClick}></div>
				<p className="zero-mm">
					<span className="zero">0 </span>
					<span className="mm">mm</span>
				</p>
				<p>No rainfall collection</p>
				<button className="water-data-btn">See water data &gt; </button>
			</div>
			<div className="planning-box grid-2"></div>
			<div className="harvest-tile grid-3"></div>
		</div>
	);
}
