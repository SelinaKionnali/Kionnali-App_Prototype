import "../CommandCenter.css";
import "./PowerSystem.css";
import WaterSystemMainImg from "../../Assets/PowerSystem/WaterSystemMainImg.png";

export default function WaterSystem() {
	return (
		<div className="command-center-container">
			<div className="power-page">
				<img
					src={WaterSystemMainImg}
					alt="Power System Page"
				/>
			</div>
		</div>
	);
}
