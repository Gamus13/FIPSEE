import React, { useEffect } from 'react';
import FormComponent from './Formulaire1';
import FormComponent2 from './Formulaire3';
import UserComponent from './InfosUser';
const TabsComponent = () => {
  useEffect(() => {
    const allIndicator = document.querySelectorAll('.indicator li');
    const allContent = document.querySelectorAll('.content li');

    allIndicator.forEach((item) => {
      item.addEventListener('click', function () {
        const content = document.querySelector(this.dataset.target);

        allIndicator.forEach((i) => {
          i.classList.remove('active');
        });

        allContent.forEach((i) => {
          i.classList.remove('active');
        });

        content.classList.add('active');
        this.classList.add('active');
      });
    });

    // Clean up event listeners when the component unmounts
    return () => {
      allIndicator.forEach((item) => {
        item.removeEventListener('click', null);
      });
    };
  }, []);

  return (
    <div className="containerb">
      <div className="wrapperc">
        <ul className="indicator">
          <li className="active" data-target="#home">
            <i className="ph-house"></i> Accueil
          </li>
          <li data-target="#profile">
            <i className="ph-user-circle"></i> Authentification
          </li>
          <li data-target="#contact">
            <i className="ph-phone"></i> Contact
          </li>
          <li data-target="#settings">
            <i className="ph-gear-six"></i> paramètres
          </li>
        </ul>
        <ul className="content">
          <li className="active" id="home">
            
            <div>
              <UserComponent/>
            </div>
            
            {/* Rest of the content */}
          </li>
          <li id="profile">
            <h1>Profile</h1>
            <p>
              Bienvenue sur Fipsee ici vos informations liers a votre authentification, est afficher dans cette page,
              ainsi vous y retrouverez votre nom, prenom, email, mot de passe mais ses donnees ne sont pas modifiable pour des mesure de securites de la plateforme.
              Vous pouvez modifier votre mot de passe si vous le souhaiter.
            </p>
            <div style={{ position: 'relative', top: '-41px', }}>
              <FormComponent/>
            </div>
            {/* Rest of the content */}
          </li>
          <li id="contact">
            {/* <h1>Contact</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error molestias quasi est expedita, a pariatur
              deleniti cum reiciendis similique cupiditate?
            </p> */}
            <div>
              <FormComponent2/>
            </div>
            {/* Rest of the content */}
          </li>
          <li id="settings">
            <h1>paramètres</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Velit quaerat magnam sit, nobis sed cum eius
              voluptatem quis facilis sunt, quia? Non atque, facere obcaecati veniam! Impedit atque, facilis similique
              doloribus quidem quibusdam quod! Quam odit quasi quia accusantium natus eos accusamus sequi repellat modi
              reiciendis vitae provident tenetur sint tempora quaerat expedita facere, assumenda quos consequatur minima
              quod deleniti.
            </p>
            {/* Rest of the content */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TabsComponent;