import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";

function FooterContact() {
	return (
		<>
			<div className="orgits-section-title center playfair pb-0 light max-width-xl">
				<h2>Want to decorate your dream space with us?</h2>
			</div>
			<FadeInStaggerTwo className="orgits-footer-info-wrap">
				<FadeInStaggerTwoChildren>
					<a className="orgits-footer-info" href="mailto:mthemeus@gmail.com">
						mthemeus@gmail.com
					</a>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<a className="orgits-footer-info" href="tel:+91 928-9687-92800">
						+91 928-9687-92800
					</a>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<a className="orgits-footer-info" href="#">
						Haward Street,10203 USA
					</a>
				</FadeInStaggerTwoChildren>
			</FadeInStaggerTwo>
		</>
	);
}

export default FooterContact;
