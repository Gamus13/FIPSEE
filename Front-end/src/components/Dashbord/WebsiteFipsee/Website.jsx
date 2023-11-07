import React from 'react';
// import About from './About';
import Rooms from './RoomListe';
import ServicesComponent from './OutilsSite';
import Team from './Avis';
import SimpleComponent from '../../Accueil/SiteComponent'
const WebsiteComponent = () => {
  return (
    <div >
      <SimpleComponent/>
      <About/>
      <Rooms/>
      <ServicesComponent/>
        <Team/> 
    </div>
    
  );
};

export default WebsiteComponent;