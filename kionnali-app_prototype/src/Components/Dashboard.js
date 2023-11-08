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

	const handleClick = (e) => {
		e.stopPropagation();
		console.log("click");
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
						<button
							className="weather-button"
							aria-label="Weather Information"></button>
						<button
							className="coffee-button"
							aria-label="Morning Mode"></button>
						<button
							className="flag-button"
							aria-label="Preparation"></button>

						<div className="roamstead-status-container">
							<div className="roamstead-status-box">
								<div className="sunflower-icon"></div>
								<h4>Your Roamstead is looking good today.</h4>
								<button
									className={`full-update-btn ${
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
												<span>X</span>
											</button>
										</>
									) : (
										<span>Full Update</span>
									)}
								</button>
							</div>
							<div className="system-status-frame">
								<div className="system-status-box">
									<button className="power-system-tile"></button>
								</div>
								<div className="system-status-box">
									<button className="thermal-system-tile"></button>
								</div>
								<div className="system-status-box">
									<button className="water-system-tile"></button>
								</div>
								<div className="system-status-box">
									<button className="compost-system-tile"></button>
								</div>
							</div>
							<div className="planning-container grid">
								<div className="rainfall-tile grid-1">
									<h5>Rainfall</h5>
									<div
										className="rainfall-tile-img"
										onClick={handleClick}></div>
									<p>No rainfall collection</p>
									<button className="water-data-btn">
										See water data &gt;{" "}
									</button>
								</div>
								<div className="planning-box grid-2"></div>
								<div className="harvest-tile grid-3"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
