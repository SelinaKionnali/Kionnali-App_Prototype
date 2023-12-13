import "./AddModeModal.css";

export default function AddModeModal({ isOpen, onClose }) {
	if (!isOpen) return null;

	return (
		<>
			<div className="modal-wrapper">
				<div
					className="modal-overlay"
					onClick={onClose}
				/>
				<div className="modal-content">
					<h3>Add a Mode</h3>
					<div className="suggested-modes">
						<h3>Suggested modes</h3>
						<div className="suggested-mode">
							<div className="suggested-mode-img"></div>
							<p>Morning Mode</p>
						</div>
						<div className="suggested-mode">
							<div className="suggested-mode-img"></div>
							<p>Night Mode</p>
						</div>
					</div>
					<button onClick={onClose}>Close</button>
					<button>Continue</button>
				</div>
			</div>
		</>
	);
}
