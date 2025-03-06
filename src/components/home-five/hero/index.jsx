import { Link } from "react-router-dom";
import Shape1Img from "../../../assets/images/v5/shape1.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
function Hero() {
	return (
		<div className="orgits-hero-section5 green-bg">
			<div className="container">
				<div className="orgits-hero-content5">
					<h1>
						Increase your brand awareness
						<span className="orgits-hero-shape-title">
							digitally
							<img className="orgits-hero-wave-shape" src={Shape1Img} alt="Shape" />
						</span>
					</h1>
					<p>
						As a digital marketing agency, we specialize in providing a range of online marketing and
						advertising-related services. We help businesses and individuals promote your product, service,
						or brand through various digital channels.
					</p>
					<FadeInStaggerTwo className="orgits-hero-btn-wrap center">
						<FadeInStaggerTwoChildren>
							<Link className="orgits-default-btn pill corn-btn" to="/contact-us">
								<span className="orgits-label-up">Let's Talk</span>
								<span className="orgits-label-up">Let's Talk</span>
							</Link>
						</FadeInStaggerTwoChildren>
						<FadeInStaggerTwoChildren>
							<Link
								className="orgits-default-btn orgits-default-btn-outline pill outline-white"
								to="/service"
							>
								<span className="orgits-label-up">Explore Our Services</span>
								<span className="orgits-label-up">Explore Our Services</span>
							</Link>
						</FadeInStaggerTwoChildren>
					</FadeInStaggerTwo>
				</div>
			</div>
		</div>
	);
}

export default Hero;
