import "../CommandCenter/CommandCenter.css";
import "./PowerSystem.css";
import ThermalSystemMainImg from "../../Assets/PowerSystem/ThermalSystemMainImg.png";
import SystemStatusBox from "./SystemStatusBox";
import Thermostat from "../../Assets/ThermalSystem/Thermostat.png"
import ThermoChart from "../../Assets/ThermalSystem/ThermoChart.png"
import OutdoorAir from "../../Assets/ThermalSystem/OutdoorAir.png"
import IndoorAir from "../../Assets/ThermalSystem/IndoorAir.png"
import Humidity from "../../Assets/ThermalSystem/Humidity.png"
import SolarThermalChart from "../../Assets/ThermalSystem/SolarThermalChart.png"

export default function ThermalSystem() {
	const thermalStatus = "You are recovering lots of heat from cooking today.";
	const expandedContent =
		"Keep up the good work!.";


	return (
		<div className="command-center-container">
			<div className="power-page">
				<img
					src={ThermalSystemMainImg}
					alt="Thermal System Page"
				/>
				<SystemStatusBox
					status={thermalStatus}
					expandedContent={expandedContent}
				/>
				<div style={{margin: "-8px"}} >
					<img
						src={Thermostat}
						alt="Battery Charge Status"
						style={{margin: "-8px"}}
					/>
					<img
						src={ThermoChart}
						alt="Battery Charge Status"
						style={{margin: "-8px"}}
					/>
					<img
						src={OutdoorAir}
						alt="Battery Charge Status"
						style={{margin: "-8px"}}
					/>
					<img
						src={IndoorAir}
						alt="Battery Charge Status"
						style={{margin: "-8px"}}
					/>
					<img
						src={Humidity}
						alt="Battery Charge Status"
						style={{margin: "-8px"}}
					/>
					<img
						src={SolarThermalChart}
						alt="Battery Charge Status"
						style={{margin: "-8px"}}
					/>



				</div>



			</div>
		</div>
	);
}
