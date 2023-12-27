import "./TileComponents/TileLarge.css";
import TileLarge from "./TileComponents/TileLarge";
import TileNarrow from "./TileComponents/TileNarrow";
import TileSmlSquare from "./TileComponents/TileSmlSquare";
import TileXL from "./TileComponents/TileXL";
import FoundationImg from "../Assets/CommandCenter/FoundationImg.png";
import ThreeDots from "../Assets/Dashboard/threeDots.png";

export default function ShellPage({ title, img1, content }) {
	return (
		<div className="tile-large-container">
			<TileXL
				title="Foundation"
				img1={ThreeDots}
				content={FoundationImg}
			/>
			<TileSmlSquare
				status1="Shell Page"
				status2={"Shell Page"}
			/>

			<TileLarge />
			<TileLarge />
			<TileNarrow />
			<TileLarge />
		</div>
	);
}
