import React from "react";
import { Droppable } from "react-beautiful-dnd";
import "./TileLarge.css";

const TileNarrow = ({ droppableId, children, className, isDroppable }) => {
	if (isDroppable) {
		return (
			<Droppable droppableId={droppableId}>
				{(provided) => (
					<div
						ref={provided.innerRef}
						{...provided.droppableProps}
						className={`narrow-tile ${className}`}>
						{children}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		);
	} else {
		return <div className={`narrow-tile ${className}`}>{children}</div>;
	}
};

export default TileNarrow;
