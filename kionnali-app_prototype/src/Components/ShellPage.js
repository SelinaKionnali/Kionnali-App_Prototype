import "./TileComponents/TileLarge.css";
import TileLarge from "./TileComponents/TileLarge";
import TileNarrow from "./TileComponents/TileNarrow";
import TileSmlSquare from "./TileComponents/TileSmlSquare";
import TileXL from "./TileComponents/TileXL";

export default function ShellPage() {
	return (
		<div className="tile-large-container">
			<TileXL />
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
