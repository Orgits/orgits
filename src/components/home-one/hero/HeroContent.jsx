import { Link } from "react-router-dom";
import ShapeImg from "../../../assets/images/v1/shape1.png";
import StarImg from "../../../assets/images/v1/star.png";
import User1Img from "../../../assets/images/v1/user1.png";
import User2Img from "../../../assets/images/v1/user2.png";
import User3Img from "../../../assets/images/v1/user3.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
function HeroContent() {
	return (
		<div className="orgits-hero-content">
			<FadeInStaggerTwo>
				<FadeInStaggerTwoChildren>
					<h1>
						<span className="orgits-title-animation">
							Make Your <img src={StarImg} alt="StarImg" />
						</span>
						Business Work the Way You Want
					</h1>
					
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<p>
					{`At orgits, we go beyond basics—we transform business operations. Specializing in IT and marketing automation, we streamline processes to help organizations thrive. With expertise in RevOps, MarkOps, and DevOps, we drive efficiency, optimize operations, and fuel growth.`}
					</p>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<div className="orgits-hero-user-wrap">
						<div className="orgits-hero-user-thumb">
							<div className="orgits-hero-user-thumb-item">
								<img src={User1Img} alt="User1Img" />
							</div>
							<div className="orgits-hero-user-thumb-item">
								<img src={User3Img} alt="User3Img" />
							</div>
							<div className="orgits-hero-user-thumb-item">
								<img src={User2Img} alt="User2Img" />
							</div>
						</div>
						<div className="orgits-hero-user-data">
							<p>Revolutionizing 70+ Businesses with Innovative Automation Solutions.</p>
						</div>
					</div>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<Link className="orgits-call-btn" to="/contact-us">
						Get A Consultant <i className="icon-call"></i>
					</Link>
					<div className="orgits-hero-shape">
						<img src={ShapeImg} alt="orgits - Automation Solutions" />
					</div>
				</FadeInStaggerTwoChildren>
			</FadeInStaggerTwo>
		</div>
	);
}

export default HeroContent;
