import { Link } from "react-router-dom";
import RoundShapeImg from "../../../assets/images/v4/round-shape.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
function HeroContent() {
	return (
		<FadeInStaggerTwo className="orgits-hero-content4">
			<FadeInStaggerTwoChildren>
				<p>
					<span>Your trusted business consultants</span>
				</p>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<h1>
					Transforming your ideas into
					<span className="orgits-hero-shape-title">
						experiences
						<span className="orgits-hero-round-shape">
							<img src={RoundShapeImg} alt="RoundShapeImg" />
						</span>
					</span>
				</h1>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<p>
					We're dedicated to helping businesses grow and succeed. With years of industry experience and a
					passion for problem-solving, we offer top-level consulting services tailored to your unique needs.
				</p>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="orgits-hero-btn-wrap">
				<Link className="orgits-default-btn pill blue-btn" to="/contact-us">
					Schedule a meeting
				</Link>

				<Link className="orgits-default-btn orgits-default-btn-outline pill outline-white" to="/portfolio-one">
					<span className="orgits-label-up">View all projects</span>
					<span className="orgits-label-up">View all projects</span>
				</Link>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default HeroContent;
