import { Dialog, DialogContent } from "@mui/material";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import List from "../../Product/ListProjet";
import CreateProduct from "../../Product/CreateProjet";
import ProjetForm from "./ProjectAdd"


const ModalPOPUP = ({ setData }) => {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState('Actif');
    const functionOpenPopup = () => {
      setOpen(true);
    }
  
    const closePopup = () => {
      setOpen(false);
    }
  
    const fetchProducts = () => {
        axios.get(`http://localhost:8000/api/products/filter?filterStatus=${status}`)
          .then(response => {
            const filteredProducts = response.data;
            setData(filteredProducts);
            console.log("test de filtre: ",filteredProducts); // Ajoutez cette ligne pour afficher les produits filtrés dans la console
          })
          .catch(error => {
            console.log(error);
          });
      }

      const filterByStatus = (status) => {
        setStatus(status);
      }
  
    useEffect(() => {
      fetchProducts(); // Effectuez la requête au chargement du composant
    }, [status]);
  
    return (
      <>
        <div className="texter" style={{textAlign: 'left', position: "absolute", top: '15%',  marginLeft: '12%',boxShadow: '0 40px 15px rgba(0,0,0,.1)',backgroundColor: '', zIndex: 1}}>
          <h1 style={{textAlign:'left', justifyContent: 'flex-end', color: 'white', fontSize: '1.5rem', fontWeight: 600}}>Tous les projets</h1>
          <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '9px'}}>
          <div
            className="allprojet"
            style={{
              cursor: 'pointer',
              fontWeight: '900',
              fontSize: '1rem',
              borderBottom: '2px solid transparent',
              transition: 'border-color 0.3s, color 0.3s',
            }}
            onClick={() => filterByStatus('Actif')}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'blue';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'transparent';
              e.target.style.color = 'initial';
            }}
          >
            Tous les projets
          </div>

          <div
            className="allprojet"
            style={{
              cursor: 'pointer',
              marginLeft: '15px',
              fontWeight: '900',
              fontSize: '1rem',
              borderBottom: '2px solid transparent',
              transition: 'border-color 0.3s, color 0.3s',
              
            }}
            onClick={() => filterByStatus('A venir')}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'blue';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'transparent';
              e.target.style.color = 'initial';
            }}
          >
            Futur Projets
          </div>
            {/* <div className="allprojet" style={{cursor: 'pointer', fontWeight: '400', fontSize: '1rem', marginLeft: '15px', fontFamily: 'sans-serif'}} onClick={() => filterByStatus('A venir')}>Futur Projets</div> */}
            <div className="allprojet" style={{cursor: 'pointer', fontWeight: '400', fontSize: '1rem', marginLeft: '15px'}} onClick={() => filterByStatus('En cours')}>Projets clôturés</div>
            
          </div>
        </div>
        
      </>
    );
  }
  
  export default ModalPOPUP;
  