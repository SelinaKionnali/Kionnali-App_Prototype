import "./TileComponents/TileLarge.css";
import TileLarge from "./TileComponents/TileLarge";
import TileNarrow from "./TileComponents/TileNarrow";
import TileSmlSquare from "./TileComponents/TileSmlSquare";
import ThreeDots from "../Assets/Dashboard/threeDots.png";
import WattImg from "../Assets/CommandCenter/WattImg.png";
import UsersPhoneImg from "../Assets/CommandCenter/UsersPhoneImg.png";
import AllRoomsImg from "../Assets/CommandCenter/AllRoomsImg.png";
import MusicTrackImg from "../Assets/CommandCenter/MusicTrackImg.png";
import VolumeSliderImg from "../Assets/CommandCenter/VolumeSliderImg.png";

export default function LivingPage() {
	return (
		<div className="tile-large-container">
			<TileLarge
				title1="Sound System"
				watt1={WattImg}
				img1={ThreeDots}
				info1={UsersPhoneImg}
				info2={AllRoomsImg}
				content={MusicTrackImg}
				slider={VolumeSliderImg}
			/>
			<TileSmlSquare
				title1="Living Page"
				title2="Living Page"
			/>
			<TileNarrow />
			<TileLarge />
		</div>
	);
}
