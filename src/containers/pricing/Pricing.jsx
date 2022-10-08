import React from 'react';
import PricingTable from './components/PricingTable';
import Footer from '../footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import CTA from '../../components/cta/CTA';
import './pricing.scss';

function Pricing() {
  return (
    <div>
      <div />
      <Navbar />
      <h1 className="headerText">CORPORATION/LLC FORMATIONS</h1>
      <h2 className="sub-header-text">Our Corporation/LLC Formation packages all include a meeting to discuss the formation process including the pros and cons of entity types, equityholder agreements, voting rights, economic rights</h2>
      <PricingTable />
      <h1 className="headerText">FINANCINGS</h1>
      <h2 className="sub-header-text">Our Corporation/LLC Formation packages all include a meeting to discuss the formation process including the pros and cons of entity types, equityholder agreements, voting rights, economic rights</h2>
      <PricingTable />
      <h1 className="headerText">CUSTOM CONTRACT TEMPLATES</h1>
      <h2 className="sub-header-text">Our Corporation/LLC Formation packages all include a meeting to discuss the formation process including the pros and cons of entity types, equityholder agreements, voting rights, economic rights</h2>
      <PricingTable />
      <h1 className="headerText">POLICIES AND TERMS OF SERVICE</h1>
      <h2 className="sub-header-text">Our Corporation/LLC Formation packages all include a meeting to discuss the formation process including the pros and cons of entity types, equityholder agreements, voting rights, economic rights</h2>
      <PricingTable />
      <div className="spliter" />
      <CTA />
      <Footer />
    </div>
  );
}

export default Pricing;
