import React from "react";
import "./App.css";
import Content from "./Components/Content";

export default function App() {
	return (
		<div className="app">
			<div className="iphone-container">
				<div className="btn-1"></div>
				<div className="btn-2"></div>
				<div className="iphone-screen bezel-2">
					<div className="top-screen"></div>
					<div className="lrg-btn"></div>
					<Content />
				</div>
			</div>
		</div>
	);
}
