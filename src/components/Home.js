import React, { Component } from "react";
import Picture from "../pictures/ResumePicCircle.png";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="homeAbout">
        <div className="me">
          <div className="picture">
            <img src={Picture} alt="stuff" />
          </div>
          <div className="name">
            <h1>Justin Faulkenberry</h1>
            <h4>Software Engineer</h4>
          </div>
        </div>
        <div className="about">
          <h1>About</h1>
          <p>
            This is just a paragraph that will be about me, Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed elementum iaculis sapien,
            ut condimentum ligula maximus a. Vestibulum ut bibendum libero.
            Integer ligula nibh, dignissim eu lectus sed, bibendum posuere elit.
            Quisque lacinia dictum luctus. Mauris id posuere justo, eu egestas
            nibh. Integer dignissim sem ut tortor placerat, a iaculis nisi
            vulputate. Pellentesque feugiat nibh quis felis volutpat, vel
            fermentum tortor ornare. Duis id tincidunt lectus. Nulla fringilla
            ipsum id vehicula cursus. Maecenas lacus mauris, mattis rhoncus
            auctor vitae, tempor at nisi. Curabitur a imperdiet elit. Fusce sed
            lobortis magna, sit amet porttitor tellus. Vivamus malesuada leo vel
            felis sagittis pellentesque.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
