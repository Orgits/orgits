import { Link } from "react-router-dom";
import TitleShapImg from "../../../assets/images/v7/title-shape.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
function HeroContent() {
	return (
		<FadeInStaggerTwo className="orgits-hero-content7">
			<FadeInStaggerTwoChildren>
				<h1>
					We present your brand creatively
					<span className="orgits-hero-shape-title2">
						<img className="orgits-hero-wave-shape" src={TitleShapImg} alt="Shape Title" />
					</span>
				</h1>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<p>
					Our advertising agency specializes in creating captivating and visually stunning campaigns that
					leave a lasting impression on audiences to elevate your brand to new heights.
				</p>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<div className="orgits-hero-btn-wrap m-0">
					<Link className="orgits-default-btn blue-btn2" to="/contact-us">
						<span className="orgits-label-up">Get In Touch</span>
						<span className="orgits-label-up">Get In Touch</span>
					</Link>
					<Link className="orgits-default-btn orgits-default-btn-outline outline-dark" to="/service">
						<span className="orgits-label-up">Explore Our Services</span>
						<span className="orgits-label-up">Explore Our Services</span>
					</Link>
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default HeroContent;
