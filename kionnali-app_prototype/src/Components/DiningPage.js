import "./TileLarge.css";
import TileLarge from "./TileLarge";
import TileNarrow from "./TileNarrow";

export default function DiningPage() {
	return (
		<div className="tile-large-container">
			<TileLarge />
			<TileNarrow />
			<TileLarge />
		</div>
	);
}
