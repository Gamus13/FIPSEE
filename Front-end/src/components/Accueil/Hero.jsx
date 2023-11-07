import React from 'react';
import "../../Styles/Accueil/GlobalSite.css";

function Hero() {
  return (
    <section className="sectionx herox" id="home" aria-label="herox">
      <div className="containersite">
        <div className="herox-content">
        {/* style={{ fontSize: window.innerWidth <= 575 ? '16px' : 'inherit', color: window.innerWidth <= 575 ? 'red' : 'inherit' }} */}
          <h1 className="titresite herox-title">
            BIENVENUE 
            <span className="hash-before">SUR</span>
            <span className='hash-before' style={{ fontWeight: '700',WebkitTextStroke: '1px black', color: 'white', fontFamily: 'Lato', }}>FIPSEE</span> 
          </h1>
          <p className="heroxtext">
          C'est le futur de l'Afrique, cette Plateforme d'investissement qui nous fait être copropriétaires des projets les plus innovants sur le continent AFRICAIN et dans le monde, Permettant aux porteurs de projets de réaliser leurs rêves entrepreneurials, et aux investisseur des rentabilités enormes.
          </p>
          <div className="wrappersite">
            <a href="/Nos Projets" className="boutn btn-primary hash-before hash-after">Nos Projets</a>
            {/* <button className="herox-btn" aria-label="pixology promo">
              <ion-icon name="play-outline" aria-hidden="true"></ion-icon>
              <span className="spansite">Nos Projets</span>
            </button> */}
          </div>
          <ul className="socials-listss">
            <li>
              <a href="#" className="socials-link" style={{ '--color': 'hsl(241, 77%, 63%)' }}>
                {/* <ion-icon name="logo-facebook"></ion-icon> */}
                
                <span className="spansite">investissez</span>
              </a>
            </li>
            <li>
              <a href="#" className="socials-link" style={{ '--color': 'hsl(0, 100%, 50%)' }}>
                <ion-icon name="logo-youtube"></ion-icon>
                <span className="spansite">dans le</span>
              </a>
            </li>
            <li>
              <a href="#" className="socials-link" style={{ '--color': 'hsl(203, 89%, 53%)' }}>
                <ion-icon name="logo-twitter"></ion-icon>
                <span className="spansite">Futur</span>
              </a>
            </li>
            
          </ul>
          <p>Rejoind notre communaute de crowdfunding equity et voit tes projets et investissements se multiplier</p>
        </div>
        <figure className="herox-banner">
          <img src="https://codewithsadee.github.io/pixology/assets/images/hero-banner.png" width="794" height="637" alt="hero banner" className="w-100" />
        </figure>
      </div>
    </section>
  );
}

export default Hero;