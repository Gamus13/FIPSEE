import React from 'react';
import "../../Styles/Accueil/GlobalSite.css";

function Service() {
  return (
    <section className="sectionx servicesite" id="servicesite" aria-label="servicesite">
      <div className="containersite">
        <p className="sectionx-subtitlex hash-before text-center">Nos Services</p>
        <h2 className="h2site sectionx-title text-center" style={{ color: 'white',  }}>
            Dans sa revision de 2014 <span className="hash-before">l'acte OHADA prevoit pour les levée de fonds :</span>
        </h2>
        <ul className="grid-listss">
          {/* <li>
            <div className="servicesite-cardsite" style={{ color: 'hsl(174, 77%, 50%)' }}>
              <div className="cardsite-icon">
                <img src="https://codewithsadee.github.io/pixology/assets/images/service-icon-1.png" width="30" height="30" loading="lazy" alt="service icon" />
              </div>
              <h3 className="h3site">
                <a href="#" className="cardsite-title">Product Management</a>
              </h3>
            </div>
          </li>
          <li>
            <div className="servicesite-cardsite" style={{ color: 'hsl(267, 76%, 57%)' }}>
              <div className="cardsite-icon">
                <img src="https://codewithsadee.github.io/pixology/assets/images/service-icon-2.png" width="30" height="30" loading="lazy" alt="service icon" />
              </div>
              <h3 className="h3site">
                <a href="#" className="cardsite-title">Web &amp; Mobile Development</a>
              </h3>
            </div>
          </li>*/}
          <li>
            <div className="servicesite-cardsite" style={{ color: 'hsl(47, 100%, 69%)' }}>
              <div className="cardsite-icon">
                <img src="https://codewithsadee.github.io/pixology/assets/images/service-icon-7.png" width="30" height="30" loading="lazy" alt="service icon" />
              </div>
              <h3 className="h3site">
                <a href="#" className="cardsite-title">50 million Fcfa maximale  </a>
              </h3>
            </div>
          </li> 
          {/* <li>
            <div className="servicesite-cardsite" style={{ color: 'hsl(17, 100%, 68%)' }}>
              <div className="cardsite-icon">
                <img src="https://codewithsadee.github.io/pixology/assets/images/service-icon-3.png" width="30" height="30" loading="lazy" alt="service icon" />
              </div>
              <h3 className="h3site">
                <a href="#" className="cardsite-title">10000 Fcfa  la part</a>
              </h3>
            </div>
          </li> */}
          <li>
            <div className="servicesite-cardsite" style={{ color: 'hsl(0, 100%, 69%)' }}>
              <div className="cardsite-icon">
                <img src="https://codewithsadee.github.io/pixology/assets/images/service-icon-3.png" width="30" height="30" loading="lazy" alt="service icon" />
              </div>
              <h3 className="h3site">
                <a href="#" className="cardsite-title">10000Fcfa la part</a>
              </h3>
            </div>
          </li>
          <li>
            <div className="servicesite-cardsite" style={{ color: 'hsl(0, 100%, 69%)' }}>
              <div className="cardsite-icon">
                <img src="https://codewithsadee.github.io/pixology/assets/images/service-icon-4.png" width="30" height="30" loading="lazy" alt="service icon" />
              </div>
              <h3 className="h3site">
                <a href="#" className="cardsite-title">01 an maximale</a>
              </h3>
            </div>
          </li>
          {/* <li>
            <div className="servicesite-cardsite" style={{ color: 'hsl(157, 89%, 44%)' }}>
              <div className="cardsite-icon">
                <img src="https://codewithsadee.github.io/pixology/assets/images/service-icon-6.png" width="30" height="30" loading="lazy" alt="service icon" />
              </div>
              <h3 className="h3site">
                <a href="#" className="cardsite-title">Marketing and Communication</a>
              </h3>
            </div>
          </li> */}
          {/* <li>
            <div className="servicesite-cardsite" style={{ color: 'hsl(52, 98%, 50%)' }}>
              <div className="cardsite-icon">
                <img src="https://codewithsadee.github.io/pixology/assets/images/service-icon-7.png" width="30" height="30" loading="lazy" alt="service icon" />
              </div>
              <h3 className="h3site">
                <a href="#" className="cardsite-title">Business Development</a>
              </h3>
            </div>
          </li> */}
            {/* <li>
                <a href="#" className="link-cardsite" style={{ color: 'hsl(203, 97%, 75%)' }}>
                <span className="spansite">04 More Service</span>
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>
            </li> */}
        </ul>
      </div>
    </section>
  );
}

export default Service;