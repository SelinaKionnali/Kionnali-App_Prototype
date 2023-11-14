import React, { useState } from "react";
import "./Menu.css";

export default function Menu() {
	const [active, setActive] = useState("Shell"); // "Shell" is the default active menu item

	const menuHeadings = ["Shell", "Living", "Dining", "Kitchen"];

	const handleClick = (heading) => {
		setActive(heading);
	};

	return (
		<div className="menu-container">
			{menuHeadings.map((heading) => (
				<div
					key={heading}
					className={`menu-item ${active === heading ? "active" : ""}`}
					onClick={() => handleClick(heading)}>
					{heading}
				</div>
			))}
			<div className={`menu-slider ${active}`}></div>
		</div>
	);
}
