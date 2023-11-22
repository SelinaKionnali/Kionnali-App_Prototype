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
					<div className="image-data">
						<div className="image-cost">£39.45</div>
						<p className="image-title">First Aid Kit</p>
						<img
							src={DBpagination}
							alt="pagination"
							className="pagination"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MarketplaceCard;
