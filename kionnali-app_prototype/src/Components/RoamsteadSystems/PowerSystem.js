import "../CommandCenter/CommandCenter.css";
import "./PowerSystem.css";
import "../Dashboard/Dashboard.css";
import "../TileComponents/TileLarge.css";
import PowerSystemMainImg from "../../Assets/PowerSystem/PowerSystemMainImg.png";
import SystemStatusBox from "./SystemStatusBox";
import TileXL from "../TileComponents/TileXL";
import TileNarrow from "../TileComponents/TileNarrow";
import ButtonsWithSlider from "../CommandCenter/ButtonWithSlider";
import MyChart from "../../Data/MyChart";
import BatteryChargeStatus from "../../Assets/Dashboard/BatteryChargeStatus.png";

export default function PowerSystem() {
	const powerStatus = "You are generating more than you are using today.";
	const expandedContent =
		"You are generating more than you are using today. This means that you are storing energy in your battery for later use.";

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
				<img
					src={BatteryChargeStatus}
					alt=""
				/>
				<TileXL
					className="graph-tile"
					title="Battery SOC Chart"
					content={<MyChart />}
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
