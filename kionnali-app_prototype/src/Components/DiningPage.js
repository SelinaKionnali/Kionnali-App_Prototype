import "./TileComponents/TileLarge.css";
import TileLarge from "./TileComponents/TileLarge";
import TileNarrow from "./TileComponents/TileNarrow";
import TileSmlSquare from "./TileComponents/TileSmlSquare";

export default function DiningPage() {
	return (
		<div className="tile-large-container">
			<TileSmlSquare
				status1="Dining Page"
				status2="Dining Page"
			/>
			<TileLarge />
			<TileNarrow />
			<TileLarge />
		</div>
	);
}
