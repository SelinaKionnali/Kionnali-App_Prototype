import { useState } from "react";
import "./StickyFooter.css";
import { useHistory } from "react-router-dom"; // if using react-router
import hamburger from "../Assets/StickyFooterIcons/hamburger.png";
import hamburgerActive from "../Assets/StickyFooterIcons/hamburgerActive.png";
import home from "../Assets/StickyFooterIcons/home.png";
import homeActive from "../Assets/StickyFooterIcons/homeActive.png";
import msg from "../Assets/StickyFooterIcons/msg.png";
import msgActive from "../Assets/StickyFooterIcons/msgActive.png";
import profile from "../Assets/StickyFooterIcons/profileIcon.png";
import profileActive from "../Assets/StickyFooterIcons/profileActive.png";
import toggle from "../Assets/StickyFooterIcons/toggleIcon.png";
import toggleActive from "../Assets/StickyFooterIcons/toggleActive.png";

export default function StickyFooter(props) {
	let history = useHistory(); // if using react-router
	const [active, setActive] = useState("Home"); // "Home" is the default active menu item

	const navbarItems = [
		{
			name: "Hamburger",
			icon: hamburger,
			activeIcon: hamburgerActive,
		},
		{
			name: "Toggle",
			icon: toggle,
			activeIcon: toggleActive,
		},
		{
			name: "Home",
			icon: home,
			activeIcon: homeActive,
		},
		{
			name: "Msg",
			icon: msg,
			activeIcon: msgActive,
		},
		{
			name: "Profile",
			icon: profile,
			activeIcon: profileActive,
		},
	];

	const handleNavbarClick = (itemName) => {
		setActive(itemName);
		if (itemName === "Home") {
			history.push("/dashboard");
		} else if (itemName === "Msg") {
			history.push("/roamstead-chat");
		} else if (itemName === "Profile") {
			history.push("/community-feed");
		} else if (itemName === "Toggle") {
			history.push("/command-center");
		} else if (itemName === "Hamburger") {
			history.push("/menu");
		}
	};

	return (
		<div className="sticky-footer">
			<div className="navbar">
				{navbarItems.map((item, index) => (
					<div
						key={index}
						className={`navbar-item ${active === item.name ? "active" : ""}`}
						onClick={() => handleNavbarClick(item.name)}>
						<img
							className={`${item.name.toLowerCase()}-icon`}
							src={active === item.name ? item.activeIcon : item.icon}
							alt={item.name}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
