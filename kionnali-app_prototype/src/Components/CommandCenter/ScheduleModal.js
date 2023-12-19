import styles from "./AddModeModal.module.css";

export default function ScheduleModal({ onClose, isOpen }) {
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
				<h3 className={styles.title}>Schedule Mode</h3>
				<br />
			</div>
		</div>
	);
}
