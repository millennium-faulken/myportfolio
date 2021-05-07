import React, { useState } from "react";
import firebase from "../firebase";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const ref = firebase.firestore().collection("portfolio");

  function addMessage() {
    const newMessage = {
      name,
      email,
      message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
    ref
      .doc(newMessage.id)
      .set(newMessage)
      .catch((err) => {
        console.error(err);
      });
    setSubmitted(true);
  }

  return (
    <div className="mainContact">
      <div className="contactTitle">
        <h1>Let's Work Together</h1>
      </div>
      <form className="form">
        <h4 className="nameForm">Name</h4>
        <input
          className="nameInput"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h4 className="email">Email</h4>
        <input
          className="emailInput"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h4 className="message">Message</h4>
        <textarea
          className="messageInput"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={() => addMessage()}>SUBMIT</button>
        <div className="successContainer">
          {submitted && <div className="success">Your message was sent, thank you!</div>}
        </div>
      </form>
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/justin-faulkenberry/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.github.com/millennium-faulken/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.twitter.com/faulkenjay/"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}

export default Contact;
