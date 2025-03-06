import { Link } from "react-router-dom";
function TeamCard({ team: { name, designation, img } }) {
	return (
		<div className="orgits-team-wrap3">
			<div className="orgits-team-thumb3">
				<img src={img} alt="author img" />
			</div>
			<div className="orgits-team-data3">
				<Link to="/single-team">
					<h3>{name}</h3>
				</Link>
				<p>{designation}</p>
			</div>
		</div>
	);
}

export default TeamCard;
