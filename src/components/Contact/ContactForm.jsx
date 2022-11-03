import React from "react";
import "./contact.css";
const ContactForm = () => {
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
                <label htmlFor="firstName">First name</label>
                <input type="text" placeholder="Enter your first name" />
              </div>
            </div>
            <div className="column">
              <div className="input-box">
                <label htmlFor="firstName">First name</label>
                <input type="text" placeholder="Enter your first name" />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="input-box">
              <label htmlFor="firstName">First name</label>
              <input type="text" placeholder="Enter your first name" />
            </div>
          </div>
          <div className="form-row">
            <div className="input-box">
              <label htmlFor="firstName">First name</label>
              <textarea
                name=""
                id=""
                placeholder="Send me a message and I'll reply you as soon as possible..."
              ></textarea>
            </div>
          </div>
          <div>
            <div className="input-box">
              <div className="flex-check">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">
                  You agree to providing your data to Ogochuks who may contact
                  you.
                </label>
              </div>
            </div>
          </div>
          <div className="input-box">
            <input type="submit" value="Send message" />
          </div>
        </form>
      </section>
    </section>
  );
};

export default ContactForm;
