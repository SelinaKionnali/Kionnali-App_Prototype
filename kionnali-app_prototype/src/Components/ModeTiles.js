import React from "react";
import "./ModeTiles.css";
import Toggle from "./Toggle";

export default function ModeTiles() {
	const handleClick = (e) => {
		console.log("Add Mode button clicked");
	};

	return (
		<div className="modes slider">
			<div className="mode-tile">
				<div className="add-mode-wrapper">
					<button
						className="add-mode"
						onClick={handleClick}></button>
					<p>Add Mode</p>
				</div>
			</div>

			<div className="mode-tile">
				<div className="mode-toggle-wrapper">
					<p>Night</p>
					<Toggle />
				</div>
			</div>

			<div className="mode-tile">
				<div className="mode-toggle-wrapper">
					<p>Morning</p>
					<Toggle />
				</div>
			</div>

			<div className="mode-tile">
				<div className="mode-toggle-wrapper">
					<p>Adventure</p>
					<Toggle />
				</div>
			</div>

			<div className="mode-tile">
				<div className="mode-toggle-wrapper">
					<p>Movies</p>
					<Toggle />
				</div>
			</div>
		</div>
	);
}
