import React from "react";

export default function NarrowTiles({
	title1,
	img1,
	content1,
	watt1,
	p,
	slider,
	btns,
	title2,
	content2,
	watt2,
}) {
	return (
		<div className="narrow-tile-container">
			<div className="narrow-tile">
				<div
					className="tile-heading"
					style={{ width: "150px" }}>
					<h3>{title1}</h3>
					<img
						src={img1}
						alt="drag and drop icon"
					/>
				</div>
				<img
					src={content1}
					alt="open close icon"
				/>
				{watt1 && (
					<img
						src={watt1}
						style={{ margin: "8px" }}
						alt="watt icon"
					/>
				)}
				{p && <p style={{ margin: "0" }}>{p}</p>}
				{slider && (
					<img
						src={slider}
						alt="volume slider"
						style={{ margin: " 0 8px" }}
					/>
				)}
				{btns && (
					<img
						src={btns}
						alt="doorbell buttons"
					/>
				)}
			</div>
			<div className="narrow-tile">
				<div
					className="tile-heading"
					style={{ width: "150px" }}>
					<h3>{title2}</h3>
					<img
						src={img1}
						alt="drag and drop icon"
					/>
				</div>
				<img
					src={content2}
					style={{ margin: "28px" }}
					alt="open close icon"
				/>
				<img
					src={watt2}
					style={{ margin: "8px" }}
					alt="watt icon"
				/>
			</div>
		</div>
	);
}
