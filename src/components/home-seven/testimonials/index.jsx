import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
	{
		id: crypto.randomUUID(),
		text: "The team at Masco has an incredible knack for turning ideas into visually stunning and compelling campaigns. Their creative approach brought a fresh and innovative perspective to our brand, resulting in increased engagement and brand recognition.",
		author: "William Jack",
		designation: "CEO & Founder @XYZ",
		rating: 3,
	},
	{
		id: crypto.randomUUID(),
		text: "The team at Masco has an incredible knack for turning ideas into visually stunning and compelling campaigns. Their creative approach brought a fresh and innovative perspective to our brand, resulting in increased engagement and brand recognition.",
		author: "William Jack",
		designation: "CEO & Founder @XYZ",
		rating: 3,
	},
];

const swiperSettings = {
	slidesPerView: 1,
};
function Testimonials() {
	return (
		<div className="orgits-testimonial-slider-section orgits-section-padding">
			<div className="container">
				<div className="orgits-section-title bricolage-font center light">
					<h2>We’re trusted advertising agency</h2>
				</div>
				<div className="swiper orgits-testimonial-slider2">
					{
						<Swiper {...swiperSettings}>
							{testimonialsData.map((testimonial) => (
								<SwiperSlide key={testimonial.id}>
									<TestimonialCard testimonial={testimonial} />
								</SwiperSlide>
							))}
						</Swiper>
					}
				</div>
			</div>
		</div>
	);
}

export default Testimonials;
