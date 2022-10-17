import React from 'react';
import './cta.css';
/* eslint-disable */
const CTA = () => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <p>Contact Us</p>
      <h3>Set up a free 30-minute consultation today</h3>
    </div>
    <div className="gpt3__cta-btn">
      <button type="button" onClick={() => window.location.href = 'mailto:yourmail@domain.com'}>Email us</button>
    </div>
  </div>
);

export default CTA;
