import { useState } from "react";
import "./MenuPage.css";
import "./CommandCenter.css";
import settingsIcon from "../Assets/MenuPage/settingsIcon.png";
import profilePicture from "../Assets/MenuPage/ProfilePicture.png";
import backArrow from "../Assets/MenuPage/backArrow.png";
import TileNarrow from "./TileComponents/TileNarrow";
import threeDots from "../Assets/Dashboard/threeDots.png";
import menuPageData from "./MenuPageData";
import { Link } from "react-router-dom";
import initialData from "./MenuPageDataTwo";

export default function MenuPage() {
	const [menuPageData, setMenuPageData] = useState(initialData);

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
				{menuPageData.columnOrder.map((columnId) => {
					const column = menuPageData.columns[columnId];
					return (
						<TileNarrow
							key={column.id}
							className="narrow-tile-menu-page">
							<h3 className="menu-item-title">
								{column.title}
								<img
									src={threeDots}
									alt=""
									className="menu-title-three-dots"
								/>
							</h3>
							<div className="menu-item-list">
								{column.subpageIds.map((subpageId) => {
									const subpage = menuPageData.subpages[subpageId];
									return (
										<Link
											to={subpage.link}
											key={subpage.id}
											style={{ textDecoration: "none" }}>
											<p className="menu-sub-item">
												{subpage.page}
												<div className="three-dot-container">
													<img
														src={threeDots}
														alt=""
														className="menu-item-three-dots"
													/>
												</div>
											</p>
										</Link>
									);
								})}
							</div>
						</TileNarrow>
					);
				})}
			</div>
		</div>
	);
}
