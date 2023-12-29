import "./TileComponents/TileLarge.css";
import TileLarge from "./TileComponents/TileLarge";
import TileNarrow from "./TileComponents/TileNarrow";
import ThreeDots from "../Assets/Dashboard/threeDots.png";
import WattImg from "../Assets/CommandCenter/WattImg.png";
import UsersPhoneImg from "../Assets/CommandCenter/UsersPhoneImg.png";
import AllRoomsImg from "../Assets/CommandCenter/AllRoomsImg.png";
import MusicTrackImg from "../Assets/CommandCenter/MusicTrackImg.png";
import VolumeSliderImg from "../Assets/CommandCenter/VolumeSliderImg.png";
import ButtonsWithSlider from "./ButtonWithSlider";
import HvacImg from "../Assets/CommandCenter/HvacImg.png";
import BlindsDropdown from "../Assets/CommandCenter/BlindsDropdown.png";
import OpenImg from "../Assets/CommandCenter/OpenImg.png";
import DropdownBtnImg from "../Assets/CommandCenter/DropDownBtnImg.png";
import AddDeviceBtnImg from "../Assets/CommandCenter/AddDeviceBtnImg.png";

export default function DiningPage() {
	return (
		<div className="tile-large-container">
			<TileLarge
				title1="Sound System"
				watt1={WattImg}
				img1={ThreeDots}
				info1={UsersPhoneImg}
				info2={AllRoomsImg}
				content={MusicTrackImg}
				slider={VolumeSliderImg}
			/>
			<TileLarge
				title1="HVAC"
				watt1={WattImg}
				img1={ThreeDots}
				content2={HvacImg}
			/>

			<div
				className="narrow-tile-container"
				style={{ margin: "8px" }}>
				<TileNarrow
					className="narrow-tile"
					title1="Lights"
					watt1={WattImg}
					img1={ThreeDots}>
					<div className="slider-container">
						<ButtonsWithSlider
							divClassName="buttons-with-slider-instance"
							property1="unpressed"
							text="Ceiling"
						/>
						<ButtonsWithSlider
							divClassName="buttons-with-slider-instance"
							property1="unpressed"
							text="Lamp"
						/>
					</div>
				</TileNarrow>
				<TileNarrow
					className="narrow-tile"
					title1="Fans"
					watt1={WattImg}
					img1={ThreeDots}>
					<div className="slider-container">
						<ButtonsWithSlider
							divClassName="buttons-with-slider-instance"
							property1="unpressed"
							text="Ceiling"
						/>
						<ButtonsWithSlider
							divClassName="buttons-with-slider-instance"
							property1="unpressed"
							text="Vent"
						/>
					</div>
				</TileNarrow>
			</div>
			<TileLarge
				title1="Dining Room Blinds"
				watt1={WattImg}
				img1={ThreeDots}
				dropdown={BlindsDropdown}
				info1={OpenImg}
				info2={WattImg}
				dropdownBtns={DropdownBtnImg}
			/>
			<img
				src={AddDeviceBtnImg}
				alt=""
			/>
			<br />
			<br />
			<br />
			<br />
		</div>
	);
}
