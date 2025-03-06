import FooterBottom from "./FooterBottom";
import FooterBg from "../../../assets/images/v2/footer-bg.png";
import LogoDarkImg from "../../../assets/images/logo/logo-dark.svg";
import { Link } from "react-router-dom";
function Footer() {
	return (
		<footer className="orgits-footer-section2" style={{ backgroundImage: `url(${FooterBg})` }}>
			<div className="container">
				<div className="orgits-footer-top orgits-section-padding">
					<div className="row">
						<div className="col-xl-4 col-lg-12">
							<div className="orgits-footer-textarea">
								<Link to="/">
									<img src={LogoDarkImg} alt="logo" />
								</Link>
								<p>
									We are a branding agency that digitally works to help companies grow. We have a
									successful track record of working with various organizations.
								</p>
							</div>
						</div>
						<div className="col-xl-3 col-md-4">
							<div className="orgits-footer-menu extar-margin">
								<div className="orgits-footer-title">
									<p>Special Links</p>
								</div>
								<ul>
									<li>
										<Link to="/about">About us</Link>
									</li>
									<li>
										<Link to="/service">Our services</Link>
									</li>
									<li>
										<Link to="/portfolio-one">Portfolio</Link>
									</li>
									<li>
										<Link to="/blog">Blogs</Link>
									</li>
									<li>
										<Link to="/">Premium member</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-md-4">
							<div className="orgits-footer-menu">
								<div className="orgits-footer-title">
									<p>Special Links</p>
								</div>
								<ul>
									<li>
										<Link to="/about">About us</Link>
									</li>
									<li>
										<Link to="/service">Our services</Link>
									</li>
									<li>
										<Link to="/portfolio-one">Portfolio</Link>
									</li>
									<li>
										<Link to="/blog">Blogs</Link>
									</li>
									<li>
										<Link to="/">Premium member</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-md-4">
							<div className="orgits-subscription">
								<div className="orgits-footer-title">
									<p>Subscribe Links</p>
								</div>
								<form action="#">
									<input type="email" placeholder="Email Address" />
									<button id="orgits-subscription-btn" type="submit">
										<span className="orgits-label-up">Subscribe</span>
										<span className="orgits-label-up">Subscribe</span>
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="orgits-footer-bottom two">
					<div className="row">
						<FooterBottom />
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
