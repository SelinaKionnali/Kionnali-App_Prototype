import { useHistory } from "react-router-dom"; // if using react-router
import "./Home.css";

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
			<div className="home-welcome"></div>
			<div className="button-container">
				<button
					className="sign-in-button"
					onClick={handleClick}>
					Sign In
				</button>
				<button
					className="sign-up-button"
					onClick={handleClick}>
					Sign Up
				</button>
			</div>
		</div>
	);
}
