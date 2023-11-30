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
import RoamsteadChat from "./Components/RoamsteadChat";
import CommunityFeed from "./Components/CommunityFeed";
import MenuPage from "./Components/MenuPage";
import PowerSystem from "./Components/RoamsteadSystems/PowerSystem";
import CompareSystems from "./Components/RoamsteadSystems/CompareSystems";
import FoodSystem from "./Components/RoamsteadSystems/FoodSystem";
import WaterSystem from "./Components/RoamsteadSystems/WaterSystem";
import ThermalSystem from "./Components/RoamsteadSystems/ThermalSystem";
import CompostSystem from "./Components/RoamsteadSystems/CompostSystem";
import EVSystem from "./Components/RoamsteadSystems/EVSystem";
import TestMenuPageTwo from "./Components/TestMenuPageTwo";

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
				<Route
					path="/roamstead-chat"
					component={RoamsteadChat}
				/>
				<Route
					path="/community-feed"
					component={CommunityFeed}
				/>
				<Route
					path="/menu"
					component={MenuPage}
				/>
				<Route
					path="/power-system"
					component={PowerSystem}
				/>
				<Route
					path="/compare-systems"
					component={CompareSystems}
				/>
				<Route
					path="/food-system"
					component={FoodSystem}
				/>
				<Route
					path="/water-system"
					component={WaterSystem}
				/>
				<Route
					path="/thermal-system"
					component={ThermalSystem}
				/>
				<Route
					path="/compost-system"
					component={CompostSystem}
				/>
				<Route
					path="/ev-system"
					component={EVSystem}
				/>
				<Route
					path="/test-menu-page"
					component={TestMenuPageTwo}
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
