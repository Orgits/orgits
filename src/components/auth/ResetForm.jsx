import { useForm } from "react-hook-form";
import StarImg from "../../assets/images/v1/star2.png";
import FadeInUp from "../animation/FadeInUp";
import Field from "../common/Field";
function ResetForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		console.log("Submite Form Data = ", formData);
	};
	return (
		<FadeInUp className="section orgits-section-padding">
			<div className="container">
				<div className="orgits-account-title">
					<h2>
						<span className="orgits-title-animation">
							Reset Password
							<span className="orgits-title-icon">
								<img src={StarImg} alt="star" />
							</span>
						</span>
					</h2>
				</div>
				<div className="orgits-account-wrap">
					<form onSubmit={handleSubmit(submitForm)}>
						<Field label="Enter email address" error={errors.email}>
							<input
								{...register("email", { required: "Email is required." })}
								type="email"
								name="email"
								id="email"
								placeholder="hello@orgits.in"
							/>
						</Field>
						<Field label="Enter Password" error={errors.password}>
							<input
								{...register("password", {
									required: "Password is required.",
									minLength: {
										value: 8,
										message: "Your password must be at least 8 characters.",
									},
								})}
								type="password"
								name="password"
								id="password"
								placeholder="Enter password"
							/>
						</Field>
						<button id="orgits-account-btn" type="submit">
							Reset account
						</button>
						<div className="orgits-account-bottom m-0">
							<p>If you didn’t request a password recovery link, please ignore this.</p>
						</div>
					</form>
				</div>
			</div>
		</FadeInUp>
	);
}

export default ResetForm;
