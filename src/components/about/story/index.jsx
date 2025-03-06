import Star2Img from "../../../assets/images/v1/star2.png";
import StoryContent from "./StoryContent";
import StoryPhotos from "./StoryPhotos";
function Story() {
	return (
		<div className="section orgits-section-padding6">
			<div className="container">
				<div className="orgits-section-title center title-description">
					<h2>
						<span className="orgits-title-animation">
							We think our story is
							<span className="orgits-title-icon">
								<img src={Star2Img} alt="star" />
							</span>
						</span>
						worth sharing with you
					</h2>
					<p>
						Established in 2008, we began as a small but ambitious team. We understood the importance of
						creative and tech-savvy solutions to help businesses succeed in the ever-changing digital
						landscape.
					</p>
				</div>

				<StoryPhotos />

				<div className="orgits-story-content">
					<StoryContent />
				</div>
			</div>
		</div>
	);
}

export default Story;
