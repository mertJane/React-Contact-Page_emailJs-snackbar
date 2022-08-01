import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Snackbar from "./Snackbar";

const Contact = () => {
  const [snackbar, setSnackbar] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const contactValues = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const handleChange = (e) => {
    if (e.target.value.length > 10) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleSnack = () => {
    setSnackbar(true);
    setTimeout(() => {
      setSnackbar(false);
    }, 2800);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_KEY",
        "YOUR_TEMPLETE_KEY",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
          console.log(contactValues);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {snackbar && <Snackbar message="Your message successfully sent." />}

      <div className="frame">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h1 className="title">Contact Us.</h1>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              type="text"
              value={contactValues.user_name}
              name="user_name"
            />
            <label htmlFor="email">Email</label>
            <input
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              type="email"
              value={contactValues.email}
              name="user_email"
            />
            <label htmlFor="message">Message</label>
            <textarea
              onChange={handleChange}
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              value={contactValues.message}
              name="message"
              cols="63"
              rows="12"
            />
            <button
              onClick={handleSnack}
              type="submit"
              value="Send"
              disabled={disabled}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
