import "./TileComponents/TileLarge.css";
import TileLarge from "./TileComponents/TileLarge";
import TileNarrow from "./TileComponents/TileNarrow";

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
