import React from "react";
import LoadingScreen from "./LoadingScreen";
import Dashboard from "./Dashboard";
import CommandCenter from "./CommandCenter";

export default function Content() {
	return (
		<div className="content">
			<LoadingScreen />
			<Dashboard />
			<CommandCenter />
		</div>
	);
}
