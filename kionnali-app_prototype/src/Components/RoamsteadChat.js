// Note: Roamstead Chat Component
import React, { useState } from "react";
import "./CommandCenter.css";
import "../Components/RoamsteadChat.css";
import ChatToggle from "./ChatToggle";

export default function RoamsteadChat() {
	const [active, setActive] = useState("History"); // "History" is the default active menu item

	const handleClick = () => {
		console.log("clicked");
	};

	return (
		<>
			<div className="command-center-container">
				<div className="roamstead-chat">
					<h1>Roamstead Chat</h1>
					<p>Ask me anything</p>
					<div className="cc-rounded-tile">
						<ChatToggle />
						<div className="button-frame">
							<div className="history-btn"></div>
							<div className="new-chat-btn"></div>
							<div className="notebook-btn"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
