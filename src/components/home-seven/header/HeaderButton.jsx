import { Link } from "react-router-dom";
function HeaderButton() {
	return (
		<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
			<Link className="orgits-default-btn orgits-header-btn blue-btn2" to="/contact-us">
				<span className="orgits-label-up">Hire Us!</span>
				<span className="orgits-label-up">Hire Us!</span>
			</Link>
		</div>
	);
}

export default HeaderButton;
