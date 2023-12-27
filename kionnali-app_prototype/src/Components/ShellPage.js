import "./TileComponents/TileLarge.css";
import TileSmlSquare from "./TileComponents/TileSmlSquare";
import TileXL from "./TileComponents/TileXL";
import FoundationImg from "../Assets/CommandCenter/FoundationImg.png";
import ThreeDots from "../Assets/Dashboard/threeDots.png";
import OpenCloseImg from "../Assets/CommandCenter/OpenCloseImg.png";
import WattImg from "../Assets/CommandCenter/WattImg.png";
import DoorOpenCloseImg from "../Assets/CommandCenter/DoorOpenCloseImg.png";
import StandbyImg from "../Assets/CommandCenter/StandbyImg.png";
import DoorbellImg from "../Assets/CommandCenter/DoorbellImg.png";
import volume from "../Assets/CommandCenter/volume.png";
import doorbellBtns from "../Assets/CommandCenter/doorbellBtns.png";
import NarrowTiles from "./TileComponents/NarrowTiles";
import SolarPanelImg from "../Assets/CommandCenter/SolarPanelImg.png";

export default function ShellPage({ title, img1, content }) {
	return (
		<div className="tile-large-container">
			<TileXL
				className="watt-feature-hidden"
				title="Foundation"
				img1={ThreeDots}
				content={FoundationImg}
			/>
			<TileSmlSquare
				title1="Porch"
				img1={ThreeDots}
				content1={OpenCloseImg}
				watt1={WattImg}
				title2="Clear Story"
				img2={ThreeDots}
				content2={OpenCloseImg}
				watt2={WattImg}
			/>
			<TileXL
				title="Greenhouse Doors"
				watt1={WattImg}
				img1={ThreeDots}
				content={DoorOpenCloseImg}
			/>
			<TileSmlSquare
				title1="Greenhouse"
				img1={ThreeDots}
				content1={OpenCloseImg}
				watt1={WattImg}
				title2="Windmill"
				img2={ThreeDots}
				content2={StandbyImg}
				watt2={WattImg}
			/>
			<NarrowTiles
				title1="Front Door"
				img1={ThreeDots}
				content1={DoorbellImg}
				p="Incoming"
				slider={volume}
				btns={doorbellBtns}
				title2="Solar Panels"
				img2={ThreeDots}
				content2={SolarPanelImg}
				watt2={WattImg}
			/>

			<br />
			<br />
			<br />
		</div>
	);
}
