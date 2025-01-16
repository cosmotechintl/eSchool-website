import React from 'react';
import "./thankyou.css";
import Image from 'next/image';

const ThankYou = () => {
  return (
    <>
      <div className="wrapper">
        {/* Thank You Section */}
        <div className="thankyou-container">
          <h1 className="heading">Thank You</h1>
        </div>

        {/* Image Section */}
        <div className="image-container">
          <Image 
            src="/assets/thanku2.png" 
            alt="Mobile Preview" 
            layout="intrinsic" 
            width={800} 
            height={500} 
            className="responsive-image"
          />
        </div>

        {/* Footer with Semi-Circle */}
        <div className="footer">
          {/* This empty div uses the ::before pseudo-element for the semi-circle */}
        </div>
      </div>
    </>
  );
};

export default ThankYou;
