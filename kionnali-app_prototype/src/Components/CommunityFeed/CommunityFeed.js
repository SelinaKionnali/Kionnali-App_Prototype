// Note: Community Feed Component

import "../CommandCenter/CommandCenter.css";
import "./CommunityFeed.css";
import CommunityForumPosts from "../../Assets/RoamsteadChat/CommunityForumPosts.png"
import CFDate from "../../Assets/RoamsteadChat/CFDate.png"


export default function CommunityFeed() {
	return (
		<>
			<div className="command-center-container">
				<div className="community-feed">
					<h1>Community Feed</h1>
					<div className="cc-rounded-tile">
					<img 
						src={CFDate}
						style={{margin: "32px 0 8px 0"}}
						/>

						<img 
						src={CommunityForumPosts}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
