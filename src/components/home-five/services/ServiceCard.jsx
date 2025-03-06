import { Link } from "react-router-dom";
function ServiceCard({ service: { title, description, img } }) {
	return (
		<div className="orgits-marketing-services-item">
			<div className="orgits-marketing-services-icon">
				<img src={img} alt="icon" />
				<h3>{title}:</h3>
			</div>
			<div className="orgits-marketing-services-data">
				<p>{description}</p>
			</div>
			<div className="orgits-marketing-services-btn">
				<Link
					className="orgits-default-btn orgits-default-btn-outline pill outline-white marketing-services-btn"
					to="/single-service"
				>
					Choose Service
				</Link>
			</div>
		</div>
	);
}

export default ServiceCard;
