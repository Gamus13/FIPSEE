import React from "react";
import Features from "./Feature";
import "./Listing.css";
import { motion } from "framer-motion";
import { Paper } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { green } from "@material-ui/core/colors";
import OutlinedButtons from "./Buttoncard2";
import LinearDeterminate from "./ProgressBarre";


const Listinginvest = ({ data, open }) => {
  const { titre, Secteur, Status, description,Montant_de_levée,Duree_de_la_levée,Monnaie, images } = data;
  const imagesTable = JSON.parse(images);
  // console.log("status :", imagesTable.length )
  const user = {
		isOnline: true, // si l'utilisateur est bel et bien connecter on n'affiche user is online sinon rien
	  };

    // console.log("Valeur de user.isOnline :", user.isOnline);
  return (
    <motion.div className="listing"  onClick={open} whileHover={{ scale: 1.1 }} >
      <div className="listing__content">
        {imagesTable.length > 1 ? (
          <Slider  autoplay={true} autoplaySpeed={6000} >
            {imagesTable.map((image, index) => (
              <div key={index}>
                <img
                  className="listing__image"
                  alt="real estate mansion"
                  src={`http://localhost:8000/storage/${image}`}
                  // src={`http://localhost:8000/storage/InfosUser/image/${image}`}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="listing__image-container">
            <img
              className="listing__images2"
              alt="real estate mansion"
              src={`http://localhost:8000/storage/${imagesTable[0]}`}
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
          <LinearDeterminate iconLabel='{Duree_de_la_levée}' />
          <div className="listing_bar">
            <div className="features-container" >
              <Features iconName={"FaMoneyBill"} iconLabel={Montant_de_levée + ' ' + Monnaie} />  
              <Features iconName={"FaCalendarAlt"} iconLabel={Duree_de_la_levée} />
              <Features iconName={"FaInfoCircle"} iconLabel={Status} style={{ color: green, }} />
            </div>
            <div className="feature__buttons">
              
              <OutlinedButtons/>
            </div>
          </div>
          
          
        </div>
      </div>
      
      
    </motion.div>
  );
};



export default Listinginvest;


