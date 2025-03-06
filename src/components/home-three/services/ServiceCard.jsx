import { Link } from "react-router-dom";
import ArrowRight4Img from "../../../assets/images/icon/arrow-right4.svg";
function ServiceCard({ service: { title, description, img } }) {
	return (
		<div className="orgits-iconbox-wrap3">
			<div className="orgits-iconbox-icon3">
				<img src={img} alt="Icon" />
			</div>
			<div className="orgits-iconbox-data3">
				<h3>{title}</h3>
				<p>{description}</p>
				<Link className="orgits-service-icon" to="/single-service">
					<img src={ArrowRight4Img} alt="ArrowRight4Img" />
				</Link>
			</div>
		</div>
	);
}

export default ServiceCard;
