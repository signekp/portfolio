import React from "react";
import SectionHeader from "../components/SectionHeader";
import picOfMe from "../images/me.jpeg";
import { NavLink } from "react-router-dom";
import me from "../images/IMG3449.jpg";

export default function About() {
	return (
		<div>
			<div className="home-about">
				<SectionHeader heading="about me" />

				<div className="aboutme-container">
					<p className="about-me aboutMe-section">
						<span className="aboutFirstLine">
							My name is Signe Koefoed Petersen.{" "}
						</span>
						I am 27 years old, and i study web development on CPH Business in
						Lyngby. <br />
						<br />I have an AK in multimediadesign from 2018. It was here i
						started learning the basic of html and css. All projects during the
						education I coded from scratch which taught me a lot of the basic
						building blocks of a website as well as responsiveness of an
						application. It was here my interest in web development started.
						<br />
						<br /> When I completed my multimedia design education, i took a PBA
						in Design & Business specializing in Comunation design & media to
						get some theory of how to make a website appealing and learn more
						about ux design. I finished that January 2021, but it wasn't enough
						for me. We didn't have any training in developing a website or
						applications, which I could clearly feel that I lacked knowledge in
						if I wanted to work with design and development in the future. So
						now I am studying a PBA in web development and will finish by
						January 2023
						<br />
						<br /> Alongside my studies, I have worked in several companies. My
						main tasks have been working with Wordpress, css, html and ux
						design. In addition, I have continuously been in various
						internships, where I have worked with ux design, usability,
						responsiveness and development. Right now I work part-time in a Web
						agency where I spend a lot of time in Wordpress, html & css with
						tasks within graphic assignments, web design and have previously
						been responsible for quality assurance of new websites.
					</p>

					<img src={me} className="mePic aboutMe-section" alt="me"></img>
				</div>

				<SectionHeader heading="Coding skills" />
				<div className="codingSkils">
					<p>
						I have experience as a webdesigner for three companies, Keystones,
						Web-Koncept and Frankly A/S. My primary tasks at Keystones were to
						sit and code missing functionality into the theme files, build new
						pages with html and style them with css. My current job in
						Web-Koncept also includes a lot of work with css, ux design and web
						design, and web design, which means that today I have a lot of
						experience in these subjects as I have managed to work a lot with
						the theories I have learned in practice. <br />
						<br /> My stay at Frankly was a 12-week internship where I
						participated in a project where we had to develop an e-learning
						program. This was built from scratch in pure html, css and
						Javascript and here I gained a lot of experience working especially
						with Javascript in the real world and for a real project.
						<br />
						<br />
						During my education in web development, I have worked with different
						development languages. What I have gained the most experience in is
						Javascript, React and Next.js since most of my school related
						projects as well as my bachelor project are coded in React and Next.
						. But I have also worked with C# in asp.net as well as Python. Some
						of the projects I have developed can be seen on{" "}
						<a
							href="https://github.com/signekp"
							target="_blank"
							rel="noreferrer"
							className="github-icon">
							github
						</a>
						&nbsp;or under <NavLink to="/projects">my projects</NavLink>.
					</p>
					<br />
					<p>I have experience coding in these languages:</p>
					<div className="codingSkills">
						<ul>
							<li className="aboutCss">CSS</li>
							<li className="aboutHtml">HTML</li>
							<li className="aboutJavascript">JAVASCRIPT</li>
							<li className="aboutReact">REACT</li>
							<li className="aboutNode">NEXT.JS</li>
							<li className="aboutASP">ASP.NET FRAMEWORK</li>
							<li className="aboutPython">PYTHON</li>
						</ul>
					</div>
				</div>
				<SectionHeader heading="design Skills" />
				<div className="designSkills">
					<p>
						Besides my developer skills, i have spent a lot of time creating web
						design, ux design, business cards, flyers, video editing and photo
						editing in Adobe programs. As mentioned i also have a PBA in design
						& business with specialty in communication design & media. So i have
						also worked a lot with three core principles within communication
						and design.
						<ul>
							<li>
								<span className="bold first">Design:</span> This includes the
								entire development process where we started with an idea and
								then to the realization of the product itself. Here I gained
								great learning within the analysis of target groups, sustainable
								initiatives and how you can produce a good product based on
								analysis with collected data and methods such as design
								thinking.
							</li>
							<li>
								<span className="bold second">Business: </span>
								Here I learned about business understanding and development
								based on innovative and sustainable models. What was to form the
								basis for our concepts and products was built on the basis of
								studies and analyzes of the users who were the target group.
							</li>
							<li>
								<span className="bold third">Technology:</span> Here I learned a
								lot about methods for idea generation, creative and innovative
								processor as well as concept development in relation to the
								development of sustainable solutions, where extensive use was
								made prototyping.
							</li>
						</ul>
					</p>
					<p>
						I am very happy with everything about communication and design that
						I learned through my bachelor in Design and Business. However, I am
						also very happy with my choice to study web development, as it is a
						good mix of development and design that I am really passionate
						about.
					</p>
				</div>
			</div>
		</div>
	);
}
