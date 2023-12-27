import "./TileLarge.css";

export default function TileLarge({
	title1,
	img1,
	content,
	info1,
	info2,
	slider,
	content2,
}) {
	return (
		<div
			className="large-tile"
			style={{ height: "60px" }}>
			<div className="tile-heading">
				<h3>{title1}</h3>
				<img
					src={img1}
					alt="drag and drop icon"
				/>
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "flex-start",
					width: "100%",
					gap: "8px",
				}}>
				<img
					src={info1}
					alt=""
				/>
				<img
					src={info2}
					alt=""
				/>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					width: "100%",
					gap: "8px",
				}}>
				{content && (
					<img
						src={content}
						alt=""
						style={{ width: "259px", height: "82px", margin: "32px 0 0 0" }}
					/>
				)}
				{content2 && (
					<img
						src={content2}
						alt=""
						style={{
							margin: "-100px 0 0",
						}}
					/>
				)}
				<img
					src={slider}
					alt=""
				/>
			</div>
		</div>
	);
}
