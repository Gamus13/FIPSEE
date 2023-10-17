import React, { useEffect } from 'react';
import '../../../Styles/DashbordClient/CounterStyle.css'; // Assurez-vous d'avoir un fichier CSS pour les styles

const Componentstat = () => {
  useEffect(() => {
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 4000;

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);

      return () => {
        clearInterval(counter);
      };
    });
  }, []);

  return (
    <div className="wrapperx">
      {/* <div className="containerz">
        <i className="fas fa-utensils"></i>
        <span className="num" data-val="400">000</span>
        <span className="text">Meals Delivered</span>
      </div> */}
      <div className="containerz">
        <i className="fas fa-smile-beam"></i>
        <span className="num" data-val="340">000</span>
        <span className="text">Investisseurs</span>
      </div>
      <div className="containerz">
        <i className="fas fa-list"></i>
        <span className="num" data-val="225">000</span>
        <span className="text">Vos projet</span>
      </div>
      <div className="containerz">
        <i className="fas fa-flag"></i>
        <span className="num" data-val="280">000</span>
        <span className="text">levée de fonds</span>
      </div>
    </div>
  );
};

export default Componentstat;