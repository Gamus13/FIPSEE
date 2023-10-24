import React from "react";
import { useState, useEffect } from 'react';
import "./Modal.css";
import Feature from "./Feature";
import axios from '../../../../axios';
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import OutlinedBtn from "./DetailBtnCard";
const Modal = ({ data, close }) => {
  // console.log("Do i've been opened ?")
  // console.log("data :", data);
  // console.log("close :", close);

  const {
    titre,
    Secteur,
    Montant_de_levée,
    Duree_de_la_levée,
    Monnaie,
    description,
    images,
  } = data;
  // ici je recupere les information du user: nom,prenoms,email
  // const [formData, setFormData] = useState({
  //   nom: '',
  //   prenom: '',
  //   email: '',
  //   motDePasse: '',
  //   created_at: '',

  // });

  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/user');
  //       const user = response.data.data;
  //       setFormData(user);
  //       // console.log('Données1 user :', user);
  //     } catch (error) {
  //       console.error('Erreur lors de la récupération des informations de l\'utilisateur :', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const imagesTable = JSON.parse(images);

  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };



  return (
    <motion.div
      className="modal"
      variants={modalVariants}
      onClick={(e) => e.stopPropagation()}
    >
      <motion.img
        className="modal__image"
        alt="real estate mansion"
        src={`http://localhost:8000/storage/${imagesTable[0]}`}
        
      ></motion.img>
      
      <motion.div className="modal__info" variants={modalInfoVariants}>
        <motion.div className="modal__row" variants={modalRowVariants}>
          {/* <span className="modal__address">Porteur de projet : {formData.name} {formData.lastName}</span> */}
        </motion.div>
        <motion.div className="modal__row3" variants={modalRowVariants}>
          
        {/* <span className="modal__address3">Email: {formData.email}</span> */}
        </motion.div>
        <motion.div className="modal__row4" variants={modalRowVariants}>
        <span className="modal__address4">Nationalité: </span>
        </motion.div>
        <motion.div className="modal__row5" variants={modalRowVariants}>
        <span className="modal__address5">Entreprise: </span>
        </motion.div>
        <motion.div className="modal__row6" variants={modalRowVariants}>
        <span className="modal__address6">Site web:   </span>
        </motion.div>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="modal__price">Projet: {titre}</span>
        </motion.div>
        
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="modal__address">Secteur: {Secteur}</span>
        </motion.div>
          
        <motion.div className="modal__row" variants={modalRowVariants}>
          {/* <Feature iconName={"FaBed"} iconLabel={Monnaie} />
          <Feature iconName={"FaShower"} iconLabel={Duree_de_la_levée} />
          <Feature iconName={"FaRuler"} iconLabel={Montant_de_levée} /> */}
          <Feature iconName={"FaMoneyBill"} iconLabel={Montant_de_levée + ' ' + Monnaie} />  
          <Feature iconName={"FaCalendarAlt"} iconLabel={Duree_de_la_levée} />
          <Feature iconName={"FaInfoCircle"} iconLabel="active"
           />
        </motion.div> 
        <motion.div
          className="modal__description-wrapper"
          variants={modalRowVariants}
        >
          <p className="modal__description">Description : 
          <br/>{description}</p>
        </motion.div>
        
        <motion.button
          className="modal__close-wrapper"
          whileHover={{ scale: 1.2 }}
          onClick={close}
        >
          <IoCloseCircleOutline className="modal__close-icon" />
        </motion.button>
        <OutlinedBtn />
      </motion.div>
    </motion.div>
  );
};

export default Modal;
