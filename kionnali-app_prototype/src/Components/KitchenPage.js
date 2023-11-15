import "./TileLarge.css";
import TileLarge from "./TileLarge";
import TileNarrow from "./TileNarrow";

export default function KitchenPage() {
	return (
		<div className="tile-large-container">
			<TileLarge />
			<TileLarge />
			<TileLarge />
			<TileNarrow />
		</div>
	);
}
