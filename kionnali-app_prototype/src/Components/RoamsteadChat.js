import "./CommandCenter.css";
import "../Components/RoamsteadChat.css";
import HeaderBtns from "./HeaderBtns";
import searchIcon from "../Assets/RoamsteadChat/searchIcon.png";
import TileLarge from "./TileComponents/TileLarge";

export default function RoamsteadChat() {
	return (
		<>
			<div className="command-center-container">
				<div className="roamstead-chat">
					<h1>Roamstead Chat</h1>
					<p>Ask me anything</p>
					<div className="cc-rounded-tile">
						<HeaderBtns />
						<div className="search-box">
							<input
								type="text"
								placeholder="  Type here"
								className="search-input"
							/>
							<div className="button-container">
								<button className="search-button">
									<img
										src={searchIcon}
										alt="search icon"
									/>
								</button>
							</div>
						</div>
						<div className="chat-history">
							<h3>Today</h3>
							<TileLarge />
							<h3>Yesterday</h3>
							<TileLarge />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
