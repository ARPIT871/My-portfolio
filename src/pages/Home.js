import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from "@mui/icons-material/Twitter";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Home.css";
import { Experience } from "./Experience";
import Projects from "./Projects";
import Typewriter from "typewriter-effect";
import MyImage from "../assets/myimage.png";
import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="home">
      <div className="about " >
        <h2 className="animate__fadeIn"> {
          <Typewriter

            onInit={(typewriter) => {

              typewriter

                .typeString("Hi, I am a Developer")

                .pauseFor(1000)
                .deleteChars(12, 20)
                .typeString("  a creater")
                .pauseFor(1000)
                .deleteAll()
                .typeString("My Name is Arpit")
                .start();
            }}
          />
        }</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <Link to="https://github.com/ARPIT871"> <GitHubIcon /></Link>
          <Link to="https://twitter.com/arpitrajput871"><TwitterIcon /></Link>
          <Link to="https://www.linkedin.com/in/arpit-rajput-7420b1217"><LinkedInIcon /></Link>
        </div>
      </div>
      <div className="skills" aria-label="skills">
        <h1> About Me</h1>
        <img src={MyImage} alt="something"/>
        <ol className="list">
          <li className="item">
            {/* <h2 > something Here</h2> */}
            <span>
              "Hello, my name is Arpit Rajput and I am a full-stack developer based in Bhopal, Madhya Pradesh. I am currently pursuing a Bachelor of Technology in Computer Science. I have experience in developing web applications using a variety of technologies, including HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.<br />
              "I have been learning web development for several months now and am excited to continue expanding my knowledge and skills. While I haven't had any professional experience yet, I have been working on personal projects and practicing my coding skills regularly."<br />
              I am passionate about staying up-to-date with the latest developments in web technology and am always looking to expand my skillset. In my spare time, I enjoy working on personal projects and experimenting with new tools and frameworks. Thank you for visiting my portfolio, and please feel free to contact me if you have any questions or would like to discuss potential collaboration opportunities."
            </span>
          </li>
          <li className="item">
            <h2>Skills+Service</h2>

          </li>
        </ol>
      </div>
      <Experience />
      <Projects />

    </div>
  );
}

export default Home;
