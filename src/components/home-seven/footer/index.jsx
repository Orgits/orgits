import { Link } from "react-router-dom";
import LogoDarkImg from "../../../assets/images/logo/logo-dark.svg";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";
function Footer() {
	return (
		<footer className="orgits-footer-section7 bg-light8 orgits-section-padding4">
			<div className="container">
				<div className="orgits-section-title bricolage-font p-0">
					<FooterTop />
				</div>

				<div className="orgits-footer-top7">
					<div className="orgits-footer-info-column">
						<div className="orgits-footer-info-item">
							<Link to="">
								<img src={LogoDarkImg} alt="Logo" />
							</Link>
						</div>
						<div className="orgits-footer-info-item">
							<h5>Our address:</h5>
							<p>
								4517 Washington Ave.
								<br /> Manchester, Kentucky 39495
							</p>
						</div>
						<div className="orgits-footer-info-item">
							<h5>Give us a call:</h5>
							<a href="tel:456-7890">+91 928-9687-928</a>
							<a href="tel:456-7890">(088) 123-4567</a>
						</div>
						<div className="orgits-footer-info-item">
							<h5>Send us an email:</h5>
							<a href="mailto:info@orgits.in">info@orgits.in</a>
						</div>
					</div>
				</div>
				<div className="orgits-footer-bottom seven">
					<FooterBottom />
				</div>
			</div>
		</footer>
	);
}

export default Footer;
