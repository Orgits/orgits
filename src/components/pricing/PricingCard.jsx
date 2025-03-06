import { Link } from "react-router-dom";
import CheckImg from "../../assets/images/icon/check.svg";
function PricingCard({ plan: { title, description, price, features, highlighted }, frequency }) {
	return (
		<div className="orgits-pricing-wrap2">
			<div className="orgits-pricing-header2">
				<h5>{title}</h5>
			</div>
			<div className="orgits-pricing-price2">
				<h2>
					$
					{price.map((item) => {
						if (item.id === frequency.id) {
							return item.value;
						}
					})}
				</h2>
			</div>
			<div className="orgits-pricing-description">
				<p>{description}</p>
			</div>
			<div className="orgits-pricing-body2">
				<ul>
					{features.map((feature) => (
						<li key={feature}>
							<img src={CheckImg} alt="check" />
							{feature}
						</li>
					))}
				</ul>
			</div>
			<Link className={`orgits-pricing-btn2 ${highlighted && "active"}`} to="/pricing">
				Select the package
			</Link>
		</div>
	);
}

export default PricingCard;
