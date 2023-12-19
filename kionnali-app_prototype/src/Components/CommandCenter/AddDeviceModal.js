import styles from "./AddModeModal.module.css";

export default function AddDeviceModal({ onBack, onClose, isOpen }) {
	if (!isOpen) return null;

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

					<h3 className={styles.title}>Add Device Mode</h3>
					<br />
					<br />
					<h3 className={styles.subtitle}>Add Device</h3>
					<br />
					<div className={styles.pickAnIcon}></div>
					<br />
					<br />
					<p onClick={onBack}>Back</p>
					<br />
					<div className={styles.progressStepperTwo}></div>
				</div>
			</div>
		</>
	);
}
