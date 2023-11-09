import "./MarketplaceCard.css";
import DBmarketplaceImage from "../Assets/Dashboard/DBmarketplaceImage.png";

const MarketplaceCard = () => {
	return (
		<div className="card-container">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">Featured on Marketplace</h5>
					<div className="marketplace-image">
						<img
							src={DBmarketplaceImage}
							alt="First aid kit"
						/>
					</div>
					<p className="card-text">
						<span>$30</span>
						First aid kit
						<br />
						<br />
					</p>
				</div>
			</div>
		</div>
	);
};

export default MarketplaceCard;
