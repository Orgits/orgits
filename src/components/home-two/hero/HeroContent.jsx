import { Link } from "react-router-dom";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
function HeroContent() {
	return (
		<div className="orgits-hero-content2">
			<h1>Start your business growth journey with us</h1>
			<p>
				We believe in the power of innovation and are passionate about helping startups thrive. As a startup
				company, we are a dynamic and innovative organization that provides comprehensive support, guidance and
				resources to early stage startups.
			</p>
			<FadeInStaggerTwo className="orgits-hero-btn-wrap center">
				<FadeInStaggerTwoChildren>
					<Link className="orgits-default-btn" to="/contact-us">
						<span className="orgits-label-up">Get In Touch</span>
						<span className="orgits-label-up">Get In Touch</span>
					</Link>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<Link className="orgits-default-btn orgits-default-btn-outline" to="/service">
						<span className="orgits-label-up">Explore Our Services</span>
						<span className="orgits-label-up">Explore Our Services</span>
					</Link>
				</FadeInStaggerTwoChildren>
			</FadeInStaggerTwo>
		</div>
	);
}

export default HeroContent;
