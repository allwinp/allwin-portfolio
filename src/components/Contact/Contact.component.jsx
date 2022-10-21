import React, { useState } from "react";
import "./Contact.styles.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => {
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
        }, 2500);
      })
      .catch((error) => alert(error));
  }

  return (
    <div id="contact-page">
      <div id="contact-items-container">
        <div id="embedmap-display">
          <iframe
            title="maps-location"
            frameborder="0"
            src="https://www.google.com/maps/embed/v1/place?q=424+15th+St,+san+diego,+CA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
        <form netlify name="contact" onSubmit={handleSubmit}>
          <h2>Contact Me</h2>
          <p>
            Want to hire me? Want to chat? Searching for Blackbeard's lost
            treasure?
            <br></br>I can help with the first two.
          </p>
          <div>
            <label htmlFor="name">Name</label>
            <input
              required
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              required
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button id="#contact-submit-button" type="submit">
            Submit
          </button>
          {formSubmitted && (
            <div className="form-submitted-alert-container">
              Your message has sent!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
