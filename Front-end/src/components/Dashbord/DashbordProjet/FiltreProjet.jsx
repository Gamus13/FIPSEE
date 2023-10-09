import { Dialog, DialogContent } from "@mui/material";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import {DialogTitle} from "@mui/material";

import List from "../../Product/ListProjet";
import CreateProduct from "../../Product/CreateProjet";
import ProjetForm from "./ProjectAdd"

// const ModalPOPUP = () => {
// const [open,openchange]=useState(false);
// const functionopenpopup=()=>{
//     openchange(true);
// }
// const closepopup=()=>{
//     openchange(false);

// }
// const ModalPOPUP = () => {
//     const [open, setOpen] = useState(false);
//     const [products, setProducts] = useState([]);
  
//     const functionOpenPopup = () => {
//       setOpen(true);
//     }
  
//     const closePopup = () => {
//       setOpen(false);
//     }

//     useEffect(() => {
//         // Effectuez la requête GET vers la route /products/{product}
//         axios.get('/products/titre') // Remplacez "1" par l'identifiant du produit que vous souhaitez récupérer
//           .then(response => {
//             const product = response.data.product;
//             // Mettez à jour l'état des produits avec le produit récupéré
//             setProducts([product]);
//           })
//           .catch(error => {
//             console.log(error);
//           });
//       }, []);
// return ( 
//     <>
//         <div className="texter"  style={{textAlign:'left', position:"absolute", top: '13%',marginLeft: '12%', zIndex: 1}}>
//             <h1 style={{textAlign:'left',justifyContent: 'flex-end', color:'white', fontSize: '1.5rem', fontWeight: 400}}>Les Projets Fipsee</h1>
//             <div style={{display: 'flex', justifyContent: 'flex-end',marginTop: '9px',}}>
//                 <div className="allprojet" style={{cursor: 'pointer', fontWeight: '900', fontSize: '1rem',}}>Tous les projet</div>
//                 <div className="allprojet" style={{cursor: 'pointer', fontWeight: '400', fontSize: '1rem', marginLeft: '15px',}}>projet en cours</div>
//                 <div className="allprojet" style={{cursor: 'pointer', fontWeight: '400', fontSize: '1rem',marginLeft: '15px',fontFamily: ' sans-serif', }}>projet acheve </div>
//             </div>
//         </div> 
//         <div style={{ position:"absolute", top: '13%', justifyContent: 'flex-end', zIndex: 1, display: 'flex',right:'3%',}}>
            
//             <button onClick={functionopenpopup} color="primary" variant="contained"  >Ajouter un projet</button>
//             <Dialog open={open} onClose={closepopup} fullWidth maxWidth="sm" fullHeight maxHeight="100px">
//                 <DialogContent><ProjetForm /></DialogContent>
                
//             </Dialog>
//         </div>
//     </>
    
// );
// }
 
// export default ModalPOPUP;

const ModalPOPUP = () => {
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState([]);
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
            setProducts(filteredProducts);
            console.log("test de filtre: ",filteredProducts); // Ajoutez cette ligne pour afficher les produits filtrés dans la console
          })
          .catch(error => {
            console.log(error);
          });
      }

      const filterByStatus = (status) => {
        setStatus(status);
        fetchProducts();
      }
  
    useEffect(() => {
      fetchProducts(); // Effectuez la requête au chargement du composant
    }, []);
  
    return (
      <>
        <div className="texter" style={{textAlign: 'left', position: "absolute", top: '13%', marginLeft: '12%', zIndex: 1}}>
          <h1 style={{textAlign:'left', justifyContent: 'flex-end', color: 'white', fontSize: '1.5rem', fontWeight: 400}}>Les Projets Fipsee</h1>
          <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '9px'}}>
            <div className="allprojet" style={{cursor: 'pointer', fontWeight: '900', fontSize: '1rem'}} onClick={() => filterByStatus('Actif')}>Tous les projets</div>
            <div className="allprojet" style={{cursor: 'pointer', fontWeight: '400', fontSize: '1rem', marginLeft: '15px'}} onClick={() => filterByStatus('En cours')}>Projets en cours</div>
            <div className="allprojet" style={{cursor: 'pointer', fontWeight: '400', fontSize: '1rem', marginLeft: '15px', fontFamily: 'sans-serif'}} onClick={() => filterByStatus('A venir')}>Projets achevés</div>
          </div>
        </div>
        {/* <div style={{position: "absolute", top: '13%', justifyContent: 'flex-end', zIndex: 1, display: 'flex', right: '3%'}}>
          <button onClick={functionOpenPopup} color="primary" variant="contained">Ajouter un projet</button>
          <Dialog open={open} onClose={closePopup} fullWidth maxWidth="sm" fullHeight maxHeight="100px">
            <DialogContent>
              <ProjetForm />
            </DialogContent>
          </Dialog>
        </div> */}
      </>
    );
  }
  
  export default ModalPOPUP;
  