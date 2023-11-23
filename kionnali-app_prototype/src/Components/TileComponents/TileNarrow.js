import "./TileLarge.css";

export default function TileNarrow({ children, className }) {
	return <div className={`narrow-tile ${className}`}>{children}</div>;
}
