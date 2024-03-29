import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import WhatGPT3 from '../whatGPT3/WhatGPT3';
import Features from '../features/Features';
import CTA from '../../components/cta/CTA';
import Navbar from '../../components/navbar/Navbar';
import Brand from '../../components/brand/Brand';
import Team from '../team/Team';

import './mainPage.css';

const MainPage = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
      <Brand />
      <div className="spliter" />
      <WhatGPT3 />
      <div className="spliter" />
      <Team />
      <div className="spliter" />
      <Features />
      <div className="spliter" />
      <CTA />
      <div className="spliter" />
      <Footer />
    </div>
  </div>
);

export default MainPage;
