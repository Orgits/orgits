import { useForm } from "react-hook-form";
import ContactThumb from "../../assets/images/contact/contact-thumb.png";
import Star2Img from "../../assets/images/v1/star2.png";
import FadeInRight from "../animation/FadeInRight";
import Field from "../common/Field";
function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		console.log("Submite Form Data = ", formData);
	};
	return (
		<div className="section orgits-section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="orgits-section-title">
							<h2>
								<span className="orgits-title-animation">
									Contact us for a
									<span className="orgits-title-icon">
										<img src={Star2Img} alt="Star" />
									</span>
								</span>
								personal experience
							</h2>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="orgits-contact-thumb ">
							<img src={ContactThumb} alt="Contact Thumb" />
						</FadeInRight>
					</div>
					<div className="col-lg-7">
						<div className="orgits-main-form">
							<form onSubmit={handleSubmit(submitForm)}>
								<div className="orgits-main-field">
									<Field label="Your Name" error={errors.name}>
										<input
											{...register("name", { required: "Name is required." })}
											type="name"
											name="name"
											id="name"
										/>
									</Field>
								</div>
								<div className="orgits-main-field">
									<Field label="Enter email address" error={errors.email}>
										<input
											{...register("email", { required: "Email is required." })}
											type="email"
											name="email"
											id="email"
										/>
									</Field>
								</div>
								<div className="orgits-main-field">
									<Field label="Enter Phone Number" error={errors.phone}>
										<input
											{...register("phone", { required: "Phone is required." })}
											type="phone"
											name="phone"
											id="phone"
										/>
									</Field>
								</div>
								<div className="orgits-main-field">
									<label>Write your message here...</label>
									<textarea name="textarea"></textarea>
								</div>
								<button id="orgits-main-btn" type="submit">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
