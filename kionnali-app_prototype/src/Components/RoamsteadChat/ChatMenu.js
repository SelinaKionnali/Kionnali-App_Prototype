// This component is no longer in use - it was replaced by the Header Buttons component.

import React, { useState, useEffect, useRef } from "react";
import "./ChatMenu.css";
import ShellPage from "../CommandCenter/SlidingRoomMenu/ShellPage";
import LivingPage from "../CommandCenter/SlidingRoomMenu/LivingPage";
import DiningPage from "../CommandCenter/SlidingRoomMenu/DiningPage";

export default function ChatMenu() {
	const [active, setActive] = useState("History"); // "History" is the default active menu item
	const [page, showPage] = useState("ShellPage"); // "ShellPage" is the default page
	const chatMenuItemRefs = useRef([]); // Create an array of refs for each menu item
	const [chatSlider, setChatSlider] = useState({}); // Style for the slider

	// Function to assign refs
	const setRefs = (element, index) => {
		chatMenuItemRefs.current[index] = element;
	};

	useEffect(() => {
		console.log("Chat Menu Items Refs:", chatMenuItemRefs.current); // Check if refs are correctly set

		const activeIndex = chatMenuHeadings.indexOf(active);
		const activeItem = chatMenuItemRefs.current[activeIndex];
		console.log("Active Item:", activeItem); // Check the active item

		if (activeItem) {
			const { left, width } = activeItem.getBoundingClientRect();
			const chatContainerLeft =
				chatMenuItemRefs.current[0].getBoundingClientRect().left;
			console.log(
				"Left, Width, ContainerLeft:",
				left,
				width,
				chatContainerLeft
			); // Check calculated positions

			setChatSlider({
				width: `${width}px`,
				transform: `translateX(${left - chatContainerLeft}px)`,
			});
		}
	}, [active]);

	const chatMenuHeadings = ["History", "New Chat", "Notebook"];

	const pages = ["History", "NewChat", "Notebook"];

	const selectPage = (page) => {
		showPage(page);
	};

	const handleClick = (heading) => {
		setActive(heading);
		selectPage(pages[chatMenuHeadings.indexOf(heading)]); // select the page that corresponds to the menu item
	};

	return (
		<>
			<div className="button-frame">
				{chatMenuHeadings.map((heading, index) => (
					<div
						key={heading}
						ref={(el) => setRefs(el, index)} // Set ref using setRefs function
						className={`chat-menu-item ${active === heading ? "active" : ""}`}
						onClick={() => handleClick(heading)}>
						{heading}
					</div>
				))}
				<div
					className="chat-menu-slider"
					style={chatSlider}></div>
			</div>
			{page === "History" && <ShellPage />}
			{page === "NewChat" && <LivingPage />}
			{page === "Notebook" && <DiningPage />}
		</>
	);
}
