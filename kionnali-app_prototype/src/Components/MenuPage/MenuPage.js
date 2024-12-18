import { useState } from "react";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import "./MenuPage.css";
import "../CommandCenter/CommandCenter.css";
import settingsIcon from "../../Assets/MenuPage/settingsIcon.png";
import profilePicture from "../../Assets/MenuPage/ProfilePicture.png";
import backArrow from "../../Assets/MenuPage/backArrow.png";
import TileNarrow from "../TileComponents/TileNarrow";
import threeDots from "../../Assets/Dashboard/threeDots.png";
import DragandDropIcon from "../../Assets/Dashboard/DragandDropIcon.png"
import { Link } from "react-router-dom";
import initialData from "./MenuPageDataTwo";

export default function MenuPage() {
	const [menuPageData, setMenuPageData] = useState(initialData);

	const onDragEnd = (result) => {
		console.log("Draggable ID:", result.draggableId);
		const { destination, source, draggableId } = result;

		if (!destination) {
			return;
		}

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		const start = menuPageData.columns[source.droppableId];
		const finish = menuPageData.columns[destination.droppableId];

		if (start === finish) {
			const newSubpageIds = Array.from(start.subpageIds);
			newSubpageIds.splice(source.index, 1);
			newSubpageIds.splice(destination.index, 0, draggableId);

			const newColumn = {
				...start,
				subpageIds: newSubpageIds,
			};

			const newState = {
				...menuPageData,
				columns: {
					...menuPageData.columns,
					[newColumn.id]: newColumn,
				},
			};

			setMenuPageData(newState);
			return;
		}

		// Moving from one list to another
		const startSubpageIds = Array.from(start.subpageIds);
		startSubpageIds.splice(source.index, 1);
		const newStart = {
			...start,
			subpageIds: startSubpageIds,
		};

		const finishSubpageIds = Array.from(finish.subpageIds);
		finishSubpageIds.splice(destination.index, 0, draggableId);
		const newFinish = {
			...finish,
			subpageIds: finishSubpageIds,
		};

		const newState = {
			...menuPageData,
			columns: {
				...menuPageData.columns,
				[newStart.id]: newStart,
				[newFinish.id]: newFinish,
			},
		};
		setMenuPageData(newState);
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className="command-center-container">
				<header className="menu-header">
					<img
						src={backArrow}
						alt="back arrow"
						className="back-arrow"
						onClick={() => {
							window.history.back();
						}}
					/>
					<h2 className="menu-title">Menu</h2>
					<img
						src={profilePicture}
						alt="user profile"
						className="profile-picture"
					/>
					<img
						className="settings-button"
						src={settingsIcon}
						alt="Settings Icon"
					/>
				</header>
				<div className="menu-section-container">
					{menuPageData.columnOrder.map((columnId) => {
						console.log("columnId: ", columnId);
						const column = menuPageData.columns[columnId];
						return (
							<TileNarrow
								key={column.id}
								droppableId={column.id}
								isDroppable={true}
								className="narrow-tile-menu-page">
								<h3 className="menu-item-title">
									{column.title}
									
								</h3>
								<div className="menu-item-list">
									{column.subpageIds.map((subpageId, index) => {
										const subpage = menuPageData.subpages[subpageId];
										console.log("Subpage Data: ", subpage);
										if (!subpage) {
											console.log(`No subpage found for id: ${subpageId}`);
											return null;
										}
										return (
											<Draggable
												key={subpageId}
												draggableId={subpageId}
												index={index}>
												{(provided) => (
													<div
														{...provided.draggableProps}
														{...provided.dragHandleProps}
														ref={provided.innerRef}>
														<Link
															to={subpage.link}
															index={index}
															style={{ textDecoration: "none" }}>
															<p className="menu-sub-item">
																{subpage.page}
																<div className="three-dot-container">
																	<img
																		src={DragandDropIcon}
																		alt=""
																		className="menu-item-three-dots"
																	/>
																</div>
															</p>
														</Link>
													</div>
												)}
											</Draggable>
										);
									})}
								</div>
							</TileNarrow>
						);
					})}
				</div>
			</div>
		</DragDropContext>
	);
}
