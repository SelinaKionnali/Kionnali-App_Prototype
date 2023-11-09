import React from "react";
import "./StickyFooter.css";
import StickyFooterNavbar from "../Assets/StickyFooterIcons/StickyFooterNavbar.png";

export default function StickyFooter() {
	return (
		<footer className="sticky-footer">
			<img
				src={StickyFooterNavbar}
				alt="Sticky Footer Navbar"
			/>{" "}
		</footer>
	);
}
