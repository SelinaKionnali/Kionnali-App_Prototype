import "./TileComponents/TileLarge.css";
import TileLarge from "./TileComponents/TileLarge";
import TileNarrow from "./TileComponents/TileNarrow";
import TileSmlSquare from "./TileComponents/TileSmlSquare";

export default function KitchenPage() {
	return (
		<div className="tile-large-container">
			<TileSmlSquare
				status1="Kitchen Page"
				status2="Kitchen Page"
			/>
			<TileLarge />
			<TileLarge />
			<TileNarrow />
		</div>
	);
}
