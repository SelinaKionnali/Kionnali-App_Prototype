import { useState } from "react";
import MenuPageDataTwo from "./MenuPageDataTwo";
import "./MenuPage.css";

export default function TestMenuPageTwo() {
	const [menuPageData, setMenuPageData] = useState(MenuPageDataTwo);

	return (
		<>
			<div className="menu-page-two-container">
				{menuPageData.columnOrder.map((columnId) => {
					const column = menuPageData.columns[columnId];
					const subpages = column.subpageIds.map(
						(subpageId) => menuPageData.subpages[subpageId]
					);
					console.log(subpages);

					return 
				})}
			</div>
		</>
	);
}
