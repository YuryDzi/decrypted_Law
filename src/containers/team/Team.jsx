import React from 'react';
import './team.css';
import team1 from '../../assets/team1.jpg';
import team2 from '../../assets/team2.jpg';
/* eslint-disable */
function Team() {
  
  return (
    <div className="container">

    <div className="row heading">
      <div className="col-md-6 col-md-offset-3">
        <h2 className="text-center bottom-line">Meet Our Team</h2>
        <p className="subheading text-center">Creative Nerds</p>
      </div>
    </div>
  
    <div className="row team-row">
  
      <div className="col-md-4 col-sm-6 team-wrap">
        <div className="team-member text-center">
          <div className="team-img">
            <img src={team1} alt="" />
            <div className="overlay">
              <div className="team-details text-center">
                <p>
                  Our web design team will spend time with our digital marketing team.
                </p>
                <div className="socials mt-20">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-google-plus"></i></a>
                  <a href="#"><i className="fa fa-envelope"></i></a>
                </div>
              </div>
            </div>
          </div>
          <h6 className="team-title">John Marshall</h6>
          <span>Designer</span>
        </div>
      </div>
  
      <div className="col-md-4 col-sm-6 team-wrap">
        <div className="team-member text-center">
          <div className="team-img">
            <img src={team2} alt="" />
            <div className="overlay">
              <div className="team-details text-center">
                <p>
                  Our web design team will spend time with our digital marketing team.
                </p>
                <div className="socials mt-20">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-google-plus"></i></a>
                  <a href="#"><i className="fa fa-envelope"></i></a>
                </div>
              </div>
            </div>
          </div>
          <h6 className="team-title">Steve Roberts</h6>
          <span>Photographer</span>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Team;
