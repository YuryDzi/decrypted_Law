import React from 'react';
// import ai from '../../assets/ai.png';
import blog05 from '../../assets/blog05.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">DECRYPTED</h1>
      <h1 className="gradient__text">LEGAL &amp; CONSULTING</h1>
      <p>
        The firm for entrepreneurs. Prioritizing what matters. Innovative expert
        service. Aligned incentives. Accessible pricing. No billing surprises.
      </p>
    </div>

    <div className="gpt3__header-image">
      <img src={blog05} />
    </div>
  </div>
);

export default Header;
