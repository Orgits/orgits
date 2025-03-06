function TestimonialCard({ testimonial: { rating, title, description, author, designation, img } }) {
	return (
		<div className="orgits-testimonial-wrap">
			<div className="orgits-testimonial-rating">
				<ul>
					{[...Array(rating)].map(() => (
						<li key={crypto.randomUUID()}>
							<i className="icon-star"></i>
						</li>
					))}
				</ul>
			</div>
			<div className="orgits-testimonial-data">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div className="orgits-testimonial-author">
				<div className="orgits-testimonial-author-thumb">
					<img src={img} alt={title} />
				</div>
				<div className="orgits-testimonial-author-data">
					<p>
						{author} <span>{designation}</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
