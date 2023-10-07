import React from "react";
import Features from "./Feature";
import "./Listing.css";
import { motion } from "framer-motion";
import { Paper } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { green } from "@material-ui/core/colors";
import OutlinedButtons from "./Buttoncard";
import LinearDeterminate from "./ProgressBarre";


const Listing = ({ data, open }) => {
  const { titre, Secteur, Status, description,Montant_de_levée,Duree_de_la_levée,Monnaie, images } = data;
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



export default Listing;

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function MediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image="/static/images/cards/contemplative-reptile.jpg"
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
