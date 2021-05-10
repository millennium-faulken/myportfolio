import React, { Component } from "react";
import Picture from "../pictures/ResumePicCircle.png";
import react from "../logo/react.png";
import javascript from "../logo/javascript.png";
import html from "../logo/html5.png";
import css from "../logo/css.png";
import node from "../logo/node.svg";
import mongo from "../logo/mongodb.png";
import ex from "../logo/express.png";
import firebase from "../logo/firebase.png";
import python from "../logo/python.png";
import unity from "../logo/unity.png";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="main">
        <div className="homeAbout">
          <div className="me">
            <div className="picture">
              <img src={Picture} alt="stuff" />
            </div>
            <div className="name">
              <h1>Justin M Faulkenberry</h1>
              <h4>Software Engineer</h4>
            </div>
          </div>
          <div className="about">
            <h1>About Me</h1>
            <p>
              Welcome, my name is Justin, and I am a Software Engineer living in
              Austin, Texas. When I’m not spending my days coding, I'm usually
              outside enjoying the Texas sun, whether that be on Lady Bird Lake
              or just relaxing at the park.
            </p>
          </div>
        </div>
        <div className="homeSkills">
          <div className="skillsTitle">
            <h1>Tech Skills</h1>
            <p>
              I specialize in responsive, full stack web development and love
              learning new languages and technologies every day. I have
              extensive knowledge in using a MERN stack and working with CSS.
              Below are some of the languages and tech I use daily:
            </p>
          </div>
          <div className="mainSkills">
            <div className="skillsBox">
              <img className="reactLogo" src={react} alt="react" />
              <h2>React</h2>
            </div>
            <div className="skillsBox">
              <img
                className="javascriptLogo"
                src={javascript}
                alt="javascript"
              />
              <h2>Javascript</h2>
            </div>
            <div className="skillsBox">
              <img className="htmlLogo" src={html} alt="html" />
              <h2>HTML</h2>
            </div>
            <div className="skillsBox">
              <img className="cssLogo" src={css} alt="css" />
              <h2>CSS</h2>
            </div>
            <div className="skillsBox">
              <img className="nodeLogo" src={node} alt="node" />
              <h2>Node.js</h2>
            </div>
            <div className="skillsBox">
              <img className="mongoLogo" src={mongo} alt="mongo" />
              <h2>MongoDB</h2>
            </div>
            <div className="skillsBox">
              <img className="exLogo" src={ex} alt="ex" />
              <h2>Express.js</h2>
            </div>
            <div className="skillsBox">
              <img className="firebaseLogo" src={firebase} alt="firebase" />
              <h2>Firebase</h2>
            </div>
            <div className="skillsBox">
              <img className="pythonLogo" src={python} alt="python" />
              <h2>Python</h2>
            </div>
            <div className="skillsBox">
              <img className="unityLogo" src={unity} alt="unity" />
              <h2>Unity</h2>
            </div>
          </div>
        </div>
        <footer>
          <h4>&#169; Justin Faulkenberry 2021</h4>
        </footer>
      </div>
    );
  }
}

export default Home;
