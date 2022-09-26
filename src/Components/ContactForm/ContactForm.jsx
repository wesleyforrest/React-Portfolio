import React from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <form className="contact-form">
        <label className="contact-form__name-label">Name</label>
        <input className="contact-form__name-input" type="text" />
        <label className="contact-form__email-label">Email</label>
        <input className="contact-form__email-input" type="text" />
        <label className="contact-form__message-label">Comment</label>
        <input className="contact-form__message-input" type="text" />
        <input
          className="contact-form__submit-button"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default ContactForm;
