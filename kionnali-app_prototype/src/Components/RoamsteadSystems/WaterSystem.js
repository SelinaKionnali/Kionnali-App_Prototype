import "../CommandCenter/CommandCenter.css";
import "./PowerSystem.css";
import Water from "../../Assets/ThermalSystem/Water.png";

export default function WaterSystem() {
	return (
		<div className="command-center-container">
			<div className="power-page">
				<img
					src={Water}
					style={{width: "390px", height: "1859px", marginTop: "-63px"}}
					alt="Power System Page"
				/>
			</div>
		</div>
	);
}
