import styles from "./AddModeModal.module.css";

export default function LastModal({ onClose, isOpen, onBackToScheduleMode }) {
	if (!isOpen) return null;

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
				<div className={styles.tickImg}></div>
				<br />
				<br />
				<h3 className={styles.title}>
					New Scene added <br /> "Goodnight 😴"
				</h3>
				<br />
				<button
					className={styles.addModeBtn}
					onClick={onClose}>
					Done
				</button>
				<br />
				<p
					className={styles.backBtn}
					onClick={onBackToScheduleMode}>
					Back
				</p>
				<div className={styles.progressStepperFive}></div>
			</div>
		</div>
	);
}
