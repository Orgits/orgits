import CountUp from "react-countup";
function AboutCounter() {
	return (
		<div className="orgits-counter-wrap">
			<div className="orgits-counter-data">
				<h2 className="orgits-counter-number">
					<span className="orgits-counter">
						<CountUp end={15} duration={3} redraw={true} enableScrollSpy />
					</span>
					+
				</h2>
				<p>Years of experience</p>
			</div>
			<div className="orgits-counter-data">
				<h2 className="orgits-counter-number">
					<span className="orgits-counter">
						<CountUp end={120} duration={3} redraw={true} enableScrollSpy />
					</span>
					k
				</h2>
				<p>Successful projects</p>
			</div>
			<div className="orgits-counter-data">
				<h2 className="orgits-counter-number">
					<span className="orgits-counter">
						<CountUp end={100} duration={3} redraw={true} enableScrollSpy />
					</span>
					%
				</h2>
				<p>Client satisfaction rate</p>
			</div>
		</div>
	);
}

export default AboutCounter;
