import { useHistory } from "react-router-dom"; // if using react-router
import "./Home.css";
import "../App.css";

export default function Home() {
	let history = useHistory(); // if using react-router

	const handleClick = () => {
		// Navigate to Dashboard
		history.push("/dashboard"); // if using react-router
	};

	return (
		<div className="bezel-2">
			<div className="top-screen"></div>
			<div className="logo"></div>
			<div className="brand"></div>
			<div className="welcome"></div>
			<div className="off-grid"></div>
			<div
				className="button-container"
				onClick={handleClick}></div>
		</div>
	);
}
