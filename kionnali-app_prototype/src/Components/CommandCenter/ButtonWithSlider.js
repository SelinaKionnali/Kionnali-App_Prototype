// Description: These slider buttons are used in Living/Dining/Kitchen page within the Command Centre.

import "./ButtonWithSlider.css";

export default function ButtonsWithSlider({
	property1,
	divClassName,
	text = "CEILING",
}) {
	return (
		<div className="buttons-with-slider">
			<div className="overlap">
				<div className="slider">
					<div className="rectangle" />
					<div className="level">LEVEL</div>
				</div>
				<div className="button-frame">
					<div className={`overlap-group ${property1}`}>
						{property1 === "pressed" && <div className="CEILING">{text}</div>}

						{property1 === "unpressed" && (
							<>
								<div className="div" />
								<div className="button-rectangle" />
								<div className={`text-wrapper ${divClassName}`}>{text}</div>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
