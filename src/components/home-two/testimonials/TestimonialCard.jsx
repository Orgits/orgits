import StarImg from "../../../assets/images/v2/star.svg";
function TestimonialCard({ testimonial: { rating, content, author, designation, img } }) {
	return (
		<div className="orgits-testimonial-wrap orgits-testimonial-wrap2">
			<div className="orgits-testimonial-rating">
				<ul>
					{[...Array(rating)].map(() => (
						<li key={crypto.randomUUID()}>
							<img src={StarImg} alt="StarImg" />
						</li>
					))}
				</ul>
			</div>
			<div className="orgits-testimonial-data">
				<p>{`"${content}"`}</p>
			</div>
			<div className="orgits-testimonial-author">
				<div className="orgits-testimonial-author-thumb">
					<img src={img} alt="author" />
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
