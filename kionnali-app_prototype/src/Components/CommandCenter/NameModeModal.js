import styles from "./AddModeModal.module.css";

export default function NameModeModal({
	isOpen,
	onClose,
	onAddDeviceMode,
	onBack,
}) {
	if (!isOpen) return null;

	const handleContinuetoDeviceClick = () => {
		onAddDeviceMode();
	};

	return (
		<>
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

					<h3 className={styles.title}>Name Mode</h3>
					<br />
					<div className={styles.nameModeInput}>
						<input
							className={styles.nameModeInputBox}
							type="text"
							placeholder="Goodnight 😴"
						/>
					</div>
					<br />
					<h3 className={styles.subtitle}>Pick an Icon</h3>
					<br />
					<div className={styles.pickAnIcon}></div>
					<br />
					<button
						className={styles.addModeBtn}
						onClick={handleContinuetoDeviceClick}>
						Continue
					</button>
					<br />
					<p onClick={onBack}>Back</p>
					<br />
					<div className={styles.progressStepperTwo}></div>
				</div>
			</div>
		</>
	);
}
