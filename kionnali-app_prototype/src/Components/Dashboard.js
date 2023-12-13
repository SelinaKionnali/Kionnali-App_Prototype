// Desc: Dashboard component
import "./Dashboard.css";
import "../Components/CommandCenter/CommandCenter.css";
import { useState } from "react";
import { useHistory } from "react-router-dom"; // if using react-router
import ForumPostsCard from "./ForumPostsCard";
import MarketplaceCard from "./MarketplaceCard";
import SystemPlanning from "./SystemPlanning";
import "../Components/StickyFooter.css";

export default function Dashboard(props) {
	let history = useHistory(); // if using react-router

	const [isExpanded, setIsExpanded] = useState(false);

	const toggleRoamsteadStatus = (e) => {
		e.stopPropagation();
		setIsExpanded(!isExpanded);
	};

	// Click handlers
	const handleWeatherButtonClick = () => {
		history.push("/command-center");

		console.log("Weather button clicked");
		// Logic for weather button
	};

	const handleMorningModeClick = () => {
		// Navigate to command center
		history.push("/command-center");

		console.log("Morning mode button clicked");
	};

	const handlePreparationClick = () => {
		history.push("/command-center");

		console.log("Preparation button clicked");
	};

	const handleHighlight = (e) => {
		e.stopPropagation();
		console.log("highlight");
	};

	const handleRainfallClick = (e) => {
		e.stopPropagation();
		history.push("/command-center");

		console.log("Rainfall click");
	};

	const navigatePowerPage = (e) => {
		e.stopPropagation();
		history.push("/power-system");
	};

	const navigateThermalPage = (e) => {
		e.stopPropagation();
		history.push("/thermal-system");
	};

	const navigateWaterPage = (e) => {
		e.stopPropagation();
		history.push("/water-system");
	};

	const navigateCompostPage = (e) => {
		e.stopPropagation();
		history.push("/compost-system");
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
							aria-label="Weather Information"
							onClick={handleWeatherButtonClick}></button>
						<button
							className="coffee-button"
							aria-label="Morning Mode"
							onClick={handleMorningModeClick}></button>
						<button
							className="flag-button"
							aria-label="Preparation"
							onClick={handlePreparationClick}></button>

						<div className="roamstead-status-container">
							<div className="roamstead-status-box">
								<div className="sunflower-icon"></div>
								<h4>Your Roamstead is looking good today.</h4>
								<button
									className={`full-update-btn ${
										isExpanded ? "full-update-expanded" : ""
									}`}
									onClick={toggleRoamsteadStatus}>
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
									<button
										className="power-system-tile"
										onClick={navigatePowerPage}></button>
								</div>
								<div className="system-status-box">
									<button
										className="thermal-system-tile"
										onClick={navigateThermalPage}></button>
								</div>
								<div className="system-status-box">
									<button
										className="water-system-tile"
										onClick={navigateWaterPage}></button>
								</div>
								<div className="system-status-box">
									<button
										className="compost-system-tile"
										onClick={navigateCompostPage}></button>
								</div>
							</div>
							<SystemPlanning handleClick={handleRainfallClick} />
							<ForumPostsCard />
							<MarketplaceCard />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
