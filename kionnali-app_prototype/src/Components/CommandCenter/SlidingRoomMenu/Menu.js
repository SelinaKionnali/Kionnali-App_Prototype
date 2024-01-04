// Note: This is the Command Center component that renders the sliding menu bar and the room pages

import React, { useState, useEffect, useRef } from "react";
import "./Menu.css";
import ShellPage from "./ShellPage";
import LivingPage from "./LivingPage";
import DiningPage from "./DiningPage";
import KitchenPage from "./KitchenPage";

export default function Menu() {
	const [active, setActive] = useState("Shell"); // "Shell" is the default active menu item
	const [page, showPage] = useState("ShellPage"); // "ShellPage" is the default page
	const menuItemRefs = useRef([]); // Create an array of refs for each menu item
	const [sliderStyle, setSliderStyle] = useState({}); // Style for the slider div element in the menu bar (see below) is set dynamically based on the active menu item

	// Function to assign refs
	const setRefs = (element, index) => {
		menuItemRefs.current[index] = element;
	};

	useEffect(() => {
		console.log("Menu Items Refs:", menuItemRefs.current); // Check if refs are correctly set

		const activeIndex = menuHeadings.indexOf(active);
		const activeItem = menuItemRefs.current[activeIndex];
		console.log("Active Item:", activeItem); // Check the active item

		if (activeItem) {
			const { left, width } = activeItem.getBoundingClientRect();
			const containerLeft =
				menuItemRefs.current[0].getBoundingClientRect().left;
			console.log("Left, Width, ContainerLeft:", left, width, containerLeft); // Check calculated positions

			setSliderStyle({
				width: `${width}px`,
				transform: `translateX(${left - containerLeft}px)`,
			});
		}
	}, [active]);

	const menuHeadings = ["Shell", "Living", "Dining", "Kitchen"];

	const pages = ["ShellPage", "LivingPage", "DiningPage", "KitchenPage"];

	const selectPage = (page) => {
		showPage(page);
	};

	const handleClick = (heading) => {
		setActive(heading);
		selectPage(pages[menuHeadings.indexOf(heading)]); // select the page that corresponds to the menu item
	};

	return (
		<>
			<div className="menu-container">
				{menuHeadings.map((heading, index) => (
					<div
						key={heading}
						ref={(el) => setRefs(el, index)} // Set ref using setRefs function
						className={`menu-item ${active === heading ? "active" : ""}`}
						onClick={() => handleClick(heading)}>
						{heading}
					</div>
				))}
				<div
					className="menu-slider"
					style={sliderStyle}></div>{" "}
			</div>
			{page === "ShellPage" && <ShellPage />}
			{page === "LivingPage" && <LivingPage />}
			{page === "DiningPage" && <DiningPage />}
			{page === "KitchenPage" && <KitchenPage />}
		</>
	);
}
