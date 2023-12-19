import styles from "./AddModeModal.module.css";

export default function AddDeviceModal({ onBackToNameMode, onClose, isOpen }) {
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

					<h3 className={styles.title}>
						Add devices to
						<br /> "Goodnight 😴"
					</h3>
					<br />
					<p onClick={onBackToNameMode}>Back</p>
					<br />
					<div className={styles.progressStepperThree}></div>
				</div>
			</div>
		</>
	);
}
