import Shape2Img from "../../../assets/images/v6/shapes2.png";
import NextImg from "../../../assets/images/v6/next.svg";
import NextWhiteImg from "../../../assets/images/v6/next-white.svg";
import TextImg from "../../../assets/images/v6/image.png";
function Hero() {
	return (
		<div className="orgits-hero-section5 bg-light7 position-relative">
			<div className="container">
				<div className="orgits-hero-content6 overflow-hidden">
					<div className="orgits-hero-title">
						<div className="orgits-hero-text">Tailored interior</div>
						<div className="orgits-marquee-one">
							<div className="orgits-infinite">
								{[...Array(18)].map(() => (
									<a key={crypto.randomUUID()} href="">
										<img src={NextImg} alt="next" />
									</a>
								))}
							</div>
						</div>
					</div>
					<div className="orgits-hero-title">
						<div className="orgits-hero-text">design</div>
						<img src={TextImg} alt="TextImg" />
						<div className="orgits-hero-text"> that speaks</div>
					</div>
					<div className="orgits-hero-title">
						<div className="orgits-hero-text">to your style</div>
						<div className="orgits-marquee-two">
							<div className="orgits-infinite two">
								{[...Array(18)].map(() => (
									<a key={crypto.randomUUID()} href="">
										to your style <img src={NextWhiteImg} alt="Next" />
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="orgits-p-shape z-index">
				<img src={Shape2Img} alt="Shape" />
			</div>
		</div>
	);
}

export default Hero;
