import React from "react";
import "./StickyFooter.css";
import StickyFooterNavbar from "../Assets/StickyFooterIcons/StickyFooterNavbar.png";
import { useHistory } from "react-router-dom"; // if using react-router

export default function StickyFooter(props) {
	let history = useHistory(); // if using react-router

	const handleNavbarClick = (props) => {
		history.push("/");
	};

	return (
		<div className="sticky-footer">
			<img
				src={StickyFooterNavbar}
				alt="Sticky Footer Navbar"
				onClick={(e) => {
					handleNavbarClick(e);
				}}
			/>{" "}
		</div>
	);
}
