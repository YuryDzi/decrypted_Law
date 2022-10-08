import React from 'react';
import './contactInput.scss';

function ContactInput() {
  return (
    <div className="container-input">
      {/* <div className="demo-flex-spacer" />   */}
      <div className="webflow-style-input">
        <input className="" type="name" placeholder="First & Last Name" />
        <input className="" type="email" placeholder="What's your email?" />
        <button type="button"> Send </button>
        {/* <button type="submit">
          <i className="icon ion-android-arrow-forward" />
        </button> */}
      </div>
      {/* <div className="demo-flex-spacer" /> */}
    </div>
  );
}

export default ContactInput;
