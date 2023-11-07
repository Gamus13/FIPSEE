import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import "../../Styles/Accueil/Defilant.css";

function Defilant(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('/products');
          const responseData = response.data;
          setProducts(responseData);
          // console.log('Data attendue :', responseData);
        } catch (error) {
          console.error('Erreur lors de la récupération des produits :', error);
        }
      };
  
      fetchProducts();
    }, []);

    return(
           
        <>
            <div class="marquee-rtl">
                {products.map((product) => (
                    <div key={product.id} class="marquee-rok">
                        {product.titre}: Prix des actions {product.Prix_des_actions}{product.Monnaie}, 
                        
                    </div>
                ))}

            </div>
            <div class='txte'> Nouveaux projet : </div>
        </>

       
    )
}

export default Defilant