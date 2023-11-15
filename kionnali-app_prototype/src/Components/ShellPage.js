import "./TileLarge.css";
import TileLarge from "./TileLarge";
import TileNarrow from "./TileNarrow";
import TileSmlSquare from "./TileSmlSquare";
import TileXL from "./TileXL";

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
