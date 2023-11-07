import React from 'react';
import "../../Styles/Accueil/GlobalSite.css";
import { ImRocket } from 'react-icons/im';
import { GiTakeMyMoney } from 'react-icons/gi';
import { GiProgression } from 'react-icons/gi';
const FeatureSection = () => {
  return (
    <section className="sectionx featuresite" id="featuresite" aria-label="featuresite">
      <div className="containersite">
        <figure className="featuresite-banner">
          <img src="https://codewithsadee.github.io/pixology/assets/images/feature-banner.png" width="582" height="585" loading="lazy" alt="featuresite banner" className="w-100" />
        </figure>

        <div className="featuresite-content">
          <p className="sectionx-subtitle hash-before">Explorer </p>

          <h2 className="h2site sectionx-title" style={{ fontFamily: 'cursive', }}>
            Financer l'avenir est notre <span className="hash-before" style={{ textDecoration: 'underline', textDecorationColor:'aqua', fontWeight: '700',WebkitTextStroke: '1px black', color: 'white',}}>Mission</span>
          </h2>

          <ul className="featuresite-listss">
            <li>
              <div className="featuresite-cardsite">
                <div className="cardsite-icon" style={{ color: 'hsl(0, 100%, 69%)', marginLeft: '11%' ,}}>
                  <ImRocket/>
                </div>

                <div>
                  <h3 className="h3site cardsite-title" style={{ fontSize: '2rem', }}>Investissement en actions</h3>

                  <p className="cardsite-text" style={{ fontSize: '1.2rem', }}>
                    il est facile sur fipsee de trouver des projet rentables dans tous les secteurs d'activités
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="featuresite-cardsite">
                <div className="cardsite-icon" style={{ color: 'hsl(47, 100%, 69%)', marginLeft: '11%'  }}>
                  <GiProgression/>
                </div>

                <div>
                  <h3 className="h3site cardsite-title" style={{ fontSize: '2rem', }}>Levée de fonds pour les projets</h3>

                  <p className="cardsite-text" style={{ fontSize: '1.2rem', }}>
                    Avec son vastes reseaux d'investisseur la plateforme creer un ecosysteme ideal pour une visibilite de vos projets
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="featuresite-cardsite">
                <div className="cardsite-icon" style={{ color: 'green',marginLeft: '11%'  }}>
                  <GiTakeMyMoney/>
                </div>

                <div>
                  <h3 className="h3site cardsite-title" style={{ fontSize: '2rem', }}>Des rentabiltes enormes</h3>

                  <p className="cardsite-text" style={{ fontSize: '1.2rem', }}>
                    Peut importe ton profile sur ce vaste reseaux tous le monde trouve son compte autant les Entrepreneurs que les investisseurs.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;