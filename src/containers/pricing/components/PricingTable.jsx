import React from 'react';

function pricingTable() {
  return (
    <div className="container group">
      <div className="grid-1-5">
        <h2>Single-Owner LLC Formation</h2>
        <h3>
          <span className="uppercase">$500</span>
        </h3>
        <ul>
          <li>Limited Email Support</li>
          <li>Unlimited Data Transfer</li>
          <li>10GB Local Storage</li>
        </ul>
        <a href="button" className="button">
          Sign Up
        </a>
      </div>
      <div className="grid-1-5">
        <h2>Multi-Owner LLC Formation</h2>
        <h3>
          <sup>$</sup>1,000
        </h3>
        <ul>
          <li>Limited Email Support</li>
          <li>Unlimited Data Transfer</li>
          <li>20GB Local Storage</li>
        </ul>
        <a href="button" className="button">
          Sign Up
        </a>
      </div>
      <div className="grid-1-5">
        <h2>Corporation Formation</h2>
        <h3>
          {/* <sup>$</sup>1500 */}
        </h3>
        <ul>
          <li>Email Support</li>
          <li>Unlimited Data Transfer</li>
          <li>30GB Local Storage</li>
        </ul>
        <a href="button" className="button">
          $1500
        </a>
      </div>
      <div className="grid-1-5">
        <h2>Non-Profit or B-Corporation Formation</h2>
        <h3>
          <sup>$</sup>1500
        </h3>
        <ul>
          <li>Email Support</li>
          <li>Phone Support</li>
          <li>Unlimited Data Transfer</li>
        </ul>
        {/* <a href="button" className="button">
          Sign Up
        </a> */}
      </div>
      <div className="grid-1-5">
        <h2>Custom Contract Templates</h2>
        <ul>
          <li>Advisor Agreement</li>
          <li>Consulting Agreement</li>
          <li>Brand Ambassador Agreement</li>
          <li>Influencer Sponsorship Agreement</li>
          <li>Content Collaboration agreement</li>
          <li>Social Media Appearance Agreement</li>
          <li>Non-Disclosure Agreement</li>
          <li>Employee Offer Letter</li>
        </ul>
        <a href="button" className="button">
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default pricingTable;
