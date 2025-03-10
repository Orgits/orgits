import TitleShapImg from "../../../assets/images/v7/title-shape.png";
import { Link } from "react-router-dom";
function FooterTop() {
	return (
		<div className="row">
			<div className="col-lg-7">
				<h2>
					Let your brand rise to new heights
					<span className="orgits-title-shape">
						<img src={TitleShapImg} alt="title shape" />
					</span>
				</h2>
			</div>
			<div className="col-lg-5 d-flex align-items-center">
				<div className="orgits-title-btn">
					<Link className="orgits-default-btn blue-btn2" to="/contact-us">
						<span className="orgits-label-up">Explore Our Plans</span>
						<span className="orgits-label-up">Explore Our Plans</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default FooterTop;
