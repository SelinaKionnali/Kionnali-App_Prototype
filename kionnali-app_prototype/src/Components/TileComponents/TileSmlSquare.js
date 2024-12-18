import "./TileLarge.css";
import "../RoamsteadSystems/PowerSystem.css";

export default function TileSmlSquare({
	title1,
	title2,
	img1,
	img2,
	content1,
	content2,
	watt1,
	watt2,
	p,
	slider,
	btns,
}) {
	return (
		<div className="sml-square-tile-container">
			<div className="sml-square-tile">
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
				{p && <p>{p}</p>}
				{slider && (
					<img
						src={slider}
						alt="volume slider"
					/>
				)}
				{btns && (
					<img
						src={btns}
						alt="doorbell buttons"
					/>
				)}
			</div>
			<div className="sml-square-tile">
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
