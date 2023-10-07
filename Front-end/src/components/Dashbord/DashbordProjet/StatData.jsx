import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCode, faClock, faLaptop } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'countup.js';

const StatisticSection = () => {
  useEffect(() => {
    const runCountUp = () => {
      const counters = document.querySelectorAll('.count-number');
      counters.forEach((counter) => {
        const countUp = new CountUp(counter, counter.textContent, {
          duration: 10,
          separator: ''
        });

        if (!countUp.error) {
          countUp.start();
        } else {
          console.error(countUp.error);
        }
      });
    };

    runCountUp();
  }, []);

  return (
    <section id="statistic" className="statistic-section one-page-section">
      <div className="container">
        <div className="row text-center">
          <div className="col-xs-12 col-md-3">
            <div className="counter">
              <FontAwesomeIcon icon={faCoffee} className="fa fa-coffee fa-2x stats-icon" />
              <h2 className="timer count-title count-number">999</h2>
              <div className="stats-line-black"></div>
              <p className="stats-text">Coffee Cups</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className="counter">
              <FontAwesomeIcon icon={faCode} className="fa fa-code fa-2x stats-icon" />
              <h2 className="timer count-title count-number">10000</h2>
              <div className="stats-line-black"></div>
              <p className="stats-text">Line Code</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className="counter">
              <FontAwesomeIcon icon={faClock} className="fa fa-clock-o fa-2x stats-icon" />
              <h2 className="timer count-title count-number">6</h2>
              <div className="stats-line-black"></div>
              <p className="stats-text">Years Experience</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className="counter">
              <FontAwesomeIcon icon={faLaptop} className="fa fa-laptop fa-2x stats-icon" />
              <h2 className="timer count-title count-number">12</h2>
              <div className="stats-line-black"></div>
              <p className="stats-text">Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticSection;