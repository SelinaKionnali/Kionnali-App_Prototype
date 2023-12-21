import "./TileComponents/TileLarge.css";
import TileLarge from "./TileComponents/TileLarge";
import TileNarrow from "./TileComponents/TileNarrow";
import TileSmlSquare from "./TileComponents/TileSmlSquare";
import { DragDropContext } from "react-beautiful-dnd";

export default function DiningPage({ onDragEnd, initialData }) {
	const column = initialData.columns["column-3"];
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className="tile-large-container">
				<TileSmlSquare
					status1="Dining Page"
					status2="Dining Page"
				/>
				<TileLarge />
				<TileNarrow
					key={column.id}
					droppableId={column.id}
					isDroppable={true}
				/>
				<TileLarge />
			</div>
		</DragDropContext>
	);
}
