import "../CommandCenter/CommandCenter.css";
import "./PowerSystem.css";
import CompareSystemMainImg from "../../Assets/PowerSystem/CompareSystemMainImg.png";
export default function CompareSystems() {
	return (
		<div className="command-center-container">
			<div className="power-page">
				<img
					src={CompareSystemMainImg}
					alt="Power System Page"
				/>
			</div>
		</div>
	);
}
