import Toggle from "../Toggle";
import "./TileLarge.css";

export default function TileSmlRect({ status1, status2, icon1, icon2 }) {
	return (
		<div className="sml-rectangular-container">
			<div className="sml-rectangle">
				<div className="toggle-wrap">
					<image>{icon1}</image>
					<Toggle />
				</div>
				<div className="text-wrap">
					<p>{status1}</p>
				</div>
			</div>
			<div className="sml-rectangle">
				<div className="toggle-wrap">
					<image>{icon2}</image>
					<Toggle />
				</div>
				<div className="text-wrap">
					<p>{status2}</p>
				</div>
			</div>
		</div>
	);
}
