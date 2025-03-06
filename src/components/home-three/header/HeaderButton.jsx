import { Link } from "react-router-dom";
function HeaderButton() {
	return (
		<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
			<div className="orgits-header-wrap">
				<div className="orgits-social-icon header-social">
					<ul>
						<li>
							<a href="https://twitter.com/" target="_blank">
								<i className="icon-twitter"></i>
							</a>
						</li>
						<li>
							<a href="https://facebook.com/" target="_blank">
								<i className="icon-facebook"></i>
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/" target="_blank">
								<i className="icon-instagram"></i>
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/" target="_blank">
								<i className="icon-linkedin"></i>
							</a>
						</li>
					</ul>
				</div>
				<Link className="orgits-default-btn pill orgits-header-btn yellow-btn" to="/contact-us">
					<span className="orgits-label-up">Talk to an expert</span>
					<span className="orgits-label-up">Talk to an expert</span>
				</Link>
			</div>
		</div>
	);
}

export default HeaderButton;
