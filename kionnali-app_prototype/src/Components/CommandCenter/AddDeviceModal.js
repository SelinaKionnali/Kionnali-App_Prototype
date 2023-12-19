import TileSmlRect from "../TileComponents/TileSmlRect";
import Toggle from "../Toggle";
import styles from "./AddModeModal.module.css";
import RoomSlider from "./RoomSlider";

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
					<RoomSlider />
					<br />
					<TileSmlRect
						status1="Smart TV"
						status2="Air Conditioner"
					/>
					<TileSmlRect
						status1="Air Purifier"
						status2="Smart Light 1"
					/>
					<TileSmlRect
						status1="Fan"
						status2="Smart Light 2"
					/>
					<br />
					<br />

					<button className={styles.addModeBtn}>Continue</button>
					<br />
					<p onClick={onBackToNameMode}>Back</p>
					<br />
					<div className={styles.progressStepperThree}></div>
				</div>
			</div>
		</>
	);
}
