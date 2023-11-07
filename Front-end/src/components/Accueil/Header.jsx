import React, { useEffect, useState } from "react";
import axios from '../../axios';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import { PiEyeSlashLight } from 'react-icons/pi';
import "../../Styles/Accueil/Header.css";
import { useNavigate, useParams } from 'react-router-dom'

// ici cette fonction va derouler au clic sur l'icone profil un menu
export function ouverture(){
    const containerMenu = document.querySelector('.container-menu');
    const btnMenu = document.querySelector('.btn-menu');

    btnMenu.addEventListener('click', () => {

    containerMenu.classList.toggle('active')

    })
}


// function Home(){
//     // Diviser le tableau complet en tranches de 5 éléments
//     const productsPerPage = 5;
//     const slicedProducts = products.slice(currentIndex * productsPerPage, (currentIndex + 1) * productsPerPage);

//     // ici c'est la fonction qui permet le slide avant de chaque background*/
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const handleNextClick = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(products.length / productsPerPage));
//     };
      
//     const handlePrevClick = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(products.length / productsPerPage)) % Math.ceil(products.length / productsPerPage));
//     };
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//       const fetchProducts = async () => {
//         try {
//           const response = await axios.get('/products');
//           const responseData = response.data;
//           setProducts(responseData);
//           console.log('Data obtenue :', responseData);
//         } catch (error) {
//           console.error('Erreur lors de la récupération des produits :', error);
//         }
//       };
  
//       fetchProducts();
//     }, []);
//     return(
//         <div class="container"  >
//             <div>
//                 {slicedProducts.map((product) => (
//                     // Afficher les données du produit ici
//                     <div className="item" id={`slide${product.id}`} key={product.id}>
//                         <div className="content">
//                             <hr className="desi"></hr>
//                             <div className="localisation">
//                             <i><FaMapMarkerAlt /></i> {product.Localisation}-Cameroun
//                             </div>
//                             <div className="name">{product.titre}</div>
//                             <div className="des">{product.courte_description}</div>
//                             <div className="bloc-infos">
//                             <div className="details"><span className="fa fa-bookmark"></span></div>
//                             <button id="btn-pjt">decouvrir</button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//                 {products.length === 0 && <div>No products available.</div>}
//             </div>

//             <div className="buttons">
//                 <button id="prev" onClick={handlePrevClick}><i><FiChevronLeft className='direction'/></i></button>
//                 <button id="next" onClick={handleNextClick}><i><FiChevronRight className='direction' /></i></button>
//             </div>

//         </div>
//     )
// }

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [products, setProducts] = useState([]);
    const productsPerPage = 5;
    const slicedProducts = products.slice(
      currentIndex * productsPerPage,
      (currentIndex + 1) * productsPerPage
    );
  
    const handleNextClick = () => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % Math.ceil(products.length / productsPerPage)
      );
    };
  
    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) =>
        (prevIndex - 1 + Math.ceil(products.length / productsPerPage)) %
          Math.ceil(products.length / productsPerPage)
      );
    };
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('/products');
          const responseData = response.data;
          setProducts(responseData);
          console.log('Data obtenue :', responseData);
        } catch (error) {
          console.error('Erreur lors de la récupération des produits :', error);
        }
      };
  
      fetchProducts();
    }, []);
  
    return (
      <div className="container">
        <div>
            {[1, 2, 3, 4].map((index) => (
                <React.Fragment key={index}>
                    {products.slice(currentIndex * 5, (currentIndex + 1) * 5).map((product) => (
                        <div className="item" id={`slide${product.id}`} key={product.id}>
                        <div className="content">
                            <hr className="desi"></hr>
                            <div className="localisation">
                            <i>
                                <FaMapMarkerAlt />
                            </i>{' '}
                            {product.Localisation}-Cameroun
                            </div>
                            <div className="name">{product.titre}</div>
                            <div className="des">{product.courte_description}</div>
                            <div className="bloc-infos">
                            <div className="details">
                                <span className="fa fa-bookmark"></span>
                            </div>
                            <button id="btn-pjt">decouvrir</button>
                            </div>
                        </div>
                        </div>
                    ))}
                    {products.length === 0 && <div>Aucun produit disponible.</div>}
                </React.Fragment>
            ))}
        </div>
  
        <div className="buttons">
          <button id="prev" onClick={handlePrevClick}>
            <i>
              <FiChevronLeft className="direction" />
            </i>
          </button>
          <button id="next" onClick={handleNextClick}>
            <i>
              <FiChevronRight className="direction" />
            </i>
          </button>
        </div>
      </div>
    );
  }

export default Home
