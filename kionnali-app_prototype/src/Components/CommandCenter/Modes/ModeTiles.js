import { useState } from "react";
import "../Modes/ModeTiles.css";
import Toggle from "../../Toggle";
import nightModeBed from "../../../Assets/CommandCenter/nightModeBed.png";
import morningModeCoffee from "../../../Assets/CommandCenter/morningModeCoffee.png";
import adventureModeMountain from "../../../Assets/CommandCenter/adventureModeMountain.png";
import movieModePopcorn from "../../../Assets/CommandCenter/movieModePopcorn.png";
import AddModeModal from "../Modes/AddModeModal";
import NameModeModal from "./NameModeModal";
import AddDeviceModal from "./AddDeviceModal";
import ScheduleModal from "./ScheduleModal";
import LastModal from "./LastModal";

export default function ModeTiles({
	onAddCustomMode,
	onAddDeviceMode,
	onScheduleMode,
	onLastMode,
}) {
	const [isAddModalOpen, setAddModeModalOpen] = useState(false);
	const [isNameModalOpen, setNameModeModalOpen] = useState(false);
	const [isAddDeviceModalOpen, setAddDeviceModalOpen] = useState(false);
	const [isScheduleModalOpen, setScheduleModeModalOpen] = useState(false);
	const [isLastModalOpen, setLastModalOpen] = useState(false);

	const handleAddCustomMode = () => {
		setAddModeModalOpen(false);
		setNameModeModalOpen(true);
	};

	const handleContinuetoDeviceClick = () => {
		setNameModeModalOpen(false);
		setAddDeviceModalOpen(true);
	};

	const handleContinueToScheduleClick = () => {
		setAddDeviceModalOpen(false);
		setLastModalOpen(false);
		setScheduleModeModalOpen(true);
	};

	const handleLastModeClick = () => {
		setScheduleModeModalOpen(false);
		setLastModalOpen(true);
	};

	const handleModalOpen = () => {
		setAddModeModalOpen(true);
	};

	const handleBackClick = () => {
		setNameModeModalOpen(false);
		setAddModeModalOpen(true);
	};

	const handleBackToNameClick = () => {
		setAddDeviceModalOpen(false);
		setNameModeModalOpen(true);
	};

	const handleBackToDeviceClick = () => {
		setScheduleModeModalOpen(false);
		setAddDeviceModalOpen(true);
	};

	return (
		<div className="modes slider">
			<div className="mode-tile">
				<div className="add-mode-wrapper">
					<button
						className="add-mode"
						onClick={handleModalOpen}></button>
					<AddModeModal
						isOpen={isAddModalOpen}
						onClose={() => setAddModeModalOpen(false)}
						onAddCustomMode={handleAddCustomMode}
					/>
					<NameModeModal
						isOpen={isNameModalOpen}
						onClose={() => setNameModeModalOpen(false)}
						onBack={handleBackClick}
						onAddDeviceMode={handleContinuetoDeviceClick}
					/>
					<AddDeviceModal
						isOpen={isAddDeviceModalOpen}
						onClose={() => setAddDeviceModalOpen(false)}
						onBackToNameMode={handleBackToNameClick}
						onScheduleMode={handleContinueToScheduleClick}
					/>
					<ScheduleModal
						isOpen={isScheduleModalOpen}
						onClose={() => setScheduleModeModalOpen(false)}
						onBackToDeviceMode={handleBackToDeviceClick}
						onLastMode={handleLastModeClick}
					/>
					<LastModal
						isOpen={isLastModalOpen}
						onClose={() => setLastModalOpen(false)}
						onBackToScheduleMode={handleContinueToScheduleClick}
					/>
					<p>Add Mode</p>
				</div>
			</div>

			<div className="mode-tile">
				<div className="tile-toggle-wrapper">
					<img
						src={nightModeBed}
						alt="bed"
					/>
					<div className="mode-toggle-wrapper">
						<p>Night</p>
						<Toggle />
					</div>
				</div>
			</div>

			<div className="mode-tile">
				<div className="tile-toggle-wrapper">
					<img
						src={morningModeCoffee}
						alt="coffee cup"
					/>
					<div className="mode-toggle-wrapper">
						<p>Morning</p>
						<Toggle />
					</div>
				</div>
			</div>

			<div className="mode-tile">
				<div className="tile-toggle-wrapper">
					<img
						src={adventureModeMountain}
						width="71"
						height="73"
						alt="Mountain yellow sky"
					/>
					<div className="mode-toggle-wrapper">
						<p>Adventure</p>
						<Toggle />
					</div>
				</div>
			</div>

			<div className="mode-tile">
				<div className="tile-toggle-wrapper">
					<img
						src={movieModePopcorn}
						alt="box of popcorn"
					/>
					<div className="mode-toggle-wrapper">
						<p>Movies</p>
						<Toggle />
					</div>
				</div>
			</div>
		</div>
	);
}
