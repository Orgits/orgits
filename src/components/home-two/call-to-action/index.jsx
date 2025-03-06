import { Link } from "react-router-dom";
import Shape4Img from "../../../assets/images/v2/shape4.png";
import StarImg from "../../../assets/images/v2/star.png";
import FadeInUp from "../../animation/FadeInUp";
function CallToAction() {
	return (
		<div className="orgits-cta-section orgits-section-padding extra-side-margin position-relative">
			<div className="container">
				<div className="orgits-cta-wrap">
					<h2>Join us on your path to future success</h2>
					<FadeInUp>
						<Link className="orgits-default-btn" to="/contact-us">
							<span className="orgits-label-up">Contact Us</span>
							<span className="orgits-label-up">Contact Us</span>
						</Link>
					</FadeInUp>
				</div>
			</div>
			<div className="orgits-cta-shape1">
				<img src={Shape4Img} alt="Shape4Img" />
			</div>
			<div className="orgits-cta-shape2">
				<img src={StarImg} alt="StarImg" />
			</div>
		</div>
	);
}

export default CallToAction;
