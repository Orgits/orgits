import Star2Img from "../../../assets/images/v1/star2.png";
import Project1Img from "../../../assets/images/v1/project1.png";
import Project2Img from "../../../assets/images/v1/project2.png";
import Project3Img from "../../../assets/images/v1/project3.png";
import Project4Img from "../../../assets/images/v1/project4.png";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import { useRef, useState } from "react";

const projectsData = [
	{
		id: crypto.randomUUID(),
		title: "Product Design",
		description: "Developing the look and feel of physical products, aesthetics, and functionality.",
		img: Project1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Logo and Branding",
		description: "Creating or refreshing a company's logo and developing a cohesive visual identity.",
		img: Project2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "App UI/UX Design",
		description: "Designing the UI/UXe for mobile apps and web applications to ensure usability & engagement.",
		img: Project3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Packaging Design",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Project4Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Product Design",
		description: "Developing the look and feel of physical products, aesthetics, and functionality.",
		img: Project1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Logo and Branding",
		description: "Creating or refreshing a company's logo and developing a cohesive visual identity.",
		img: Project2Img,
	},
];

const swiperSettings = {
	spaceBetween: 24,
	direction: "horizontal",
	pagination: {
		clickable: true,
	},
	modules: [Pagination, Mousewheel],
	mousewheel: true,
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		900: {
			slidesPerView: 2,
		},
		1600: {
			slidesPerView: 3.5,
		},
	},
};

function Projects() {
	const swiperRef = useRef(null);
	const [isMousewheelEnabled, setIsMousewheelEnabled] = useState(true);

	const handleMousewheel = (event) => {
		const swiper = swiperRef.current?.swiper;

		if (swiper) {
			// Check if at the end or beginning of the carousel
			if (swiper.isEnd && event.deltaY > 0) {
				// Disable Swiper's mousewheel when scrolling down past the last slide
				swiper.mousewheel.disable();
				setIsMousewheelEnabled(false);
			} else if (swiper.isBeginning && event.deltaY < 0) {
				// Disable Swiper's mousewheel when scrolling up past the first slide
				swiper.mousewheel.disable();
				setIsMousewheelEnabled(false);
			} else if (!isMousewheelEnabled) {
				// Re-enable Swiper's mousewheel when scrolling back into the carousel
				swiper.mousewheel.enable();
				setIsMousewheelEnabled(true);
			}
		}
	};

	return (
		<div className="section dark-bg orgits-section-padding">
			<div className="container">
				<div className="orgits-section-title center light">
					<h2>
						Have a wide range of
						<span className="orgits-title-animation">
							creative projects
							<span className="orgits-title-icon">
								<img src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
			</div>
			<div className="swiper orgits-project-slider" onWheel={handleMousewheel}>
				<Swiper {...swiperSettings} ref={swiperRef}>
					{projectsData.map((project) => (
						<SwiperSlide key={project.id}>
							<ProjectCard project={project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default Projects;