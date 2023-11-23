import "./TileLarge.css";
import "../RoamsteadSystems/PowerSystem.css";

export default function TileSmlSquare({ status1, status2 }) {
	return (
		<div className="sml-square-tile-container">
			<div className="sml-square-tile">
				<h3>{status1}</h3>
			</div>
			<div className="sml-square-tile">
				<h3>{status2}</h3>
			</div>
		</div>
	);
}
