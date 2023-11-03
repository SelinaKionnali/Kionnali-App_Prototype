import React from "react";
import "./Logo.css";
import LoadingScreen from "./LoadingScreen";

export default function Logo() {
	return (
		<>
			<div className="logo"></div>
			<div className="brand"></div>
			<LoadingScreen />
		</>
	);
}
