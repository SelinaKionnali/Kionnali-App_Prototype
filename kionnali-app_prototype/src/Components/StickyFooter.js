import { useState } from "react";
import "./StickyFooter.css";
import { useHistory } from "react-router-dom"; // if using react-router
import hamburger from "../Assets/StickyFooterIcons/hamburger.png";
import home from "../Assets/StickyFooterIcons/home.png";
import msg from "../Assets/StickyFooterIcons/msg.png";
import profile from "../Assets/StickyFooterIcons/profileIcon.png";
import toggle from "../Assets/StickyFooterIcons/toggleIcon.png";

export default function StickyFooter(props) {
	let history = useHistory(); // if using react-router
	const [active, setActive] = useState("Home"); // "Home" is the default active menu item

	const navbarItems = [
		{
			name: "Hamburger",
			icon: hamburger,
		},
		{
			name: "Toggle",
			icon: toggle,
		},
		{
			name: "Home",
			icon: home,
		},
		{
			name: "Msg",
			icon: msg,
		},
		{
			name: "Profile",
			icon: profile,
		},
	];

	const handleNavbarClick = (itemName) => {
		setActive(itemName);
		if (itemName === "Home") {
			history.push("/dashboard");
		} else if (itemName === "Msg") {
			history.push("/roamstead-chat");
		} else if (itemName === "Profile") {
			history.push("/profile");
		} else if (itemName === "Toggle") {
			history.push("/command-center");
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
							src={item.icon}
							alt={item.name}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
