import React from "react";
import { Droppable } from "react-beautiful-dnd";
import "./TileLarge.css";

const TileNarrow = ({
	droppableId,
	children,
	className,
	isDroppable,
	title1,
	img1,
	watt1,
	p,
	slider,
	btns,
	content1,
}) => {
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
		return (
			<div className={`narrow-tile ${className}`}>
				<div
					className="tile-heading"
					style={{ width: "150px" }}>
					<h3>{title1}</h3>
					<img
						src={img1}
						alt="drag and drop icon"
					/>
				</div>
				{watt1 && (
					<img
						src={watt1}
						style={{ margin: "8px" }}
						alt="watt icon"
					/>
				)}
				{p && <p style={{ margin: "0" }}>{p}</p>}
				{slider && (
					<img
						src={slider}
						alt="volume slider"
						style={{ margin: " 0 8px" }}
					/>
				)}
				{btns && (
					<img
						src={btns}
						alt="doorbell buttons"
					/>
				)}
				{children}
			</div>
		);
	}
};

export default TileNarrow;
