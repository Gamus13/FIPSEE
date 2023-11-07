import React, { useEffect } from 'react';
import "../../Styles/Accueil/GlobalSite.css";
import  Logo from '../../images/Logo-fipsee.png'
import {IoIosMenu} from 'react-icons/io';
import {AiOutlineCloseCircle} from 'react-icons/ai';
function HeaderAccueil() {

    useEffect(() => {
        "use strict";
    
        const addEventOnElem = function (elem, type, callback) {
          if (elem.length > 1) {
            for (let i = 0; i < elem.length; i++) {
              elem[i].addEventListener(type, callback);
            }
          } else {
            elem.addEventListener(type, callback);
          }
        }
    
        const navbar = document.querySelector("[data-navbar]");
        const navTogglers = document.querySelectorAll("[data-nav-toggler]");
        const navbarLinks = document.querySelectorAll("[data-nav-link]");
        const overlay = document.querySelector("[data-overlay]");
    
        const toggleNavbar = function () {
          navbar.classList.toggle("active");
          overlay.classList.toggle("active");
        }
    
        addEventOnElem(navTogglers, "click", toggleNavbar);
    
        const closeNavbar = function () {
          navbar.classList.remove("active");
          overlay.classList.remove("active");
        }
    
        addEventOnElem(navbarLinks, "click", closeNavbar);
    
        const header = document.querySelector("[data-header]");
        const backTopBtn = document.querySelector("[data-back-top-btn]");
    
        const headerActive = function () {
          if (window.scrollY > 80) {
            header.classList.add("active");
            backTopBtn.classList.add("active");
          } else {
            header.classList.remove("active");
            backTopBtn.classList.remove("active");
          }
        }
    
        addEventOnElem(window, "scroll", headerActive);
      }, []); // le tableau vide [] en tant que deuxième argument permet d'exécuter le code une seule fois après le montage initial
    
  return (
    <header className="headersite" data-header>
        <div className="containersite">
            <img src={Logo} alt="logo" class='logosite' />
            <nav className="navbarsite" data-navbar>
                <div className="wrappersitex">
                    <button className="nav-close-btn" aria-label="close menu" id='buttonbn' style={{ color: 'black',}} data-nav-toggler>
                      {/* <AiOutlineCloseCircle/> */}
                      <a href="/investor" alt="bouton connexion">inscription</a>
                      {/* <a>inscrition</a> */}
                    </button>
                </div>
                <ul className="navbarsite-listss">
                    <li className="navbarsite-item">
                    <a href="#home" className="navbarsite-link" data-nav-link>Accueil</a>
                    </li>
                    <li className="navbarsite-item">
                    <a href="#servicesite" className="navbarsite-link" data-nav-link>Investir dans un projet</a>
                    </li>
                    <li className="navbarsite-item">
                    <a href="#feature" className="navbarsite-link" data-nav-link>Explorer</a>
                    </li>
                    <li className="navbarsite-item">
                    <a href="#Contact" className="navbarsite-link" data-nav-link>Conctact</a>
                    </li>
                    <li className="navbarsite-item">
                    <a href="#blog" className="navbarsite-link" data-nav-link>Services</a>
                    </li>
                </ul>
            </nav>
            <div className="nav-open-boutn" aria-label="open menu" data-nav-toggler id='buttonbn' style={{ fontSize: '3rem', marginRight:'20px ',  }}>
              <IoIosMenu/>
            </div>
            <a href="/investor" className="boutn boutn-primary has-before has-after">Inscription 👋</a>
            <div className="overlaysite" data-nav-toggler data-overlay></div>
        </div>
    </header>
  );
}

export default HeaderAccueil;