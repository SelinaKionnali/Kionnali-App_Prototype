import { useState, useRef } from "react";
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

	const navbarItemRefs = useState([]); // Create an array of refs for each menu item

	const navbarHeadings = ["Toggle", "Home", "Msg", "Profile"];

	// Function to assign refs
	const setRefs = (element, index) => {
		navbarItemRefs.current[index] = element;
	};

	const handleNavbarClick = (props) => {
		history.push("/");
	};

	return (
		<div className="sticky-footer">
			<div className="navbar">
				<div className="navbar-item">
					<img
						className="hamburger-icon"
						src={hamburger}
						alt="hamburger-icon"
						onClick={handleNavbarClick}
					/>
				</div>
				<div className="navbar-item">
					<img
						className="toggle-icon"
						src={toggle}
						alt="toggle icon"
						onClick={handleNavbarClick}
					/>
				</div>
				<div className="navbar-item">
					<img
						className="home-icon"
						src={home}
						alt="home-icon"
						onClick={handleNavbarClick}
					/>
				</div>
				<div className="navbar-item">
					<img
						className="msg-icon"
						src={msg}
						alt="msg-icon"
						onClick={handleNavbarClick}
					/>
				</div>
				<div className="navbar-item">
					<img
						className="profile-icon"
						src={profile}
						alt="profile-icon"
						onClick={handleNavbarClick}
					/>
				</div>
			</div>
		</div>
	);
}
