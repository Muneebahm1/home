/* eslint-disable @next/next/no-img-element */
import React from 'react';
import './Custombanner.css';

const Custombanner = ({ src,line1, line2 }) => {
  return (
    <div className="custom-banner">
      <div className="custom-container">
        <div className="custom-banner-content">
        <div className="banner-text">
            <h1>{line1}</h1>
            <h2>{line2}</h2>
          </div>
          <div className="banner-image">
            <img src={src} alt="Banner" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Custombanner;
