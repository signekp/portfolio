import React from "react";
import SectionHeader from "./SectionHeader";
import picOfMe from "../images/me.jpeg";
import { Link } from "react-router-dom";
import me from "../images/IMG3449.jpg";

export default function HomeAbout() {
	return (
		<div className="home-about">
			<SectionHeader heading="about me" />
			<div className="aboutme-container">
				<p className="about-me aboutMe-section">
					<span className="aboutFirstLine">
						My name is Signe Koefoed Petersen.{" "}
					</span>
					I am 26 years old, and i study web development on CPH Business in
					Lyngby. <br />
					<br />I have an AK in multimediadesign from 2018. Here i started learn
					the basic of html and css. I hardcoded many websites this way and it
					was here my passion for web development started.
					<br />
					<br /> After that, i took a PBA in Design & Business, Comunation
					design & media to get some theory of how to make a website appealing
					to a customer. I finished that last year, but it was'nt enough for me.
					I did not learn anything about coding, so i knew that i needed to
					learn that, and now here i am, studying web development.
					<br />
					<br /> In my sparetime i work in a webbureau, where i managing a lot
					of changes on websites for our customers in Wordpress.
				</p>

				<img src={me} className="aboutPic aboutMe-section" alt="me"></img>
			</div>
			<Link to={"/about"} className="about-link-button">
				<button className="aboutmebtn">Read more</button>
			</Link>
		</div>
	);
}
