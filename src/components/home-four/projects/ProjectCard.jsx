import { Link } from "react-router-dom";
import LinkImg from "../../../assets/images/v4/link.svg";
function ProjectCard({ project: { title, description, img } }) {
	return (
		<div className="orgits-project-wrap2">
			<div className="orgits-project-thumb2">
				<img src={img} alt={title} />
				<Link className="orgits-project-icon2" to="/single-portfolio">
					<img src={LinkImg} alt="LinkImg" />
				</Link>
			</div>
			<div className="orgits-project-data2">
				<Link to="/single-portfolio">
					<h3>{title}</h3>
				</Link>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ProjectCard;
