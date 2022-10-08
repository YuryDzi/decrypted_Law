import React from 'react';
import './cta.css';
/* eslint-disable */
const CTA = () => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <p>Contact Us</p>
      <h3>Register Today & start exploring the endless possibilities.</h3>
    </div>
    <div className="gpt3__cta-btn">
      <button type="button" onClick={() => window.location.href = 'mailto:yourmail@domain.com'}>Contact Us</button>
    </div>
  </div>
);

export default CTA;
