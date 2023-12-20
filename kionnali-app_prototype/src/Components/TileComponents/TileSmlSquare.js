import "./TileLarge.css";
import "../RoamsteadSystems/PowerSystem.css";

export default function TileSmlSquare({ status1, status2 }) {
	return (
		<div className="sml-square-tile-container">
			<div className="sml-square-tile">
				<p>{status1}</p>
			</div>
			<div className="sml-square-tile">
				<p>{status2}</p>
			</div>
		</div>
	);
}
