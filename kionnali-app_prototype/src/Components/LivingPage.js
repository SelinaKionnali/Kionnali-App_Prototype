import "./TileComponents/TileLarge.css";
import TileLarge from "./TileComponents/TileLarge";
import TileNarrow from "./TileComponents/TileNarrow";

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
