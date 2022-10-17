import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';
import FaqTable from '../FAQ/Faq';
import ContactInput from '../../components/contactInput/ContactInput';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Let&#39;s Talk</h1>
      <h2 className="gradient__text">If you like our approach and are curious to learn more, we&#39;re happy to arrange a free 30-minute consultation to meet you, discuss your business and see how Decrypted can best be of service to you.</h2>
    </div>
    <ContactInput />
    <FaqTable />
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>355 S. Grand Ave., Ste. 2450, Los Angeles, CA 90071<br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>355 S. Grand Ave., Ste. 2450, Los Angeles, CA 90071</p>
        <p>085-132567</p>
        <p>hello@decryptedlaw.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
