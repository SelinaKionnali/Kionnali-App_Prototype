import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from "./Components/Logo";
import "./App.css";
import Dashboard from "./Components/Dashboard";

export default function App() {
	return (
		<Router>
			<div className="app">
				<div className="iphone-container">
					<div className="btn-1"></div>
					<div className="btn-2"></div>
					<div className="iphone-screen bezel-2">
						<div className="top-screen"></div>
						<div className="lrg-btn"></div>
						<Route
							exact
							path="/"
							component={Logo}
						/>
						<Route
							path="/dashboard"
							component={Dashboard}
						/>
					</div>
				</div>
			</div>
		</Router>
	);
}
