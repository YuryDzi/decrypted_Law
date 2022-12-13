import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="DECRYPTED LEGAL &amp; CONSULTING"
        text=" The firm for entrepreneurs. Prioritizing what matters. Innovative expert
        service. Aligned incentives. Accessible pricing. No billing surprises."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        YOUR CONFIDANTE ON LEGAL AND BUSINESS ISSUES
      </h1>
      <a href="/#form"> Contact Us</a>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Subscriptions"
        text="Access to immediate and ongoing legal and advisory services for an upfront, fixed monthly cost."
      />
      <Feature
        title="Fixed Fees"
        text="Guaranteed prices for your specific projects and deliverables."
      />
      <Feature
        title="Bundles"
        text="Reduced prices for sets of popular and essential legal services."
      />
    </div>
  </div>
);

export default WhatGPT3;
