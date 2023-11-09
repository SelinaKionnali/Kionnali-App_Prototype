import "../Components/CommandCenter.css";
import yellowCircle from "../Assets/CommandCenter/yellowCircle.png";
import StickyFooter from "./StickyFooter";

export default function CommandCenter() {
	return (
		<>
			<div className="command-center-container">
				<div className="command-center">
					<h1>Command Center</h1>
					<div className="cc-rounded-tile">
						<img
							src={yellowCircle}
							alt=""
						/>
					</div>
				</div>
				<StickyFooter />
			</div>
		</>
	);
}
