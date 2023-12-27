import "./TileLarge.css";

export default function TileXL({ title, img1, content }) {
	return (
		<div className="extra-large-tile">
			<div className="tile-heading">
				<h3>{title}</h3>
				<img
					src={img1}
					alt="drag and drop icon"
				/>
			</div>
			<img
				src={content}
				alt="foundation level addjustment"
			/>
		</div>
	);
}
