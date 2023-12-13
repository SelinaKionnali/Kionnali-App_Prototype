import yellowCircle from "../../Assets/CommandCenter/yellowCircle.png";
import { useHistory } from "react-router-dom"; // if using react-router
import ModeTiles from "../ModeTiles";
import Menu from "../Menu";
import "./CommandCenter.css";

export default function CommandCenter() {
	let history = useHistory(); // if using react-router
	const handleDashboardClick = (e) => {
		history.push("/dashboard");
	};
	return (
		<>
			<div className="command-center-container">
				<div className="command-center">
					<h1>Command Center</h1>
					<div className="cc-rounded-tile">
						<div className="yellow-circle">
							<img
								src={yellowCircle}
								alt=""
								onClick={(e) => handleDashboardClick(e)}
							/>
						</div>
						<h2>Modes</h2>
						<div className="modes">
							<ModeTiles />
						</div>
						<Menu />
					</div>
				</div>
			</div>
		</>
	);
}
