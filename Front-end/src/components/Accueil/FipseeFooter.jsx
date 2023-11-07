import React from 'react';
import {BsFacebook} from 'react-icons/bs';
import {IoLogoYoutube} from 'react-icons/io';
import {AiOutlineTwitter} from 'react-icons/ai';
import {BiLogoLinkedinSquare} from 'react-icons/bi';
const Footer = () => {
  return (
    <footer className="footerfip" id='blog'>
      <div className="containersite">
        <div className="footerfip-top sectionx">
          <div className="footerfip-brand">
            <p className="footerfip-listss-title">À propos Fipsee</p>
            <p className="footerfip-text">
            Une nouvelle façon de rendre les Investissement dans les entreprises à fort potentiel de croissance, fiables et 100% sécurisés. et rentabiliser ses projets et investisements du cameroun et de part le monde.
            </p>
            <ul className="socials-listss">
              <li>
                <a href="#" className="socials-link" alt='logo youtube'>
                  <IoLogoYoutube/>
                </a>
              </li>
              <li>
                <a href="#" className="socials-link" alt='logo twitter'>
                  <AiOutlineTwitter/>
                </a>
              </li>
              <li>
                <a href="#" className="socials-link" alt='logo facebook'>
                  {/* <ion-icon name="logo-facebook"></ion-icon> */}
                  <BsFacebook name="logo-facebook"/>
                </a>
              </li>
              <li>
                <a href="#" className="socials-link" alt='logo linkedin'>
                  <BiLogoLinkedinSquare/>
                </a>
              </li>
            </ul>
          </div>
          <ul className="footerfip-listss">
            <li>
              <p className="footerfip-listss-title" style={{ fontSize: '1.5rem', }}>Liens utiles</p>
            </li>
            <li>
              <a href="#" className="footerfip-link" style={{ fontSize: '1rem', }}>Contactez-nous</a>
            </li>
            <li>
              <a href="#" className="footerfip-link" style={{ fontSize: '1rem', }}>Comment ça fonctionne</a>
            </li>
            <li>
              <a href="#" className="footerfip-link" style={{ fontSize: '1rem', }}>fipsee-cameroun</a>
            </li>
            <li>
              <a href="#" className="footerfip-link" style={{ fontSize: '1rem', }}>Explorer</a>
            </li>
            <li>
              <a href="#" className="footerfip-link" style={{ fontSize: '1rem', }}>Conditions et services</a>
            </li>
          </ul>
          <ul className="footerfip-listss">
            <li>
              <p className="footerfip-listss-title" style={{ fontSize: '1.5rem', }}>Communauté</p>
            </li>
            <li>
              <a href="#" className="footerfip-link" style={{ fontSize: '1rem', }}>Centre d'aide</a>
            </li>
            <li>
              <a href="#" className="footerfip-link" style={{ fontSize: '1rem', }}>Les partenaires</a>
            </li>
            <li>
              <a href="#" className="footerfip-link" style={{ fontSize: '1rem', }}>Suggestions</a>
            </li>
            <li>
              <a href="#" className="footerfip-link" style={{ fontSize: '1rem', }}>Blog</a>
            </li>
            <li>
              <a href="#" className="footerfip-link" style={{ fontSize: '1rem', }}>Lettres d'information</a>
            </li>
          </ul>
          <ul className="footerfip-listss">
            <li>
              <p className="footerfip-listss-title" style={{ fontSize: '1.8rem', }}>Fipsee publication</p>
            </li>
            <li>
              <ul className="insta-post">
                <li>
                  <div className="insta-cardsite">
                    <figure className="post-banner">
                      <img src="https://codewithsadee.github.io/pixology/assets/images/insta-post-4.jpg" width="77" height="63" loading="lazy" alt="instagram post" className="img-cover" />
                    </figure>
                    <a href="#" className="cardsite-contentsite" alt='logo linkedin'>
                        <BiLogoLinkedinSquare/>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="insta-cardsite">
                    <figure className="post-banner">
                      <img src="https://codewithsadee.github.io/pixology/assets/images/insta-post-2.jpg" width="77" height="63" loading="lazy" alt="instagram post" className="img-cover" />
                    </figure>
                    <a href="#" className="cardsite-contentsite" alt='logo facebook'>
                      <BsFacebook/>
                    </a>
                  </div>
                </li>
                
                <li>
                  <div className="insta-cardsite">
                    <figure className="post-banner">
                      <img src="https://codewithsadee.github.io/pixology/assets/images/insta-post-1.jpg" width="77" height="63" loading="lazy" alt="instagram post" className="img-cover" />
                    </figure>
                    <a href="#" className="cardsite-contentsite" alt='logo linkedin'>
                      <BiLogoLinkedinSquare/>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="insta-cardsite">
                    <figure className="post-banner">
                      <img src="https://codewithsadee.github.io/pixology/assets/images/insta-post-6.jpg" width="77" height="63" loading="lazy" alt="instagram post" className="img-cover" />
                    </figure>
                    <a href="#" className="cardsite-contentsite" alt='logo youtube'>
                      <IoLogoYoutube/>
                    </a>
                  </div></li>
                <li>
                  <div className="insta-cardsite">
                    <figure className="post-banner">
                      <img src="https://codewithsadee.github.io/pixology/assets/images/insta-post-3.jpg" width="77" height="63" loading="lazy" alt="instagram post" className="img-cover" />
                    </figure>
                    <a href="#" className="cardsite-contentsite" alt='logo twitter'>
                      <AiOutlineTwitter/>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="insta-cardsite">
                    <figure className="post-banner">
                      <img src="https://codewithsadee.github.io/pixology/assets/images/insta-post-5.jpg" width="77" height="63" loading="lazy" alt="instagram post" className="img-cover" />
                    </figure>
                    <a href="#" className="cardsite-contentsite" alt='logo youtube'>
                     <IoLogoYoutube/>
                    </a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="footerfip-bottom">
          <p className="copyright" style={{ fontSize: '0.8rem', }}>
            &copy; 2023 fipsee. Tous droits réservés par fipsee.org
          </p>
          <ul className="footerfip-bottom-listss">
            <li>
              <a href="#" className="footerfip-bottom-link" style={{ fontSize: '0.8rem', }}>Termes et conditions</a>
            </li>
            <li>
              <a href="#" className="footerfip-bottom-link" style={{ fontSize: '0.8rem', }}>douala cameroun</a>
            </li>
            <li>
              <a href="#" className="footerfip-bottom-link" style={{ fontSize: '0.8rem', }}>inscription / connexion</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;