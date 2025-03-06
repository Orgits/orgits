function FeatureCard({ feature: { title, description, img } }) {
	return (
		<div className="orgits-iconbox-wrap2">
			<div className="orgits-iconbox-icon2">
				<img src={img} alt="Illustrator1Img" />
			</div>
			<div className="orgits-iconbox-data2">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default FeatureCard;
