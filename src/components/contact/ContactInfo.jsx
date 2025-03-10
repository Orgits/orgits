import Call2Img from "../../assets/images/icon/call2.svg";
import EmailImg from "../../assets/images/icon/email.svg";
import MapImg from "../../assets/images/icon/map.svg";
import Star2Img from "../../assets/images/v1/star2.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../animation/FadeInStaggerTwo";
function ContactInfo() {
	return (
		<div className="orgits-contact-info-section">
			<div className="container">
				<div className="orgits-contact-info-title">
					<h2>
						<span className="orgits-title-animation">
							Contact Information
							<span className="orgits-title-icon">
								<img src={Star2Img} alt="Star" />
							</span>
						</span>
					</h2>
				</div>
				<FadeInStaggerTwo className="row">
					<FadeInStaggerTwoChildren className="col-xl-4 col-md-6">
						<div className="orgits-contact-info-box">
							<div className="orgits-contact-info-icon">
								<img src={Call2Img} alt="Call Img" />
							</div>
							<div className="orgits-contact-info-data">
								<span>Call us</span>
							<p>+91 928-9687-928</p>
							<p>+91 997-1291-305</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="col-xl-4 col-md-6">
						<div className="orgits-contact-info-box">
							<div className="orgits-contact-info-icon">
								<img src={EmailImg} alt="Email" />
							</div>
							<div className="orgits-contact-info-data">
								<span>Email us</span>
								<p>info@orgits.in</p>
								<p>hello@orgits.in</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="col-xl-4 col-md-6">
						<div className="orgits-contact-info-box">
							<div className="orgits-contact-info-icon">
								<img src={MapImg} alt="Map" />
							</div>
							<div className="orgits-contact-info-data">
								<span>Main Office </span>
								<p>Rohini Sector -11, New Delhi -110085</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
				</FadeInStaggerTwo>
			</div>
		</div>
	);
}

export default ContactInfo;
