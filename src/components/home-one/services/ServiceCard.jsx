import { Link } from "react-router-dom";
import ArrowRightImg from "../../../assets/images/icon/arrow-right.svg";
function ServiceCard({ service: { title, description, icon } }) {
	return (
		<div className="orgits-iconbox-wrap">
			<div className="orgits-iconbox-icon">
				<i className={`${icon}`}></i>
			</div>
			<div className="orgits-iconbox-data">
				<h3>{title}</h3>
				<p>{description}</p>
				<Link to="/single-service" className="orgits-icon">
					<img src={ArrowRightImg} alt="arrow right" />
				</Link>
			</div>
		</div>
	);
}

export default ServiceCard;
