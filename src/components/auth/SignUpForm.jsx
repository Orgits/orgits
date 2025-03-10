import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import StarImg from "../../assets/images/v1/star2.png";
import FadeInUp from "../animation/FadeInUp";
import Field from "../common/Field";
function SignUpForm() {
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
							Create Account
							<span className="orgits-title-icon">
								<img src={StarImg} alt="Star" />
							</span>
						</span>
					</h2>
				</div>
				<div className="orgits-account-wrap">
					<form onSubmit={handleSubmit(submitForm)}>
						<Field label="Enter your full name" error={errors.fname}>
							<input
								{...register("fname", { required: "Full Name is required." })}
								type="text"
								name="fname"
								id="fname"
								placeholder="Adam Smith"
							/>
						</Field>
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
						<div className="orgits-account-checkbox">
							<input type="checkbox" id="check" />
							<label htmlFor="check">
								I have read and accept the <Link to="/">Terms & Conditions</Link> and
								<Link to="/"> Privacy Policy</Link>
							</label>
						</div>
						<button id="orgits-account-btn" type="submit">
							Create account
						</button>
						<div className="orgits-or">
							<p>or</p>
						</div>
						<a href="https://google.com" target="_blank" className="orgits-connect-login">
							Sign up with Google
						</a>
						<a href="https://fb.com" target="_blank" className="orgits-connect-login">
							Sign up with Facebook
						</a>

						<div className="orgits-account-bottom">
							<p>
								Already have an account? <Link to="/sign-in">Log in here</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</FadeInUp>
	);
}

export default SignUpForm;
