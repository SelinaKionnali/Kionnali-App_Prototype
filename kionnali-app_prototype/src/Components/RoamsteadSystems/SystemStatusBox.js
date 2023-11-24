import React, { useState } from "react";
import "../Dashboard.css";

export default function SystemStatusBox({
	status,
	buttonText,
	onFullUpdateClick,
	expandedContent,
	handleHighlight,
}) {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
		if (typeof onFullUpdateClick === "function") {
			onFullUpdateClick();
		}
	};

	return (
		<div className="roamstead-status-box">
			<div className="sunflower-icon"></div>
			<h4>{status}</h4>
			<button
				className={`full-update-btn ${
					isExpanded ? "full-update-expanded" : ""
				}`}
				onClick={toggleExpand}>
				{isExpanded ? (
					<>
						{expandedContent}
						<br /> <br /> <br />
						<button
							className="tell-me-more"
							onClick={handleHighlight}>
							<span>Tell me more &gt;</span>
						</button>
						<button className="close-button">
							<span>X</span>
						</button>
					</>
				) : (
					<span>Full Update</span>
				)}
			</button>
		</div>
	);
}
