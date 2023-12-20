import styles from "./AddModeModal.module.css";
import sun from "../../Assets/CommandCenter/sun.png";
import moon from "../../Assets/CommandCenter/moon.png";

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
					</div>

					<div className={styles.suggestedMode}>
						<div className={styles.wrap}>
							<div className={styles.sunImg}></div>
							<p>Morning Mode</p>
							<p>&gt;</p>
						</div>
					</div>

					<div className={styles.suggestedMode}>
						<div className={styles.wrap}>
							<div className={styles.moonImg}></div>
							<p>Night Mode</p>
							<p>&gt;</p>
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
