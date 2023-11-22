import HeaderBtn1 from "../Assets/Dashboard/HeaderBtn1.png";
import HeaderBtn2 from "../Assets/Dashboard/HeaderBtn2.png";
import HeaderBtn3 from "../Assets/Dashboard/HeaderBtn3.png";
import "./HeaderBtns.css";

export default function HeaderBtns() {
	return (
		<>
			<div className="header-buttons">
				<img
					className="header-btn-1"
					src={HeaderBtn1}
					alt=""
				/>
				<img
					className="header-btn-2"
					src={HeaderBtn2}
					alt=""
				/>
				<img
					className="header-btn-3"
					src={HeaderBtn3}
					alt=""
				/>
			</div>
		</>
	);
}
