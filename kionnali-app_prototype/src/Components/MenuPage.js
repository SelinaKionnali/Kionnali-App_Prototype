import "./MenuPage.css";
import "./CommandCenter.css";
import settingsIcon from "../Assets/MenuPage/settingsIcon.png";
import profilePicture from "../Assets/MenuPage/ProfilePicture.png";
import backArrow from "../Assets/MenuPage/backArrow.png";

export default function MenuPage() {
	const menuItems = {
		Cleaning: ["Organiser", "Shopping List", "Cleaning"],
		Systems: [
			"Compare All",
			"Food",
			"Water",
			"Power",
			"Thermal",
			"Compost",
			"EV",
		],
		Connect: ["Marketplace", "Roamstead Chat", "Community Feed", "Forum"],
		Other: ["Weather", "Preparedness"],
		Settings: ["Profile", "Command Center", "Logout"],
	};

	return (
		<div className="command-center-container">
			<header className="menu-header">
				<img
					src={backArrow}
					alt="back arrow"
					className="back-arrow"
					onClick={() => {
						window.history.back();
					}}
				/>
				<h2 className="menu-title">Menu</h2>
				<img
					src={profilePicture}
					alt="user profile"
					className="profile-picture"
				/>
				<img
					className="settings-button"
					src={settingsIcon}
					alt="Settings Icon"
				/>
			</header>
			<nav className="menu-section-container">
				{Object.keys(menuItems).map((item, index) => (
					<div
						key={index}
						className="menu-item-container">
						<h3 className="menu-item-title">{item}</h3>
						<div className="menu-item-list">
							{menuItems[item].map((subItem, index) => (
								<p
									key={index}
									className="menu-sub-item">
									{subItem}
								</p>
							))}
						</div>
					</div>
				))}
			</nav>
		</div>
	);
}
