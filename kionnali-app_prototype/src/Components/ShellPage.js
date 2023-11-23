import "./TileComponents/TileLarge.css";
import TileLarge from "./TileComponents/TileLarge";
import TileNarrow from "./TileComponents/TileNarrow";
import TileSmlSquare from "./TileComponents/TileSmlSquare";
import TileXL from "./TileComponents/TileXL";

export default function ShellPage() {
	return (
		<div className="tile-large-container">
			<TileXL />
			<TileSmlSquare />
			<TileLarge />
			<TileLarge />
			<TileNarrow />
			<TileLarge />
		</div>
	);
}
