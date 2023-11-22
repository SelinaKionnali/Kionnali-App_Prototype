import "./MenuPage.css";
import "./CommandCenter.css";
import settingsIcon from "../Assets/MenuPage/settingsIcon.png";
import profilePicture from "../Assets/MenuPage/ProfilePicture.png";
import backArrow from "../Assets/MenuPage/backArrow.png";
import TileNarrow from "./TileNarrow";
import threeDots from "../Assets/Dashboard/threeDots.png";

export default function MenuPage() {
	const menuItems = {
		"Clean and Tidy": ["Organiser", "Shopping List", "Cleaning"],
		Connect: ["Marketplace", "Roamstead Chat", "Community Feed", "Forum"],

		Systems: [
			"Compare All",
			"Food",
			"Water",
			"Power",
			"Thermal",
			"Compost",
			"EV",
		],
		Weather: [],
		Preparedness: [],
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
			<div className="menu-section-container">
				{Object.keys(menuItems).map((item, index) => (
					<TileNarrow
						key={index}
						className="narrow-tile-menu-page">
						<h3 className="menu-item-title">
							{item}&nbsp;&nbsp;
							<img
								src={threeDots}
								alt=""
								className="menu-three-dots"
							/>
						</h3>

						<div className="menu-item-list">
							{menuItems[item].map((subItem, index) => (
								<p
									key={index}
									className="menu-sub-item">
									{subItem}
								</p>
							))}
						</div>
					</TileNarrow>
				))}
			</div>
		</div>
	);
}
