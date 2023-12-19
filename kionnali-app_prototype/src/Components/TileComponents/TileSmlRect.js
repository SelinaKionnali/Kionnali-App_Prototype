import Toggle from "../Toggle";
import "./TileLarge.css";

export default function TileSmlRect({ status1, status2 }) {
	return (
		<div className="sml-rectangular-container">
			<div className="sml-rectangle">
				<div className="toggle-wrap">
					<p>{status1}</p>
					<Toggle />
				</div>
			</div>
			<div className="sml-rectangle">
				<div className="toggle-wrap">
					<p>{status2}</p>
					<Toggle />
				</div>
			</div>
		</div>
	);
}
