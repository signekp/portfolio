import React from "react";
import picOfMe from "../images/me.jpeg";
import me from "../images/IMG3449.jpg";
import { HashLink } from "react-router-hash-link";

export default function Hero() {
	return (
		<section className="home-section active">
			<h1 className="hero-heading">Hi, i'm</h1>
			<h2 className="heading">Signe Petersen</h2>
			<p className="hero-paragraph">A creative frontend developer</p>
			<img src={me} className="home-img" alt="me"></img>
			<HashLink smooth to="/#projectSection">
				{" "}
				<button className="home-button">See more</button>
			</HashLink>
			<div id="projectSection"></div>
		</section>
	);
}
