import { Link } from "react-router-dom";
function ProjectCard({ project: { title, img, company, category } }) {
	return (
		<div className="orgits-project-wrap4">
			<div className="orgits-project-thumb4">
				<img src={img} alt="project" />
				<Link className="orgits-project-view" to="single-portfolio">
					View
				</Link>
			</div>
			<div className="orgits-project-data4">
				<Link to="/single-portfolio">
					<h3>{title}</h3>
				</Link>
				<div className="orgits-project-meta">
					<ul>
						<li>
							<a href="#">{company}</a>
						</li>
						<li>
							<a href="#">{category}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
