import Star2Img from "../../../assets/images/v1/star2.png";
import FadeInStagger from "../../animation/FadeInStagger";
import TeamCard from "./TeamCard";

function Teams({ teams }) {
	return (
		<div className="section orgits-section-padding3">
			<div className="container">
				<div className="orgits-section-title center">
					<h2>
						We have a team of
						<span className="orgits-title-animation">
							creative people
							<span className="orgits-title-icon">
								<img src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					{teams.map((team, index) => (
						<FadeInStagger key={team.id} index={index} className="col-xl-3 col-md-6">
							<TeamCard team={team} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Teams;
