import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import SocialMedia from '../socialMedia/SocialMedia';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <Link to="/philosophy">Philosophy</Link>
          </p>
          <p>
            <Link to="/pricing">Pricing</Link>
          </p>
          <a href="#form">Contact</a>
        </div>
      </div>
      <SocialMedia />
      {/* <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div> */}
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <Link to="/philosophy">Philosophy</Link>
              </p>
              <p>
                <Link to="/pricing">Pricing</Link>
              </p>
              <a href="#form">Contact</a>
            </div>
            {/* <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
