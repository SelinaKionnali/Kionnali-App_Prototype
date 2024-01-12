import React from "react";
import "./ForumPostsCard.css";
import ForumPosts from "../../Assets/Dashboard/ForumPosts.png"


const ForumPostsCard = () => {
	return (
		<div style={{ margin: "-5px"}}>
				<img
					src={ForumPosts}
					alt="Battery Charge Status"
				/>
		</div>
	);
};

export default ForumPostsCard;
