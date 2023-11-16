import React, { useState } from "react";
import "./Menu.css";
import ShellPage from "./ShellPage";
import LivingPage from "./LivingPage";
import DiningPage from "./DiningPage";
import KitchenPage from "./KitchenPage";

export default function Menu() {
	const [active, setActive] = useState("Shell"); // "Shell" is the default active menu item
	const [page, showPage] = useState("ShellPage"); // "ShellPage" is the default page
	const [sliderPosition, setSliderPosition] = useState(-8);

	const menuHeadings = ["Shell", "Living", "Dining", "Kitchen"];

	const pages = ["ShellPage", "LivingPage", "DiningPage", "KitchenPage"];

	const selectPage = (page) => {
		showPage(page);
	};

	const handleClick = (heading) => {
		setActive(heading);
		selectPage(pages[menuHeadings.indexOf(heading)]); // select the page that corresponds to the menu item
		setSliderPosition(menuHeadings.indexOf(heading) * 75); // move the slider to the correct position
	};

	return (
		<>
			<div className="menu-container">
				{menuHeadings.map((heading) => (
					<div
						key={heading}
						className={`menu-item ${active === heading ? "active" : ""}`}
						onClick={() => handleClick(heading)}>
						{heading}
					</div>
				))}
				<div
					className="menu-slider"
					style={{ transform: `translateX(${sliderPosition}px)` }}></div>{" "}
			</div>
			{page === "ShellPage" && <ShellPage />}
			{page === "LivingPage" && <LivingPage />}
			{page === "DiningPage" && <DiningPage />}
			{page === "KitchenPage" && <KitchenPage />}
		</>
	);
}
