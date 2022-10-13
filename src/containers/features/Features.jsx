import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Your On-Demand General Counsel',
    text: 'Your committed in-house counsel, there to dissect problems, deliver practicaladvice and manage legal operations.',
  },
  {
    title: 'Launch Your Business',
    text: 'Customized company formation, essential agreements and equity issuances to set your business up for success.',
  },
  {
    title: 'Raise Money',
    text: 'Negotiate, handle and advise on your fundraising efforts via venture capital, SAFEs, debt and other financing transactions.',
  },
  {
    title: 'Build Your Brand',
    text: 'Negotiate with brands and sponsors so you can focus on making awesome content. Protect your brand with trademark counseling and filings.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Servises that are built for you!</h1>
      <p>Transparent pricing. No surprise bills. Services tailored for your business.</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
