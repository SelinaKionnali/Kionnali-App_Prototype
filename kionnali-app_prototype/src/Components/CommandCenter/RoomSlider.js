import { useState } from "react";
import "./Modes/ModeTiles.css";

export default function RoomSlider() {
	const [isRoomActive, setRoomActive] = useState("Master Bed");

	const handleClick = (heading) => {
		setRoomActive(heading);
	};

	return (
		<div className="modes-room slider">
			<div
				className={`room-tile ${
					isRoomActive === "Master Bed" ? "room-active" : ""
				}`}
				onClick={() => handleClick("Master Bed")}>
				<p>Master Bed</p>
			</div>
			<div
				className={`room-tile ${
					isRoomActive === "Living Room" ? "room-active" : ""
				}`}
				onClick={() => handleClick("Living Room")}>
				<p>Living Room</p>
			</div>
			<div
				className={`room-tile ${
					isRoomActive === "Bedroom" ? "room-active" : ""
				}`}
				onClick={() => handleClick("Bedroom")}>
				<p>Bedroom</p>
			</div>
			<div
				className={`room-tile ${
					isRoomActive === "Kitchen" ? "room-active" : ""
				}`}
				onClick={() => handleClick("Kitchen")}>
				<p>Kitchen</p>
			</div>
		</div>
	);
}
