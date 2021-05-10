import React, { Component } from "react";
import "./Portfolio.css";
import urgently from "../pictures/urgently.png";

class Portfolio extends Component {
  render() {
    return (
      <div className="mainPortfolio">
        <h1 className="portfolioPageTitle">Projects</h1>
        <div className="projects">
          <a
            href="https://urgently.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h1>Urgent!</h1>
          </a>
          <h4>
            A to-do list app with user sign-in, authentication, get, post,
            delete functionality
          </h4>
          <h3>Tech Used:</h3>
          <li>JavaScript - React.js</li>
          <li>Firebase</li>
          <li>CSS</li>
          <a
            href="https://github.com/millennium-faulken/urgent"
            target="_blank"
            rel="noreferrer"
          >
          Github Repo
          </a>
          <div className="urgentImg">
            <a
              href="https://urgently.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={urgently} className="urgent" alt="urgent" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
