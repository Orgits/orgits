import { Link } from "react-router-dom";
import LikeImg from "../../../assets/images/v2/like.svg";
function PricingCard({ pricing: { plan, price, img, services, active } }) {
	return (
		<div className="orgits-pricing-wrap">
			<div className="orgits-pricing-header">
				<img src={img} alt={plan} />
				<h3>{plan}</h3>
			</div>
			<div className="orgits-pricing-price">
				<h2>${price}</h2>
			</div>
			<div className="orgits-pricing-body">
				<ul>
					{services.map((service) => (
						<li key={service}>
							<img src={LikeImg} alt="like" />
							{service}
						</li>
					))}
				</ul>
			</div>
			<Link className={`orgits-default-btn orgits-pricing-btn ${active && "active"}`} to="/pricing">
				Purchase It Now
			</Link>
		</div>
	);
}

export default PricingCard;
