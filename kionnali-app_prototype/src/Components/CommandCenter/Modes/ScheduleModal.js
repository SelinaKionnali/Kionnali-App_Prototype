import Toggle from "../../Toggle";
import styles from "./AddModeModal.module.css";

export default function ScheduleModal({
	onClose,
	isOpen,
	onLastMode,
	onBackToDeviceMode,
}) {
	if (!isOpen) return null;

	const handleContinuetoLastStageClick = () => {
		onLastMode();
	};

	return (
		<div className={styles.modalWrapper}>
			<div
				className={styles.modalOverlay}
				onClick={onClose}
			/>
			<div className={styles.modalContent}>
				<div className={styles.modalHeader}>
					<div
						className={styles.closeBtn}
						onClick={onClose}></div>
				</div>
				<br />
				<div className={styles.headerToggle}>
					<p>Turn Scheduling Off</p>
					<Toggle />
				</div>
				<br />
				<hr />
				<br />
				<div className={styles.headerToggle}>
					<p>Daily/Weekly</p>
					<Toggle />
				</div>
				<br />
				<div className={styles.headerToggle}>
					<p>Monthly</p>
					<Toggle />
				</div>
				<br />
				<hr />
				<br />
				<div className={styles.startDateText}>
					<h3>
						Select desired start date <br />
						<span className={styles.tinyText}>Leave blank to start today</span>
					</h3>
					<br />
					<br />
					<div className={styles.dateInput}></div>
					<br />
					<br />
					<div className={styles.timeInput}></div>
				</div>
				<br />
				<br />
				<hr />
				<br />

				<button
					className={styles.addModeBtn}
					onClick={handleContinuetoLastStageClick}>
					Continue
				</button>
				<br />
				<p
					className={styles.backBtn}
					onClick={onBackToDeviceMode}>
					Back
				</p>

				<div className={styles.progressStepperFour}></div>
			</div>
		</div>
	);
}
