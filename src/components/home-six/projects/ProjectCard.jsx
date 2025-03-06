import { Link } from "react-router-dom";
import NextWhiteImg from "../../../assets/images/v6/next-white.svg";
function ProjectCard({ project: { title, img } }) {
	return (
		<div className="orgits-project-thumb5">
			<img src={img} alt="project img" />
			<div className="orgits-marquee-two">
				<div className="orgits-infinite two">
					{[...Array(18)].map(() => (
						<Link key={crypto.randomUUID()} to="/single-portfolio">
							{title} <img src={NextWhiteImg} alt="Next" />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
