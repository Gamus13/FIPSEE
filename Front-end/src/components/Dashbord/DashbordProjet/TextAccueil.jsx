
import React from 'react';
import "./TextSlider.css";
const TextSlider = () => {
  // ici c'est le text contenue dans le composant SectionProjet
  return (
    <>
      
      <div className='Hometxt' style={{ textAlign: 'left', width: '268px',marginLeft: '65%',color: 'white',position: 'relative', top:'11%', }}>
        <p>Bienvenue sur Fipsee votre plateforme pour tous ceux qui adorent l'investisement et qui sont à la recherche de fonds pour leur projet.</p>
        <h3 className='hrpt' style={{ color: 'white',  }}>status:<span className='colr' style={{ color: 'aqua', marginLeft: '5px', }}>Entrepreneur</span></h3>
      </div>
      
    </>
    

  );
};

export default TextSlider;