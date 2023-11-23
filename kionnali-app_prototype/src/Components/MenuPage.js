import "./MenuPage.css";
import "./CommandCenter.css";
import settingsIcon from "../Assets/MenuPage/settingsIcon.png";
import profilePicture from "../Assets/MenuPage/ProfilePicture.png";
import backArrow from "../Assets/MenuPage/backArrow.png";
import TileNarrow from "./TileComponents/TileNarrow";
import threeDots from "../Assets/Dashboard/threeDots.png";
import arrow from "../Assets/MenuPage/arrow.png";
import menuPageData from "./MenuPageData";
import { Link } from "react-router-dom";

export default function MenuPage() {
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
				{menuPageData.map((category, index) => (
					<TileNarrow
						key={index}
						className="narrow-tile-menu-page">
						<h3 className="menu-item-title">
							{category.category}
							<img
								src={threeDots}
								alt=""
								className="menu-three-dots"
							/>
						</h3>
						<div className="menu-item-list">
							{category.subpages.map((subpage, subIndex) => (
								<Link
									style={{ textDecoration: "none" }}
									to={subpage.link}
									key={subIndex}>
									<p className="menu-sub-item">{subpage.page}</p>
								</Link>
							))}
						</div>
					</TileNarrow>
				))}
			</div>
		</div>
	);
}
