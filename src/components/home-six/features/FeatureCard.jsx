function FeatureCard({ feature: { title, description, img } }) {
	return (
		<div className="orgits-iconbox-wrap7">
			<div className="orgits-iconbox-icon7">
				<img src={img} alt={title} />
			</div>
			<div className="orgits-iconbox-data7">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default FeatureCard;
