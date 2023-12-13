import "../CommandCenter/CommandCenter.css";
import "./PowerSystem.css";
import EVSystemMainImg from "../../Assets/PowerSystem/EVSystemMainImg.png";

export default function EVSystem() {
	return (
		<div className="command-center-container">
			<div className="power-page">
				<img
					src={EVSystemMainImg}
					alt="EV System Page"
				/>
			</div>
		</div>
	);
}
