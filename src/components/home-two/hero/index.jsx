import HeroContent from "./HeroContent";
import HeroThumbs from "./HeroThumbs";

import Shape1Img from "../../../assets/images/v2/shape1.png";
import ShapeStarImg from "../../../assets/images/v2/shape-star.png";

function Hero() {
	return (
		<div className="orgits-hero-section2">
			<div className="container position-relative">
				<HeroContent />
				<div className="orgits-hero-shape1">
					<img src={Shape1Img} alt="Shape" />
				</div>
				<div className="orgits-hero-shape2">
					<img src={ShapeStarImg} alt="ShapeStarImg" />
				</div>
			</div>
			<HeroThumbs />
		</div>
	);
}

export default Hero;
