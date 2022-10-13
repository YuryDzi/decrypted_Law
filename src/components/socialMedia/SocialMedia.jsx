import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function SocialMedia() {
  return (
    <Container>
      <div className="social__media">
        <ul className="social__media">
          <li className="social__media__li">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size="2em" color="white" />
            </a>
          </li>
          <li className="social__media__li">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size="2em" color="white" />
            </a>
          </li>
          <li className="social__media__li">
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter size="2em" color="white" />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default SocialMedia;
