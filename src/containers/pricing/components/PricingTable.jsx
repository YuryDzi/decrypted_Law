import React from 'react';

function pricingTable({ headerText, subHeader, header, pricing, bp1, bp2, bp3 }) {
  return (
    // <div className="container group">
    <div>
      <h1 className="headerText">{headerText}</h1>
      <h2 className="sub-header-text">
        {subHeader}
      </h2>
      <div className="grid-1-5">
        <h2>{header}</h2>
        <h3>
          <span className="uppercase">${pricing}</span>
        </h3>
        <ul>
          <li>{bp1}</li>
          <li>{bp2}</li>
          <li>{bp3}</li>
        </ul>
      </div>
    </div>
  );
}

export default pricingTable;