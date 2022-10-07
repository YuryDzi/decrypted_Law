import React from 'react';
import Faq from 'react-faq-component';
import './faq.scss';

const FaqTable = () => {
  const data = {
    // title: 'FAQ (How it works)',
    rows: [
      {
        title:
          'I’m starting a business but not sure what legal services I need. What do I do?',
        content:
          'Contact us for a free consultation! We are here to help guide you through the process and determine the best plan of action for your unique business. ',
      },
      {
        title: 'Why should I trust Decrypted with my business?',
        content:
          'Together, we have almost a decade of experience working with startups from formation to exit at one of the most prestigious international law firms in the world. We know what it takes to be successful and we want to help you get there.',
      },
      {
        title: 'How do you bill for your legal services?',
        content:
          'We don’t like hourly billing and we bet you don’t either. Going to your business attorney shouldn’t feel like a hospital visit. Check out our pricing page for our fully transparent fixed fee and subscription pricing options. If you don’t see what you need, we will work with you to determine a fair fixed fee for your desired service.c',
      },
      {
        title: 'What if I live in a different country or state?',
        content:
          'No problem! We have experience representing companies in many states like California, New York, Texas and Florida. We also have experience representing founders in Canada and European countries, including Spain, Poland, Denmark and Sweden.',
      },
      {
        title: 'What about out-of-pocket costs?',
        content:
          'Certain services require making filings with the appropriate agency in each jurisdiction. Once we determine the correct jurisdiction for your business, we will disclose these fees upfront so you are aware of the total cost.',
      },
    ],
  };

  const styles = {
    bgColor: 'none',
    titleTextColor: 'white',
    rowTitleColor: 'white',
    rowContentColor: 'white',
    arrowColor: '#b068f4',
    textalign: 'center',
    justifycontent: 'center',
    display: 'flex',
  };

  const config = {
    animate: true,
    tabFocus: true,
  };

  return (
    <>
      <div className="faq-text">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
      </div>
      <div className="faq-table">
        <Faq data={data} styles={styles} config={config} />
      </div>
    </>
  );
};

export default FaqTable;
