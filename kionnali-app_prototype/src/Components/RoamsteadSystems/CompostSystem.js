import "../CommandCenter/CommandCenter.css";
import "./PowerSystem.css";
import Compost from "../../Assets/ThermalSystem/Compost.png";

export default function CompostSystem() {
	return (
		<div className="command-center-container">
			<div className="power-page">
			<img
					src={Compost}
					style={{width: "390px", height: "1859px", marginTop: "-63px"}}
					alt="Power System Page"
				/>
			</div>
		</div>
	);
}
