// Desc: Dashboard component
import "./Dashboard.css";
import { useState } from "react";

export default function Dashboard() {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleToggle = (e) => {
		e.stopPropagation();
		setIsExpanded(!isExpanded);
	};

	const handleHighlight = (e) => {
		e.stopPropagation();
		console.log("highlight");
	};

	const expandedContent =
		"The weather for the next week is sunny with no upcoming extreme events. You will be net positive on energy and you have plenty of water in store. Your tomatoes are about a week from harvest!";

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
							<button
								className={`full-update ${
									isExpanded ? "full-update-expanded" : ""
								}`}
								onClick={handleToggle}>
								{isExpanded ? (
									<>
										{expandedContent}
										<br /> <br /> <br />
										<button
											className="tell-me-more"
											onClick={handleHighlight}>
											<span>Tell me more &gt;</span>
										</button>
										<button className="close-button">
											<span>X Close</span>
										</button>
									</>
								) : (
									<span>Full Update</span>
								)}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
