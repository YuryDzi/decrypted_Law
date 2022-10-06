import React from 'react';
// import ai from '../../assets/ai.png';
import blog05 from '../../assets/blog05.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">DECRYPTED LEGAL &amp; CONSULTING</h1>
      <p>
        Decrypted is the modern law firm built for entrepreneurial startups,
        creators, and small business owners. Expert attorney advice. Upfront
        fixed fees. Subscription plans. On-demand legal consulting. Aligned
        incentives. No surprises.
      </p>
    </div>

    <div className="gpt3__header-image">
      <img src={blog05} />
    </div>
  </div>
);

export default Header;
