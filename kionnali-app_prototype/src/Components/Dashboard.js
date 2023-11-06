// Desc: Dashboard component
import "./Dashboard.css";
import { useHistory } from "react-router-dom"; // if using react-router

export default function Dashboard() {
	let history = useHistory(); // if using react-router

	return (
		<>
			<div className="dashboard">
				<div className="rounded-tile">
					<button class="weather-button"></button>
					<button class="coffee-button"></button>
					<button class="flag-button"></button>

					<div className="coffee-tile"></div>
					<div className="weather-tile"></div>
					<div className="flag-tile"></div>
				</div>
			</div>
		</>
	);
}
