import "../CommandCenter/CommandCenter.css";
import "./PowerSystem.css";
import FoodSystemMainImg from "../../Assets/PowerSystem/FoodSystemMainImg.png";

export default function FoodSystem() {
	return (
		<div className="command-center-container">
			<div className="power-page">
				<img
					src={FoodSystemMainImg}
					alt="Food System Page"
				/>
			</div>
		</div>
	);
}
