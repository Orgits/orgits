import FadeInUp from "../../animation/FadeInUp";
import FaqAccordion from "./FaqAccordion";

function Faq() {
	return (
		<div className="section orgits-section-padding3">
			<div className="container">
				<div className="orgits-section-title center libre-font">
					<h2>Get answers to all your questions</h2>
				</div>
				<div className="accordion orgits-accordion-wrap5" id="orgits-accordion">
					<FadeInUp>
						<FaqAccordion />
					</FadeInUp>
				</div>
			</div>
		</div>
	);
}

export default Faq;
