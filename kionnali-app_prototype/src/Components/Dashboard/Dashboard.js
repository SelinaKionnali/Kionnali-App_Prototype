// Desc: Dashboard component
import "./Dashboard.css";
import "../../Components/CommandCenter/CommandCenter.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import ForumPostsCard from "../Dashboard/ForumPostsCard";
import MarketplaceCard from "./MarketplaceCard";
import SystemPlanning from "./SystemPlanning";
import "../../Components/StickyFooter.css";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialData = {
	cards: {
	  "card-1": { component: SystemPlanning, id: "1" },
	  "card-2": { component: ForumPostsCard, id: "2" },
	  "card-3": { component: MarketplaceCard, id: "3" },
	},
	columns: {
	  "column-1": {
		id: "column-1",
		title: "Dashboard Cards",
		cardIds: ["card-1", "card-2", "card-3"],
	  }
	},
	// If you have only one column you might not need 'columnOrder'
	columnOrder: ["column-1"],
  };


const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);
  
	return result;
  };

  // a  component that can render any of the cards based on a type
const CardComponent = ({ type }) => {
	if (type === 'SystemPlanning') return <SystemPlanning />;
	if (type === 'ForumPostsCard') return <ForumPostsCard />;
	if (type === 'MarketplaceCard') return <MarketplaceCard />;
	return null;
  };

export default function Dashboard(props) {
	let history = useHistory();

	const [isExpanded, setIsExpanded] = useState(false);
	const [state, setState] = useState(initialData);
	  
	const onDragEnd = (result) => {
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
	  
		const column = state.columns[source.droppableId];
		const newCardIds = Array.from(column.cardIds);
		newCardIds.splice(source.index, 1);
		newCardIds.splice(destination.index, 0, draggableId);
	  
		const newColumn = {
		  ...column,
		  cardIds: newCardIds,
		};
	  
		const newState = {
		  ...state,
		  columns: {
			...state.columns,
			[newColumn.id]: newColumn,
		  },
		};
	  
		setState(newState);
	  };
	const toggleRoamsteadStatus = (e) => {
		e.stopPropagation();
		setIsExpanded(!isExpanded);
	};

	// Click handlers
	const handleWeatherButtonClick = () => {
		history.push("/command-center");

		console.log("Weather button clicked");
		// Logic for weather button
	};

	const handleMorningModeClick = () => {
		// Navigate to command center
		history.push("/command-center");

		console.log("Morning mode button clicked");
	};

	const handlePreparationClick = () => {
		history.push("/command-center");

		console.log("Preparation button clicked");
	};

	const handleHighlight = (e) => {
		e.stopPropagation();
		console.log("highlight");
	};

	const handleRainfallClick = (e) => {
		e.stopPropagation();
		history.push("/command-center");

		console.log("Rainfall click");
	};

	const navigatePowerPage = (e) => {
		e.stopPropagation();
		history.push("/power-system");
	};

	const navigateThermalPage = (e) => {
		e.stopPropagation();
		history.push("/thermal-system");
	};

	const navigateWaterPage = (e) => {
		e.stopPropagation();
		history.push("/water-system");
	};

	const navigateCompostPage = (e) => {
		e.stopPropagation();
		history.push("/compost-system");
	};

	const expandedContent =
		"The weather for the next week is sunny with no upcoming extreme events. You will be net positive on energy and you have plenty of water in store. Your tomatoes are about a week from harvest!";

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className="container">
				<div className="dashboard">
					<div className="welcome"></div>
					<div className="off-grid"></div>
					*/can be replaced with HeaderBtns Component/*
					<div className="rounded-tile">
						<button
							className="weather-button"
							aria-label="Weather Information"
							onClick={handleWeatherButtonClick}></button>
						<button
							className="coffee-button"
							aria-label="Morning Mode"
							onClick={handleMorningModeClick}></button>
						<button
							className="flag-button"
							aria-label="Preparation"
							onClick={handlePreparationClick}></button>

						<div className="roamstead-status-container">
							<div className="roamstead-status-box">
								<div className="sunflower-icon"></div>
								<h4>Your Roamstead is looking good today.</h4>
								<button
									className={`full-update-btn ${
										isExpanded ? "full-update-expanded" : ""
									}`}
									onClick={toggleRoamsteadStatus}>
									{isExpanded ? (
										<>
											{expandedContent}
											<br /> <br /> <br />
											<button
												className="tell-me-more"
												onClick={handleHighlight}>
												<span>Tell me more &gt;</span>
											</button>
											<button className="close-button">
												<span>X</span>
											</button>
										</>
									) : (
										<span>Full Update</span>
									)}
								</button>
							</div>
							<div className="system-status-frame">
								<div className="system-status-box">
									<button
										className="power-system-tile"
										onClick={navigatePowerPage}></button>
								</div>
								<div className="system-status-box">
									<button
										className="thermal-system-tile"
										onClick={navigateThermalPage}></button>
								</div>
								<div className="system-status-box">
									<button
										className="water-system-tile"
										onClick={navigateWaterPage}></button>
								</div>
								<div className="system-status-box">
									<button
										className="compost-system-tile"
										onClick={navigateCompostPage}></button>
								</div>
							</div>
							
							<Droppable droppableId="column-1">
  {(provided) => (
    <div ref={provided.innerRef} {...provided.droppableProps}>
      {state.columns["column-1"].cardIds.map((cardId, index) => {
        const card = state.cards[cardId];
        const Component = card.component;
        return (
          <Draggable key={cardId} draggableId={cardId} index={index}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={provided.draggableProps.style}
				className="draggable-item"
              >
                <Component />
              </div>
            )}
          </Draggable>
        );
      })}
      {provided.placeholder}
    </div>
  )}
</Droppable>							
						</div>
					</div>
				</div>
			</div>
		</DragDropContext>	
	);
}
