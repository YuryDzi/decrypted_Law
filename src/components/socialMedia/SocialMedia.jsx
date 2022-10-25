import React from 'react';
import { Container } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

function SocialMedia() {
  return (
    <Container>
      <div className="social__media">
        <ul className="social__media">
          <li className="social__media__li">
            <a href="https://www.linkedin.com/company/decrypted-law/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size="2em" color="white" />
            </a>
          </li>
          <li className="social__media__li">
            <a href="https://www.instagram.com/decryptedlaw/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size="2em" color="white" />
            </a>
          </li>
          <li className="social__media__li">
            <a href="https://www.tiktok.com/@decryptedlaw" target="_blank" rel="noopener noreferrer">
              <FaTiktok size="2em" color="white" />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default SocialMedia;
