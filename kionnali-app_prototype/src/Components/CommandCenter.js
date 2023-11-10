import "../Components/CommandCenter.css";
import yellowCircle from "../Assets/CommandCenter/yellowCircle.png";
import StickyFooter from "./StickyFooter";
import { useHistory } from "react-router-dom"; // if using react-router

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
						<img
							src={yellowCircle}
							alt=""
							onClick={(e) => handleDashboardClick(e)}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
