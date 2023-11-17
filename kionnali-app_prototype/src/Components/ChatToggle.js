import { useState } from "react";
import "./ChatToggle.css";

export default function ChatToggle() {
	const [isToggled, setIsToggled] = useState(false);

	const handleClick = () => {
		setIsToggled(!isToggled);
	};

	return (
		<>
			<div className="chat-toggle-wrapper">
				<div
					className={`chat-toggle ${isToggled ? "toggle-on" : ""}`}
					onClick={handleClick}>
					{" "}
					<span className="search">SEARCH</span>
					<div
						className={`chat-toggle-circle ${isToggled ? "move-right" : ""}`}>
						<span className="chat">CHAT</span>
					</div>
				</div>
			</div>
		</>
	);
}
