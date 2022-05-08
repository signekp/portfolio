import React from "react";
import SectionHeader from "../components/SectionHeader";
import picOfMe from "../images/me.jpeg";

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
            I am 26 years old, and i study web development on CPH Business in
            Lyngby. <br />
            <br />I have an AK in multimediadesign from 2018. Here i started
            learn the basic of html and css. I hardcoded many websites this way
            and it was here my passion for web development started.
            <br />
            <br /> After that, i took a PBA in Design & Business, Comunation
            design & media to get some theory of how to make a website appealing
            to a customer. I finished that last year, but it was'nt enough for
            me. I did not learn anything about coding, so i knew that i needed
            to learn that, and now here i am, studying web development.
            <br />
            <br /> In my sparetime i work in a webbureau, where i managing a lot
            of changes on websites for our customers in Wordpress.
          </p>

          <img src={picOfMe} className="mePic aboutMe-section" alt="me"></img>
        </div>

        <SectionHeader heading="Coding skills" />
        <div className="codingSkils">
          <p>
            I have experience as a webdesigner for two companies, Keystones and
            Web-Koncept. Both jobs was creating new webdesigns for existing
            websites, in Wordpress. I have really good experiences with HTML &
            CSS. My journey to become a frontend developer startet this summer,
            and i have worked with:
          </p>
          <div className="codingSkills">
            <ul>
              <li className="aboutCss">CSS</li>
              <li className="aboutHtml">HTML</li>
              <li className="aboutJavascript">JAVASCRIPT</li>
              <li className="aboutReact">REACT</li>
              <li className="aboutNode">NODE.JS</li>
              <li className="aboutASP">ASP.NET FRAMEWORK</li>
              <li className="aboutPython">PYTHON</li>
            </ul>
          </div>
        </div>
        <SectionHeader heading="design Skills" />
        <div className="designSkills">
          <p>
            Besides my developer skills, i have spent a lot of time creating
            business cards, flyers, video editing and photo editing in Adobe
            programs. As mentioned i also have a PBA in design & business with
            specialty in communication design & media. So i have also worked a
            lot with:
            <ul>
              <li>
                <span className="bold first">Design:</span> Here, the learning
                consisted of design methods for product and process development,
                which are value-creating for the user. It is from the
                development process where you start with an idea to the
                realization of a product or a concept. Here, there has been a
                particular focus on analysis of target groups and sustainable
                initiatives
              </li>
              <li>
                <span className="bold second">Business: </span>
                Where we learned about business understanding and development
                based on innovative and sustainable models. What was to form the
                basis of our concepts and products was built on the basis of
                studies and analyzes of the users of the product or concept.
              </li>
              <li>
                <span className="bold third">Technology:</span> This area
                consisted of idea generation, creative and innovative processes
                as well as concept development in relation to the development of
                sustainable solutions, where a great deal of use was made of
                prototyping.
              </li>
            </ul>
          </p>
          <p>
            I am very glad for all the things i learned here, and i have used it
            for two different internships and when i made businesscards,
            webpages and flyers. But my real interest lies in frontend
            development.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
