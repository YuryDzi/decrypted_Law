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
              <p>Senior Partner</p>
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
              <p>Senior Partner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
