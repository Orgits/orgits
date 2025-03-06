import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo/logo-white.svg";
import InstagramThumb from "../../../assets/images/v4/instagram-thumb3.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
function HeaderSideMenu({ showSideMenu, setShowSideMenu }) {
	return (
		<div className="orgits-sidemenu-wraper">
			<div className={`orgits-sidemenu-column ${showSideMenu === true ? "active" : ""}`}>
				<FadeInStaggerTwo className="orgits-sidemenu-body">
					<FadeInStaggerTwoChildren className="orgits-sidemenu-logo">
						<Link to="/">
							<img src={Logo} alt="Logo" />
						</Link>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren>
						<p>
							We're dedicated to helping business grow and succeed. With years of industry experience and
							a passion for problem-solving, we offer top-level consulting service tailored to your unique
							needs.
						</p>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="orgits-sidemenu-thumb">
						<img src={InstagramThumb} alt="InstagramThumb" />
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="orgits-info-wrap">
						<div className="orgits-info">
							<ul>
								<li>Give us a call:</li>
								<li>
									<a href="">+91 928-9687-928</a>
								</li>
							</ul>
						</div>
						<div className="orgits-info">
							<ul>
								<li>Send us an email:</li>
								<li>
									<a href="">info@orgits.in</a>
								</li>
							</ul>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="orgits-social-icon orgits-social-icon3">
						<ul>
							<li>
								<a href="https://twitter.com" target="_blank">
									<i className="icon-twitter"></i>
								</a>
							</li>
							<li>
								<a href="https://facebook.com" target="_blank">
									<i className="icon-facebook"></i>
								</a>
							</li>
							<li>
								<a href="https://instagram.com" target="_blank">
									<i className="icon-instagram"></i>
								</a>
							</li>
							<li>
								<a href="https://linkedin.com" target="_blank">
									<i className="icon-linkedin"></i>
								</a>
							</li>
						</ul>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="orgits-copywright4 light">
						<p>© Copyright 2024, All Rights Reserved by Mthemeus</p>
					</FadeInStaggerTwoChildren>
				</FadeInStaggerTwo>
				<span className="orgits-sidemenu-close" onClick={() => setShowSideMenu(!showSideMenu)}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path
							d="M6 18L18 6M6 6L18 18"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
					</svg>
				</span>
			</div>
			<div className={`offcanvas-overlay ${showSideMenu === true ? "active" : ""}`}></div>
		</div>
	);
}

export default HeaderSideMenu;
