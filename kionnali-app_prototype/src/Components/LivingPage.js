import "./TileComponents/TileLarge.css";
import TileLarge from "./TileComponents/TileLarge";
import TileNarrow from "./TileComponents/TileNarrow";
import TileSmlSquare from "./TileComponents/TileSmlSquare";

export default function LivingPage() {
	return (
		<div className="tile-large-container">
			<TileLarge />
			<TileSmlSquare
				status1="Living Page"
				status2="Living Page"
			/>
			<TileNarrow />
			<TileLarge />
		</div>
	);
}
