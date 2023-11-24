import "./TileLarge.css";

export default function TileXL({ title, content }) {
	return (
		<div className="extra-large-tile">
			<h3>{title}</h3>
			<p>{content}</p>
		</div>
	);
}
