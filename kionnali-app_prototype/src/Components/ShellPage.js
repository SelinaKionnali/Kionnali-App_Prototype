import "./TileComponents/TileLarge.css";
import TileLarge from "./TileComponents/TileLarge";
import TileNarrow from "./TileComponents/TileNarrow";
import TileSmlSquare from "./TileComponents/TileSmlSquare";
import TileXL from "./TileComponents/TileXL";
import FoundationImg from "../Assets/CommandCenter/FoundationImg.png";
import ThreeDots from "../Assets/Dashboard/threeDots.png";
import OpenCloseImg from "../Assets/CommandCenter/OpenCloseImg.png";
import WattImg from "../Assets/CommandCenter/WattImg.png";

export default function ShellPage({ title, img1, content }) {
	return (
		<div className="tile-large-container">
			<TileXL
				title="Foundation"
				img1={ThreeDots}
				content={FoundationImg}
			/>
			<TileSmlSquare
				title1="Porch"
				img1={ThreeDots}
				content1={OpenCloseImg}
				watt1={WattImg}
				title2="Clear Story"
				img2={ThreeDots}
				content2={OpenCloseImg}
				watt2={WattImg}
			/>

			<TileLarge />
			<TileLarge />
			<TileNarrow />
			<TileLarge />
		</div>
	);
}
