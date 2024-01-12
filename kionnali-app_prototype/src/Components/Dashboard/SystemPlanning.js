import React from "react";
import "./SystemPlanning.css";
import SystemPlanImg from "../../Assets/Dashboard/SystemPlanImg.png"

export default function SystemPlanning(props) {
	return (
		<div className="planning-container grid">
							<div style={{ margin: "-16px" }}>
					<img
						src={SystemPlanImg}
						alt="Battery Charge Status"
					/>
				</div>

		</div>
	);
}
