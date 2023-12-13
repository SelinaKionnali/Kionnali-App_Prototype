import "../CommandCenter/CommandCenter.css";
import "./PowerSystem.css";
import ThermalSystemMainImg from "../../Assets/PowerSystem/ThermalSystemMainImg.png";

export default function ThermalSystem() {
	return (
		<div className="command-center-container">
			<div className="power-page">
				<img
					src={ThermalSystemMainImg}
					alt="Thermal System Page"
				/>
			</div>
		</div>
	);
}
