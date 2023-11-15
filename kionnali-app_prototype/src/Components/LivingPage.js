import "./TileLarge.css";
import TileLarge from "./TileLarge";
import TileNarrow from "./TileNarrow";

export default function LivingPage() {
	return (
		<div className="tile-large-container">
			<TileLarge />
			<TileLarge />

			<TileNarrow />
			<TileLarge />
		</div>
	);
}
