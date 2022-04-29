import React, { Component } from "react";
import "./Portfolio.css";
import urgently from "../pictures/urgent.png";
import bubble from "../pictures/bubble.PNG";
import messages from "../pictures/messages.png";
import { BiMessageRoundedError } from "react-icons/bi";

class Portfolio extends Component {
  render() {
    return (
      <div className="mainPortfolio">
        <div className="urgentProject">
          <h1 className="portfolioPageTitle">Projects</h1>
          <div className="urgentImg">
            <a
              href="https://bubbleitup.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={bubble} className="urgent" alt="urgent" />
            </a>
          </div>
          <a
            href="https://bubbleitup.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h1 className="logo">
              bubble
              <BiMessageRoundedError />
            </h1>
          </a>
          <h4>
            A real-time web messaging app with active/inactive user list, and
            google sign-in or email/password authentication.
          </h4>
          <h3>Tech Used:</h3>
          <li>JavaScript - React.js</li>
          <li>Firebase</li>
          <li>CSS</li>
          <a
            href="https://github.com/millennium-faulken/messenger"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            Github Repo
          </a>
        </div>
        <div className="urgentProject">
          <div className="urgentImg">
            <a
              href="https://urgently.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={urgently} className="urgent" alt="urgent" />
            </a>
          </div>
          <a
            href="https://urgently.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h1>Urgent!</h1>
          </a>
          <h4>
            A to-do list app with user sign-in, authentication, and CRUD
            functionality
          </h4>
          <h3>Tech Used:</h3>
          <li>JavaScript - React.js</li>
          <li>Firebase</li>
          <li>CSS</li>
          <a
            href="https://github.com/millennium-faulken/urgent"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            Github Repo
          </a>
        </div>
        <div className="urgentProject">
          <div className="urgentImg">
            <a
              href="https://messagetheworld.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={messages} className="urgent" alt="urgent" />
            </a>
          </div>
          <a
            href="https://messagetheworld.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h1>Messages to no one...</h1>
          </a>
          <h4>
            An app to leave messages to the world using a MERN stack,
            create(with bad word filter) and read messages.
          </h4>
          <h3>Tech Used:</h3>
          <li>MondgoDb</li>
          <li>Express.js</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Redux</li>
          <li>Mongoose</li>
          <li>Axios</li>
          <li>Sass</li>
          <li>Heroku</li>
          <a
            href="https://github.com/millennium-faulken/notes"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            Github Repo
          </a>
        </div>
        <div className="comingSoon">
          <h1 className="more">More Coming Soon!</h1>
        </div>
      </div>
    );
  }
}

export default Portfolio;
