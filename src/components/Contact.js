import React, { useState } from "react";
import firebase from "../firebase";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
  }

  return (
    <div className="mainContact">
      <h1>Contact Me</h1>
      <div className="form">
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
        <button onClick={() => addMessage()}>Submit</button>
      </div>
    </div>
  );
}

export default Contact;
