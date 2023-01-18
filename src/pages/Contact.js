import React, { useRef, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import emailjs from "@emailjs/browser";

export default function () {
	const [sentMail, setSentMail] = useState(false);

	const form = useRef();

	const sendEmail = (e) => {
		setSentMail(true);
		e.preventDefault();

		emailjs
			.sendForm(
				"service_05wa2hj",
				"template_qof0emn",
				form.current,
				"8VReHclcyXRheBWQ2"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		form.current.reset();
	};

	console.log(sentMail);
	return (
		<div className="contactContainer">
			<SectionHeader heading={"Contact"} />
			<div className="formcontainer">
				<p>Wanna get in contact? Write an email here</p>
				<div className="myform">
					<p className={sentMail ? "myform sent-text" : "myform hide"}>
						Your email has been successfully sent. <br />
						<br />I will get back to you as soon as possible.
					</p>
					<form
						ref={form}
						onSubmit={sendEmail}
						className={!sentMail ? "" : " hide"}>
						<div>
							<input
								type="text"
								className="formInput"
								placeholder="Name"
								name="name"
							/>
							<input
								type="email"
								className="formInput"
								placeholder="Email"
								name="email"
							/>
							<input
								type="text"
								className="formInput"
								placeholder="Subject"
								name="subject"
							/>
							<textarea
								type="text"
								className="formInput"
								cols="30"
								rows="8"
								placeholder="Your message"
								name="message"
							/>
							<input
								type="submit"
								value="Send message"
								className="formButton"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
