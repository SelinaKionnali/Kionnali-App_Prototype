import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";
import Dashboard from "./Components/Dashboard";

export default function App() {
	return (
		<Router>
			<div className="app">
				<div className="iphone-container">
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
				</div>
			</div>
		</Router>
	);
}
