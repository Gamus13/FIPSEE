import React from 'react';
import "../../Styles/Accueil/GlobalSite.css";
function NewsletterSection() {
  return (
    <section className="sectionx newsletter hash-bg-image" aria-label="newsletter" style={{ backgroundColor: 'hsla(241, 88%, 60%, 0.8)', }} id='Contact'>
      <div className="containersite">
        <figure className="newsletter-banner">
          <img src="https://codewithsadee.github.io/pixology/assets/images/newsletter-banner.png" width="355" height="356" loading="lazy" alt="newsletter banner" className="w-100" />
        </figure>
        <div className="newsletter-content">
          <p className="sectionx-subtitle hash-before">Suivre chaque mise à jour</p>
          <h2 className="h2site sectionx-title">Abonnez-vous à la Lettres d'information pour recevoir les dernières mises à jour et offres</h2>
          <form action="" className="newsletter-form">
            <input type="email" name="email_address" placeholder="Enter ton email" required className="email-field" />
            <div type="submit" className="boutn boutn-secondary hash-before hash-after" id='button'>
              <span className="spansite2">Soumettre</span>
              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;