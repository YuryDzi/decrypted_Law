import React from 'react';
import './team.css';
import team1 from '../../assets/team1.jpg';
import team2 from '../../assets/team2.jpg';

function Team() {
  return (
    <div className="container">
      <div className="row vh-100">
        <div className="col-sm-6 col-lg-3 my-auto">
          <div className="box shadow-sm p-4">
            <div className="image-wrapper mb-3">
              <img
                className="img-fluid"
                src={team1}
                alt="..."
              />
            </div>
            <div className="box-desc">
              <h5>Alexander Daniels</h5>
              <p>Co-Founder</p>
              <ul>
                <li>Duke University, BA (Economics; Environmental Policy &amp; Sciences)</li>
                <li>Wharton, MBA</li>
                <li>University of Pennsylvania Law School, JD</li>
                <li>Cooley, General Corporate Associate</li>
                <li>Surfer, wannabee historian and lover of the outdoors</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 my-auto">
          <div className="box shadow-sm p-4">
            <div className="image-wrapper mb-3">
              <img
                className="img-fluid"
                src={team2}
                alt="..."
              />
            </div>
            <div className="box-desc">
              <h5>Nareg Essaghoolian</h5>
              <p>Co-Founder</p>
              <ul>
                <li>California State University, Northridge, BS (Business Law)</li>
                <li>UCLA School of Law, JD</li>
                <li>Former podcast host and producer</li>
                <li>Cooley, General Corporate Associate</li>
                <li>Basketball, crypto enthusiast and restaurant explorer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
