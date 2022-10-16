import React from 'react';

function pricingTable({
  headerText,
  subHeader,
  header,
  pricing,
  bp1,
  bp2,
  bp3,
  bp4,
  bp5,
  bp6,
  bp7,
  bp8,
  bp9,
  bp10,
}) {
  return (
    // <div className="container group">
    <>
      <h1 className="headerText">{headerText}</h1>
      <h2 className="sub-header-text">{subHeader}</h2>
      <div className="grid__container">
        <div className="grid-1-5">
          <h2>{header}</h2>
          <h3>
            <span className="uppercase">${pricing}</span>
          </h3>
          <ul>
            <li>{bp1}</li>
            <li>{bp2}</li>
            <li>{bp3}</li>
            <li>{bp4}</li>
            <li>{bp5}</li>
            <li>{bp6}</li>
            <li>{bp7}</li>
            <li>{bp8}</li>
            <li>{bp9}</li>
            <li>{bp10}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default pricingTable;
