import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import CommandCenter from "./Components/CommandCenter";

export default function App() {
	return (
		<Router>
			<div className="app">
				<div className="iphone-container">
					<div className="top-screen"></div>
					<div className="btn btn-1"></div>
					<div className="btn btn-2"></div>
					<div className="btn lrg-btn"></div>
					<Route
						exact
						path="/"
						component={Home}
					/>
					<Route
						path="/dashboard"
						component={Dashboard}
					/>
					<Route
						path="/command-center"
						component={CommandCenter}
					/>
				</div>
			</div>
		</Router>
	);
}
