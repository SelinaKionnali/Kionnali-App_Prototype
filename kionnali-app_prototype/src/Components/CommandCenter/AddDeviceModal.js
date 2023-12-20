import TileSmlRect from "../TileComponents/TileSmlRect";
import styles from "./AddModeModal.module.css";
import RoomSlider from "./RoomSlider";
import tvIcon from "../../Assets/CommandCenter/tvIcon.png";
import windIcon from "../../Assets/CommandCenter/windIcon.png";
import airIcon from "../../Assets/CommandCenter/airIcon.png";
import bulbIcon from "../../Assets/CommandCenter/bulbIcon.png";
import fanIcon from "../../Assets/CommandCenter/fanIcon.png";

export default function AddDeviceModal({
	onBackToNameMode,
	onClose,
	isOpen,
	onScheduleMode,
}) {
	if (!isOpen) return null;

	const handleContinuetoScheduleClick = () => {
		onScheduleMode();
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

					<h3 className={styles.title}>
						Add devices to
						<br /> "Goodnight 😴"
					</h3>
					<br />
					<RoomSlider />
					<br />
					<TileSmlRect
						icon1={
							<img
								src={tvIcon}
								alt="tv icon"
							/>
						}
						icon2={
							<img
								src={windIcon}
								alt="air conditioner icon"
							/>
						}
						status1="Smart TV"
						status2="Air Conditioner"
					/>
					<TileSmlRect
						icon1={
							<img
								src={airIcon}
								alt="air purifier icon"
							/>
						}
						icon2={
							<img
								src={bulbIcon}
								alt="bulb icon"
							/>
						}
						status1="Air Purifier"
						status2="Smart Light 1"
					/>
					<TileSmlRect
						icon1={
							<img
								src={fanIcon}
								alt="fan icon"
							/>
						}
						icon2={
							<img
								src={bulbIcon}
								alt="bulb icon"
							/>
						}
						status1="Fan"
						status2="Smart Light 2"
					/>
					<br />
					<br />

					<button
						className={styles.addModeBtn}
						onClick={handleContinuetoScheduleClick}>
						Continue
					</button>
					<br />
					<p
						className={styles.backBtn}
						onClick={onBackToNameMode}>
						Back
					</p>
					<div className={styles.progressStepperThree}></div>
				</div>
			</div>
		</>
	);
}
