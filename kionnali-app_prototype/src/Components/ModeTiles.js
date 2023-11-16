import React from "react";
import "./ModeTiles.css";
import Toggle from "./Toggle";

export default function ModeTiles() {
	return (
		<div className="slider">
			<div className="mode-tile">
				<p>1</p>
				<div className="mode-toggle-wrapper">
					<p>Night</p>
					<Toggle />
				</div>
			</div>
			<div className="mode-tile">
				<p>2</p>
			</div>
			<div className="mode-tile">
				<p>3</p>
			</div>
			<div className="mode-tile">
				<p>4</p>
			</div>
		</div>
	);
}
