import { Link } from "react-router-dom";
function TeamCard({ team: { name, designation, img } }) {
	return (
		<div className="orgits-team-wrap2">
			<div className="orgits-team-thumb2">
				<img src={img} alt={name} />
			</div>
			<div className="orgits-team-data2">
				<Link to="/single-team">
					<h4>{name}</h4>
				</Link>
				<p>{designation}</p>
			</div>
		</div>
	);
}

export default TeamCard;
