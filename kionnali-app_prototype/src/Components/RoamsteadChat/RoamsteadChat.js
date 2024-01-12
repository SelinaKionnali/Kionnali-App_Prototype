import "../../Components/CommandCenter/CommandCenter.css";
import "../RoamsteadChat/RoamsteadChat.css";
import HeaderBtns from "../Dashboard/HeaderBtns";
import searchIcon from "../../Assets/RoamsteadChat/searchIcon.png";
import TileLarge from "../TileComponents/TileLarge";
import SearchBar from "../../Assets/RoamsteadChat/SearchBar.png"
import RoamsteadChatPage from "../../Assets/RoamsteadChat/RoamsteadChatPage.png"
import HeaderButtons from "../../Assets/RoamsteadChat/HeaderButtons.png"

export default function RoamsteadChat() {
	return (
		<>
			<div className="command-center-container">
				<div className="roamstead-chat">
					<h1>Roamstead Chat</h1>
					<p>Ask me anything</p>
					<div className="cc-rounded-tile">
					<img 
						src={HeaderButtons}
						alt="Battery Charge Status"
						style={{margin: "18px"}}
						/>

						<img 
						src={SearchBar}
						alt="Battery Charge Status"
						/>
												<img 
						src={RoamsteadChatPage}
						alt="Battery Charge Status"
						/>


					</div>
				
				</div>
			</div>
		</>
	);
}
