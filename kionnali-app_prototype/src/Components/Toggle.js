import { useState } from "react";
import "./Toggle.css";

export default function Toggle() {
	const [isToggled, setIsToggled] = useState(false);

	const handleClick = () => {
		setIsToggled(!isToggled);
	};

	return (
		<div
			className={`toggle ${isToggled ? "toggle-on" : ""}`}
			onClick={handleClick}>
			<div className={`toggle-circle ${isToggled ? "move-right" : ""}`}></div>
		</div>
	);
}
