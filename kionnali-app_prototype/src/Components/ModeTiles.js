import React from "react";
import "./ModeTiles.css";
import Toggle from "./Toggle";

export default function ModeTiles() {
	return (
		<div className="slider">
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
