import {
	BrowserRouter as Router,
	Route,
	Switch,
	useLocation,
} from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import CommandCenter from "./Components/CommandCenter";
import StickyFooter from "./Components/StickyFooter";

function AppWithFooter() {
	let location = useLocation();

	return (
		<>
			{/* Your route components here */}
			<Switch>
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
			</Switch>

			{/* Conditionally render the StickyFooter based on the route */}
			{location.pathname !== "/" && <StickyFooter />}
		</>
	);
}

export default function App() {
	return (
		<Router>
			<div className="app">
				<div className="iphone-container">
					<div className="top-screen"></div>
					<div className="btn btn-1"></div>
					<div className="btn btn-2"></div>
					<div className="btn lrg-btn"></div>
					<AppWithFooter />
				</div>
			</div>
		</Router>
	);
}
