// Desc: Dashboard component
import "./Dashboard.css";
import { useHistory } from "react-router-dom"; // if using react-router

export default function Dashboard() {
	let history = useHistory(); // if using react-router

	return (
		<>
			<div className="container">
				<div className="dashboard">
					<div className="welcome"></div>
					<div className="off-grid"></div>

					<div className="rounded-tile">
						<button class="weather-button"></button>
						<button class="coffee-button"></button>
						<button class="flag-button"></button>
						<div className="roamstead-status">
							<div className="sunflower-icon"></div>
							<h4>Your Roamstead is looking good today.</h4>
							<button className="full-update">Full Update</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
