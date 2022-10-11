import React from 'react';
import PricingTable from './components/PricingTable';
import Footer from '../footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import CTA from '../../components/cta/CTA';
import './pricing.scss';

function Pricing() {
  const firstRow = [
    {
      headerText: 'Corporation / LLC Formations',
      subHeader:
        'We’ll get your company up and running, including incorporating or forming with the proper entity, issuing equity, filing the required state and federal forms, and setting up an equity incentive plan.',
      header: 'Single-Member LLC',
      pricing: 500,
      bp1: 'some bul',
      bp2: 'another bul',
      bp3: 'yet another bul',
    },
    {
      header: 'Multi-Member LLC',
      pricing: 1000,
      bp1: 'some bul',
      bp2: 'another bul',
      bp3: 'yet another bul',
    },
    {
      header: 'Corporation',
      pricing: 1500,
      bp1: 'some bul',
      bp2: 'another bul',
      bp3: 'yet another bul',
    },
  ];
  const secondRow = [
    {
      headerText: 'Financings',
      subHeader:
        'We’ll get your company up and running, including incorporatiEvery fundraising round has its own unique terms that require a custom approach. Below is our standard pricing for typical fundraising events. Give us a call to discuss your particular needs and expectations, and we will work with you to determine a custom upfront flat-fee for your financing round.g or forming with the proper entity, issuing equity, filing the required state and federal forms, and setting up an equity incentive plan.',
      header: 'SAFE Financings',
      pricing: 1000,
      bp1: 'some bul',
      bp2: 'another bul',
      bp3: 'yet another bul',
    },
    {
      header: 'Convertible Note Financings',
      pricing: 1500,
      bp1: 'some bul',
      bp2: 'another bul',
      bp3: 'yet another bul',
    },
    {
      header: 'Venture Financings (e.g., Series Seed)',
      pricing: 15000,
      bp1: 'some bul',
      bp2: 'another bul',
      bp3: 'yet another bul',
    },
  ];
  const thirdRow = [
    {
      headerText: 'Financings',
      subHeader:
        'We’ll get your company up and running, including incorporatiEvery fundraising round has its own unique terms that require a custom approach. Below is our standard pricing for typical fundraising events. Give us a call to discuss your particular needs and expectations, and we will work with you to determine a custom upfront flat-fee for your financing round.g or forming with the proper entity, issuing equity, filing the required state and federal forms, and setting up an equity incentive plan.',
      header: 'SAFE Financings',
      pricing: 1000,
      bp1: 'some bul',
      bp2: 'another bul',
      bp3: 'yet another bul',
    },
    {
      header: 'Convertible Note Financings',
      pricing: 1500,
      bp1: 'some bul',
      bp2: 'another bul',
      bp3: 'yet another bul',
    },
    {
      header: 'Venture Financings (e.g., Series Seed)',
      pricing: 15000,
      bp1: 'some bul',
      bp2: 'another bul',
      bp3: 'yet another bul',
    },
  ];
  return (
    <div>
      <div />
      <Navbar />
      <div className="container group">
        {firstRow.map((item, index) => (
          <PricingTable
            headerText={item.headerText}
            subHeader={item.subHeader}
            header={item.header}
            pricing={item.pricing}
            bp1={item.bp1}
            bp2={item.bp2}
            bp3={item.bp3}
            index={index}
          />
        ))}
      </div>
      <div className="container group">
        {secondRow.map((item, index) => (
          <PricingTable
            headerText={item.headerText}
            subHeader={item.subHeader}
            header={item.header}
            pricing={item.pricing}
            bp1={item.bp1}
            bp2={item.bp2}
            bp3={item.bp3}
            index={index}
          />
        ))}
      </div>
      <div className="container group">
        {thirdRow.map((item, index) => (
          <PricingTable
            headerText={item.headerText}
            subHeader={item.subHeader}
            header={item.header}
            pricing={item.pricing}
            bp1={item.bp1}
            bp2={item.bp2}
            bp3={item.bp3}
            index={index}
          />
        ))}
      </div>
      <div className="spliter" />
      <CTA />
      <Footer />
    </div>
  );
}

export default Pricing;
