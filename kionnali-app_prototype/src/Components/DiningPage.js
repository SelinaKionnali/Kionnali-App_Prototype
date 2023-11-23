import "./TileComponents/TileLarge.css";
import TileLarge from "./TileComponents/TileLarge";
import TileNarrow from "./TileComponents/TileNarrow";

export default function DiningPage() {
	return (
		<div className="tile-large-container">
			<TileLarge />
			<TileNarrow />
			<TileLarge />
		</div>
	);
}
