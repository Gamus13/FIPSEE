import React from 'react';
// import './LearnMoreButton.scss';

const LearnMoreButton = () => {
  return (
    <div id="container">
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">Learn More</span>
      </button>
    </div>
  );
};

export default LearnMoreButton;