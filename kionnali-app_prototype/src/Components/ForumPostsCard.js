import React from "react";
import "./ForumPostsCard.css";

const ForumPostsCard = () => {
	return (
		<div className="card-container">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">Forum Posts</h5>
					<div className="frame1">
						<div className="user-img"></div>
						<div className="frame2">
							<div className="user-name">Luke</div>
							<div className="user-logged-in">
								13 minutes ago
								<div className="profile-icon"></div>
							</div>
						</div>
					</div>
					<p className="card-text">
						I’m cooking a family dinner on Saturday, could use a thermal dump.
						Anyone have extra?
						<br />
						<br />
						<span>#energy &nbsp;#thermal</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ForumPostsCard;
