import React from 'react';
import './philosophy.css';

function PhilosophyMain() {
  return (
    <body className="light-theme">
      <div className="banner d-flex align-items-center">
        <div className="banner-left">
          <h1>
            Transparent <br /> Modern <br /> Property
          </h1>
          <div className="inner-desc">
            <p>
              we are here to make your journey to a new home, simple and
              memorable. So we decided to bring you a platform which allows you
              to browse through millions of property listings across 900+ cities
              in India. Now buying and renting comes with the freedom of ease
              and comfort.{' '}
            </p>
            <form>
              <div className="form-group d-flex flex-wrap">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputtext1"
                  placeholder="Enter zipcode to search properties here"
                />
                <button type="submit" className="black-btn">
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="social-icons d-flex align-items-center">
            <ul className="d-flex">
              <li>
                <a href="blank" target="_blank">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="blank" target="_blank">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="blank" target="_blank">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
            </ul>
            <span>Follow us</span>
          </div>
        </div>
        <div className="banner-right d-flex">
          <div className="family">
            <img
              src="https://yudiz.com/codepen/real-estate/property-img-one.png"
              alt="img"
              className="img-fluid"
            />
            <img
              src="https://yudiz.com/codepen/real-estate/property-img-two.png"
              alt="img"
              className="img-fluid"
            />
            <div className="banner-right-inner">
              <h2>42k+</h2>
              <span>
                satisfied <br /> family
              </span>
              <img
                src="https://yudiz.com/codepen/real-estate/heart-icon.svg"
                alt="heart-icon"
                className="img-fluid"
              />
            </div>
            <img
              src="https://yudiz.com/codepen/real-estate/property-img-three.png"
              alt="img"
              className="img-fluid"
            />
            <img
              src="https://yudiz.com/codepen/real-estate/property-img-four.png"
              alt="img"
              className="img-fluid"
            />
          </div>
          <div className="sale">
            <img
              src="https://yudiz.com/codepen/real-estate/property-img-five.png"
              alt="img"
              className="img-fluid"
            />
            <img
              src="https://yudiz.com/codepen/real-estate/property-img-six.png"
              alt="img"
              className="img-fluid"
            />
            <div className="banner-right-inner">
              <h2>30k+</h2>
              <span>
                Available <br /> Unit for Sale
              </span>
              <img
                src="https://yudiz.com/codepen/real-estate/unit-icon.svg"
                alt="unit-icon"
                className="img-fluid"
              />
            </div>
            <img
              src="https://yudiz.com/codepen/real-estate/property-img-seven.png"
              alt="img"
              className="img-fluid"
            />
            <img
              src="https://yudiz.com/codepen/real-estate/property-img-eight.png"
              alt="img"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </body>
  );
}

export default PhilosophyMain;
