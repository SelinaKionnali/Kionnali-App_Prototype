import "../CommandCenter.css";
import "./PowerSystem.css";
import PowerSystemMainImg from "../../Assets/PowerSystem/PowerSystemMainImg.png";
import SystemStatusBox from "./SystemStatusBox";
import TileSmlSquare from "../TileComponents/TileSmlSquare";
import TileSmlRect from "../TileComponents/TileSmlRect";

export default function PowerSystem() {
	const powerStatus = "You are generating more than you are using today.";
	const expandedContent = (
		<>
			<p>
				You are generating more than you are using today. This means that you
				are storing energy in your battery for later use.
			</p>
		</>
	);
	const battery = "Battery Charge";
	const devices = (
		<>
			<h3>Devices</h3>
			<p>Cooker, fridge, TV, washing machine</p>
		</>
	);
	const circuitStatus = (
		<>
			<h3>Power Status</h3>
			<p>All circuits good</p>
		</>
	);

	const ghostDrain = (
		<>
			<h3>Ghost Drain</h3>
			<p>No drain detected</p>
		</>
	);

	return (
		<div className="command-center-container">
			<div className="power-page">
				<img
					src={PowerSystemMainImg}
					alt="Power System Page"
					className="power-main-img"
				/>
				<SystemStatusBox
					status={powerStatus}
					expandedContent={expandedContent}
				/>
				<TileSmlSquare
					status1={battery}
					status2={devices}
					className="power-tile"
				/>
				<TileSmlRect
					status1={circuitStatus}
					status2={ghostDrain}
					className="power-tile"
				/>
			</div>
		</div>
	);
}
