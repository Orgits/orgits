function FeatureCard({ feature: { img, title, description } }) {
	return (
		<div className="orgits-iconbox-wrap6">
			<div className="orgits-iconbox-icon6">
				<img src={img} alt={title} />
			</div>
			<div className="orgits-iconbox-data6">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default FeatureCard;
