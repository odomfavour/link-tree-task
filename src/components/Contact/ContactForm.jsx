import React, { useEffect, useState } from "react";
import "./contact.css";
const ContactForm = () => {
  const [slackName, setSlackName] = useState("");

  useEffect(() => {
    setSlackName("Ogochuks");
  }, []);

  return (
    <section className="contact-container">
      <section className="contact-box">
        <h3 className="section-title">Contact Me</h3>
        <p className="section-p">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <form action="">
          <div className="form-row">
            <div className="column">
              <div className="input-box">
                <label htmlFor="first_name">First name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  id="first_name"
                />
              </div>
            </div>
            <div className="column">
              <div className="input-box">
                <label htmlFor="last_name">Last name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  id="last_name"
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="yourname@email.com" id="email" />
            </div>
          </div>
          <div className="form-row">
            <div className="input-box">
              <label htmlFor="message">Message</label>
              <textarea
                name=""
                id="message"
                placeholder="Send me a message and I'll reply you as soon as possible..."
              ></textarea>
            </div>
          </div>
          <div>
            <div className="input-box">
              <div className="flex-check">
                <input type="checkbox" name="" id="checkbox_id" />
                <label htmlFor="checkbox_id">
                  You agree to providing your data to {slackName} who may
                  contact you.
                </label>
              </div>
            </div>
          </div>
          <div className="input-box">
            <button id="btn__submit" type="submit">
              Send message
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default ContactForm;
