import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './cta.scss';
/* eslint-disable */
function CTA() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_KEY_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
      <div className="gpt3__cta">
        <div className="gpt3__cta-content">
          <p>Contact us</p>
          <h3>
            Send us a message or email us directly at hello@decryptedlaw.com{" "}
          </h3>
        </div>
        <form className="form-gpt3" ref={form} onSubmit={sendEmail}>
          <label>First & Last Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea className="message-gpt3" name="message" />
          <div className="gpt3__cta-btn">
            <button type="button" ref={form} onClick={sendEmail}>
              Send
            </button>
          </div>
          {/* <input type="submit" value="Send" /> */}
        </form>
        {/* </div> */}
        {/* <div className="gpt3__cta-btn">
      <button type="button" ref={form} onClick={sendEmail}>Send</button>
    </div> */}
      </div>
    );
  };

export default CTA;
