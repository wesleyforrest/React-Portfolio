import React from "react";
import "./Contact.scss";
import ContactForm from "../../Components/ContactForm/ContactForm";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState(false);
  return (
    <>
      <div className="contact">
        <h1 className="contact__header">Get in touch</h1>
        <button className="contact__button" onClick={() => setForm(true)}>
          CONTACT
        </button>
      </div>

      {form ? <ContactForm /> : ""}
    </>
  );
};

export default Contact;
