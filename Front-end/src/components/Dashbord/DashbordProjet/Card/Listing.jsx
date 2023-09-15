import React from "react";
import Feature from "./Feature";
import "./Listing.css";
import { motion } from "framer-motion";

const Listing = ({ data, open }) => {
  const { titre, description, image } =
    data;

  return (
    <motion.div className="listing" onClick={open} whileHover={{ scale: 1.1 }}>
      <div className="listing__content">
        <div className="listing__image-container">
          <img
            className="listing__image"
            alt="real estate mansion"
            src={`http://localhost:8000/storage/product/image/${image}`}
          />
        </div>
        <div className="listing__details">
          <div className="listing__type">For Sale</div>
          <div className="listing__row">
            <span className="listing__price">{titre}</span>
          </div>
          <div className="listing__row">
            <span className="listing__address">{description}</span>
          </div>
          {/* <div className="listing__row">
            <Feature iconName={"FaBed"} iconLabel />
            <Feature iconName={"FaShower"} iconLabel /> {/*<ici on n'avait iconLabel={livingSpace}> 
            <Feature iconName={"FaRuler"} iconLabel />
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Listing;
