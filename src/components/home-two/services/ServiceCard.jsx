import { Link } from "react-router-dom";
function ServiceCard({ service: { title, description, img } }) {
	return (
		<div className="orgits-service-increase-row">
			<div className="orgits-service-increase-item">
				<img className="swipeimage" src={img} alt="thumb" />
				<div className="orgits-service-increase-title">
					<h3>{title}:</h3>
				</div>
				<div className="orgits-service-increase-body">
					<p>{description}</p>
				</div>
				<Link to="/single-service" className="orgits-service-increase-icon">
					<i className="icon-arrow-right"></i>
				</Link>
			</div>
		</div>
	);
}

export default ServiceCard;
