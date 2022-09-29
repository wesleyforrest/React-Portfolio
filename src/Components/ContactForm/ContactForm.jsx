import React from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <form
        className="contact-form"
        action="https://formsubmit.co/wesleyforrest@me.com"
        method="POST"
      >
        <label className="contact-form__name-label">Name</label>
        <input
          className="contact-form__name-input"
          type="text"
          name="name"
          required
        />
        <label className="contact-form__email-label">Email</label>
        <input
          className="contact-form__email-input"
          type="email"
          name="email"
          required
        />
        <label className="contact-form__message-label">Comment</label>
        <input
          className="contact-form__message-input"
          type="text"
          name="message"
          required
        />
        <div className="contact-form__button-container">
          <input
            className="contact-form__submit-button"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
