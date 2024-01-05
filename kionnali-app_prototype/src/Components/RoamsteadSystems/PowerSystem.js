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
import BatteryChargeStatus from "../../Assets/PowerSystem/BatteryChargeStatus.png";
import LightandFanTiles from "../../Assets/PowerSystem/LightandFanTiles.png";

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
				<div style={{ margin: "-8px", border: "1px solid red" }}>
					<img
						src={BatteryChargeStatus}
						alt="Battery Charge Status"
					/>
				</div>
				<TileXL
					className="graph-tile"
					title="Battery SOC Chart"
					content={<MyChart />}
				/>
				<img
					src={LightandFanTiles}
					alt=""
				/>
				<TileXL
					className="graph-tile"
					title="Solar Panel Gain"
					content={<MyChart />}
				/>
			</div>
		</div>
	);
}
