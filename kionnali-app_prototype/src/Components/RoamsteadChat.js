// Note: Roamstead Chat Component
import "./CommandCenter.css";
import "../Components/RoamsteadChat.css";
import ChatToggle from "./ChatToggle";
import ChatMenu from "./ChatMenu";

export default function RoamsteadChat() {
	return (
		<>
			<div className="command-center-container">
				<div className="roamstead-chat">
					<h1>Roamstead Chat</h1>
					<p>Ask me anything</p>
					<div className="cc-rounded-tile">
						<ChatToggle />
						<ChatMenu />
					</div>
				</div>
			</div>
		</>
	);
}
