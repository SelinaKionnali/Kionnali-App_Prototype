import "./MarketplaceCard.css";
import DBmarketplaceImage from "../Assets/Dashboard/DBmarketplaceImage.png";
import DBpagination from "../Assets/Dashboard/DBpagination.png";

const MarketplaceCard = () => {
	return (
		<div className="marketplace-card-container">
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
						<span>£39.45</span>
						<img
							src={DBpagination}
							alt="pagination"
						/>
						<br />
						<p>First aid kit</p>
						<br />
						<br />
					</p>
				</div>
			</div>
		</div>
	);
};

export default MarketplaceCard;
