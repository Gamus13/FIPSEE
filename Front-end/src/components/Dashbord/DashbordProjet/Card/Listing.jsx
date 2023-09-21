import React from "react";
import Features from "./Feature";
import "./Listing.css";
import { motion } from "framer-motion";
import { Paper } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { green } from "@material-ui/core/colors";





const Listing = ({ data, open }) => {
  const { titre, Secteur, description,Montant_de_levée,Duree_de_la_levée,Monnaie, images } = data;
  const user = {
		isOnline: true, // si l'utilisateur est bel et bien connecter on n'affiche user is online sinon rien
	  };

    // console.log("Valeur de user.isOnline :", user.isOnline);
  return (
    <motion.div className="listing"  onClick={open} whileHover={{ scale: 1.1 }} >
      <div className="listing__content">
        {images.length > 1 ? (
          <Slider  autoplay={true} autoplaySpeed={3000} >
            {images.map((image, index) => (
              <div key={index}>
                <img
                  className="listing__image"
                  alt="real estate mansion"
                  src={`http://localhost:8000/storage/${image}`}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="listing__image-container">
            <img
              className="listing__images2"
              alt="real estate mansion"
              src={`http://localhost:8000/storage/${images[0]}`}
            />
          </div>
        )}
        {/* <form action="" method="get" data-monetbil="form"><button class="" type="submit">Pay by Mobile Money</button></form> */}
        <div className="listing__details">
          <div className="listing__type">{Secteur}</div>
          <div className="listing__row">
            <span className="listing__price">{titre}</span>
          </div>
          <div className="listing__row">
            <span className="listing__address"></span>
            {/* {user.isOnline && <p>User is online!!</p>} */}
          </div>
          
          <div className="features-container" >
            {/* {/* Ajoutez ici vos composantes d'icônes 
            {/* Par exemple :  */}
            <Features iconName={"FaMoneyBill"} iconLabel={Montant_de_levée} iconSpan={Monnaie} />
            <Features iconName={"FaCalendarAlt"} iconLabel={Duree_de_la_levée} />
           
          </div>
          <div className="feature__buttons">
            <Features iconName={"FaInfoCircle"} iconLabel="active" style={{ color: green, }} />
            {/* <button className="featurebutton2">Détail</button> */}
            <button className="feature__button ">Investir</button>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
};


export default Listing;
