import React from "react";
import "./TileLarge.css";

export default function TileXL({ title, img1, content, watt1 }) {
	return (
		<div className="extra-large-tile">
			<div className="tile-heading">
				<h3>{title}</h3>
				{watt1 && (
					<img
						src={watt1}
						alt="wattage"
					/>
				)}
				{img1 && (
					<img
						src={img1}
						alt="drag and drop icon"
					/>
				)}
			</div>

			{content && React.isValidElement(content) ? (
				<div className="tile-content">{content}</div>
			) : img1 ? (
				<img
					src={content}
					alt="foundation level adjustment"
				/>
			) : null}
		</div>
	);
}
