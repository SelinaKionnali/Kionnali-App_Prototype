import "./TileLarge.css";

export default function TileSmlRect({ status1, status2 }) {
	return (
		<div className="sml-rectangular-container">
			<div className="sml-rectangle">
				<h3>{status1}</h3>
			</div>
			<div className="sml-rectangle">
				<h3>{status2}</h3>
			</div>
		</div>
	);
}
