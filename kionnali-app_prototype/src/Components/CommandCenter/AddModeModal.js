import styles from "./AddModeModal.module.css";

export default function AddModeModal({ isOpen, onClose, onAddCustomMode }) {
	if (!isOpen) return null;

	const handleCustomClick = () => {
		onAddCustomMode();
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

					<h3 className={styles.title}>Add a Mode</h3>
					<div className={styles.suggestedModes}>
						<h3 className={styles.subtitle}>Suggested modes</h3>
						<div className={styles.suggestedMode}>
							<div className={styles.suggestedModeImg}></div>
							<p>Morning Mode</p>
						</div>
						<div className={styles.suggestedMode}>
							<div className={styles.suggestedModeImg}></div>
							<p>Night Mode</p>
						</div>
					</div>

					<div className={styles.divider}></div>
					<button
						className={styles.addModeBtn}
						onClick={handleCustomClick}>
						Add Custom Mode
					</button>

					<div className={styles.progressStepper}></div>
				</div>
			</div>
		</>
	);
}
