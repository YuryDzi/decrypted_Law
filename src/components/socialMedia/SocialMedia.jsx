import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function SocialMedia() {
  return (
    <Container>
      <div className="social__media">
        <ul className="social__media">
          <li className="social__media__li">
            <FaFacebook size="2em" color="white" />
          </li>
          <li className="social__media__li">
            <FaInstagram size="2em" color="white" />
          </li>
          <li className="social__media__li">
            <FaTwitter size="2em" color="white" />
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default SocialMedia;
