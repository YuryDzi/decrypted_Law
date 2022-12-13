import React from 'react';
import PricingTable from './components/PricingTable';
import PricingHeader from './components/PricingHeader';
import Footer from '../footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import OneBlockPrice from './components/OneBlockPrice';
import './pricing.scss';

function Pricing() {
  const row1 = [
    {
      headerText: 'On-Demand General Counsel',
      subHeader:
        'If you are looking for continuous support and guidance on how to manage your legal matters, we offer a monthly prepaid subscription, charged monthly. For example, monthly subscription could provide you with basic on-demand contract review and legal support.',
      header: 'Subscription',
      pricing: '500/month',
      bp1: '',
      bp2: '',
      bp3: '',
    },
  ];

  const row2 = [
    {
      headerText: 'Corporation & LLC Formations',
      subHeader: 'We’ll get your company up and running, including incorporating or forming with the proper entity, issuing equity, filing the required state and federal forms, and setting up an equity incentive plan.',
      header: 'Single-Member LLC',
      pricing: '500',
      bp1: 'some bul',
      bp2: 'another bul',
      bp3: 'yet another bul',
    },
    {
      header: 'Multi-Member LLC',
      pricing: '1,000',
      bp1: 'some bul',
      bp2: 'another bul',
      bp3: 'yet another bul',
    },
    {
      header: 'Corporation',
      pricing: '1,500',
      bp1: 'some bul',
      bp2: 'another bul',
      bp3: 'yet another bul',
    },
  ];

  const row3 = [
    {
      headerText: 'Financings',
      subHeader: 'Every fundraising round has its own unique terms that require a custom approach. Below is our standard pricing for typical fundraising events. Give us a call to discuss your particular needs and expectations, and we will work with you to determine a custom upfront flat-fee for your financing round.',
      header: 'SAFE Financings',
      pricing: '1,000',
      bp1: '',
      bp2: '',
      bp3: '',
    },
    {
      header: 'Convertible Note Financings',
      pricing: '1,500',
      bp1: 'some bul',
      bp2: 'another bul',
      bp3: 'yet another bul',
    },
    {
      header: 'Venture Financings (e.g., Series Seed)',
      pricing: '15,000',
      bp1: 'some bul',
      bp2: 'another bul',
      bp3: 'yet another bul',
    },
  ];

  const row4 = [
    {
      headerText: 'Custom Contract Templates',
      subHeader:
        'As an entrepreneur, you live and breathe contracts. We are ready to provide agreements designed for common contracting needs, which we tailor to your business. These include the following, each for $300. Contact us for your particular needs and we can determine the right package and pricing for you.',
      header: '',
      pricing: '300/each',
      bp1: 'Advisor Agreement',
      bp2: 'Consulting Agreement',
      bp3: 'Brand Ambassador Agreement',
      bp4: 'Influencer Sponsorship Agreement',
      bp5: 'Content Collaboration agreement',
      bp6: 'Social Media Appearance Agreement',
      bp7: 'Non-Disclosure Agreement',
      bp8: 'Employee Offer Letter',
    },
  ];
  const row5 = [
    {
      headerText: 'Commercial Contracts and Terms of Service',
      subHeader:
        'We will prepare and provide a custom commercial contract or terms of service tailored for your unique business. We typically charge $1,500 for each. Give us a call to discuss your particular needs and expectations.',
      header: '',
      pricing: '1,500/each',
      bp1: 'Privacy Policy',
      bp2: 'Terms of Service',
      bp3: 'SaaS agreement',
      bp4: 'Enterprise Services Agreement',
      bp5: 'Creative Services Agreement',
      bp6: 'Talent Services Agreement',
      bp7: 'Software License Agreement',
      bp8: 'Design Partner Agreement',
      bp9: 'Platform Services Agreement',
      bp10: 'Master Services Agreement',
    },
  ];

  const row6 = [
    {
      headerText: 'Trademarks',
      subHeader: 'We will conduct a trademark search, draft and file your trademark application, respond to any non-substantive USPTO Office Actions, and provide the trademark registration certificate.',
      header: 'Trademark Registration',
      pricing: '1,250',
      bp1: 'USPTO FILING',
      bp2: 'REGISTRATION CERTIFICATE',
    },
  ];

  return (
    <div>
      <div />
      <Navbar />
      <div className="spliter" />
      <div className="container group">
        <PricingHeader />
      </div>
      <div className="spliter" />
      <div className="container group">
        {row1.map((item, index) => (
          <OneBlockPrice
            headerText={item.headerText}
            subHeader={item.subHeader}
            header={item.header}
            pricing={item.pricing}
            bp1={item.bp1}
            bp2={item.bp2}
            bp3={item.bp3}
            bp4={item.bp4}
            bp5={item.bp5}
            bp6={item.bp6}
            bp7={item.bp7}
            bp8={item.bp8}
            bp9={item.bp9}
            bp10={item.bp10}
            index={index}
          />
        ))}
      </div>
      <div className="spliter" />
      <div className="container group">
        {row2.map((item, index) => (
          <PricingTable
            headerText={item.headerText}
            subHeader={item.subHeader}
            header={item.header}
            pricing={item.pricing}
            index={index}
          />
        ))}
      </div>
      <div className="spliter" />
      <div className="container group">
        {row3.map((item, index) => (
          <PricingTable
            headerText={item.headerText}
            subHeader={item.subHeader}
            header={item.header}
            pricing={item.pricing}
            index={index}
          />
        ))}
      </div>
      <div className="spliter" />
      <div className="container group">
        {row4.map((item, index) => (
          <OneBlockPrice
            headerText={item.headerText}
            subHeader={item.subHeader}
            header={item.header}
            pricing={item.pricing}
            bp1={item.bp1}
            bp2={item.bp2}
            bp3={item.bp3}
            bp4={item.bp4}
            bp5={item.bp5}
            bp6={item.bp6}
            bp7={item.bp7}
            bp8={item.bp8}
            bp9={item.bp9}
            bp10={item.bp10}
            index={index}
          />
        ))}
      </div>
      <div className="spliter" />
      <div className="container group">
        {row5.map((item, index) => (
          <OneBlockPrice
            headerText={item.headerText}
            subHeader={item.subHeader}
            header={item.header}
            pricing={item.pricing}
            bp1={item.bp1}
            bp2={item.bp2}
            bp3={item.bp3}
            bp4={item.bp4}
            bp5={item.bp5}
            bp6={item.bp6}
            bp7={item.bp7}
            bp8={item.bp8}
            bp9={item.bp9}
            bp10={item.bp10}
            index={index}
          />
        ))}
      </div>
      <div className="spliter" />
      <div className="container group">
        {row6.map((item, index) => (
          <OneBlockPrice
            headerText={item.headerText}
            subHeader={item.subHeader}
            header={item.header}
            pricing={item.pricing}
            bp1={item.bp1}
            bp2={item.bp2}
            bp3={item.bp3}
            bp4={item.bp4}
            bp5={item.bp5}
            bp6={item.bp6}
            bp7={item.bp7}
            bp8={item.bp8}
            bp9={item.bp9}
            bp10={item.bp10}
            index={index}
          />
        ))}
      </div>
      <div className="spliter" />
      <Footer />
    </div>
  );
}

export default Pricing;
