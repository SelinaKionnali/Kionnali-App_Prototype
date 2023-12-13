import { useState } from "react";
import "./ModeTiles.css";
import Toggle from "./Toggle";
import nightModeBed from "../Assets/CommandCenter/nightModeBed.png";
import morningModeCoffee from "../Assets/CommandCenter/morningModeCoffee.png";
import adventureModeMountain from "../Assets/CommandCenter/adventureModeMountain.png";
import movieModePopcorn from "../Assets/CommandCenter/movieModePopcorn.png";
import AddModeModal from "./CommandCenter/AddModeModal";

export default function ModeTiles() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="modes slider">
			<div className="mode-tile">
				<div className="add-mode-wrapper">
					<button
						className="add-mode"
						onClick={openModal}></button>
					<p>Add Mode</p>
					<AddModeModal
						isOpen={isModalOpen}
						closeModal={closeModal}
					/>
				</div>
			</div>

			<div className="mode-tile">
				<div className="tile-toggle-wrapper">
					<img
						src={nightModeBed}
						alt="bed"
					/>
					<div className="mode-toggle-wrapper">
						<p>Night</p>
						<Toggle />
					</div>
				</div>
			</div>

			<div className="mode-tile">
				<div className="tile-toggle-wrapper">
					<img
						src={morningModeCoffee}
						alt="coffee cup"
					/>
					<div className="mode-toggle-wrapper">
						<p>Morning</p>
						<Toggle />
					</div>
				</div>
			</div>

			<div className="mode-tile">
				<div className="tile-toggle-wrapper">
					<img
						src={adventureModeMountain}
						width="71"
						height="73"
						alt="Mountain yellow sky"
					/>
					<div className="mode-toggle-wrapper">
						<p>Adventure</p>
						<Toggle />
					</div>
				</div>
			</div>

			<div className="mode-tile">
				<div className="tile-toggle-wrapper">
					<img
						src={movieModePopcorn}
						alt="box of popcorn"
					/>
					<div className="mode-toggle-wrapper">
						<p>Movies</p>
						<Toggle />
					</div>
				</div>
			</div>
		</div>
	);
}
