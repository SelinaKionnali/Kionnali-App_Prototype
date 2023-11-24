import "../CommandCenter.css";
import "./PowerSystem.css";
import "../Dashboard.css";
import "../TileComponents/TileLarge.css";
import PowerSystemMainImg from "../../Assets/PowerSystem/PowerSystemMainImg.png";
import SystemStatusBox from "./SystemStatusBox";
import TileSmlSquare from "../TileComponents/TileSmlSquare";
import TileSmlRect from "../TileComponents/TileSmlRect";
import TileXL from "../TileComponents/TileXL";
import TileNarrow from "../TileComponents/TileNarrow";
import ButtonsWithSlider from "../ButtonWithSlider";

export default function PowerSystem() {
	const powerStatus = "You are generating more than you are using today.";
	const expandedContent =
		"You are generating more than you are using today. This means that you are storing energy in your battery for later use.";

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
				<TileXL
					className="graph-tile"
					title="Graph"
					content="Graph of power usage"
				/>
				<div className="narrow-tile-container">
					<TileNarrow className="narrow-tile">
						<h3>Lights 18W</h3>
						<div className="slider-container">
							<ButtonsWithSlider
								divClassName="buttons-with-slider-instance"
								property1="unpressed"
								text="Ceiling"
							/>
							<ButtonsWithSlider
								divClassName="buttons-with-slider-instance"
								property1="unpressed"
								text="Lamp"
							/>
						</div>
					</TileNarrow>
					<TileNarrow className="narrow-tile">
						<h3>Fans 23W</h3>
						<div className="slider-container">
							<ButtonsWithSlider
								divClassName="buttons-with-slider-instance"
								property1="unpressed"
								text="Ceiling"
							/>
							<ButtonsWithSlider
								divClassName="buttons-with-slider-instance"
								property1="unpressed"
								text="Vent"
							/>
						</div>
					</TileNarrow>
				</div>
				<TileXL
					className="graph-tile"
					title="Solar Panel Gain"
					content="Graph for solar panel gain"
				/>
			</div>
		</div>
	);
}
