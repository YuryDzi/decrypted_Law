import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="DECRYPTEDLEGAL &amp; CONSULTING" text="Expert attorney advice. Fixed fees. Subscription plans. On-demand legal consulting. Aligned Incentives. No surprises." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">WE FOCUS ON LEGAL ISSUES RELEVANT TO SUCCESSFUL BUSINESSES AND CREATORS</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Startups" text="Running a startup is exciting and rewarding, yet endlessly pushes you out of your comfort zone. We can be your sherpa and confidante on legal and business issues, including how to handle your legal operations and needs, so you can make bold choices and confidently face your challenges head-on each day." />
      <Feature title="Creators" text="Being an independent creator raises a wide-range of risks and negotiating with brands can be intimidating. We can help you protect your creations, negotiate with brands, and draft contracts that are easy to read and use." />
      <Feature title="Small Businesses" text="Even the most successful small businesses face legal challenges. We help with drafting and negotiating contracts, hiring and terminating employees, and protecting your intellectual property." />
    </div>
  </div>
);

export default WhatGPT3;
