import "../CommandCenter.css";
import "./PowerSystem.css";
import CompostSystemMainImg from "../../Assets/PowerSystem/CompostSystemMainImg.png";

export default function CompostSystem() {
	return (
		<div className="command-center-container">
			<div className="power-page">
				<img
					src={CompostSystemMainImg}
					alt="Power System Page"
				/>
			</div>
		</div>
	);
}
