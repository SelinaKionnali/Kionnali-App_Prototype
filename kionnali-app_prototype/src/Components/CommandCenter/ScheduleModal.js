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
				<h3 className={styles.title}>Schedule Mode</h3>
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