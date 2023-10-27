import React, { useEffect, useState } from 'react';
import '../../../Styles/DashbordClient/CounterStyle.css'; // Assurez-vous d'avoir un fichier CSS pour les styles
import axios from '../../../axios';
const Componentstat = () => {

  const [investorsCount, setInvestorsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [fundsRaisedCount, setFundsRaisedCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState("000");
  const [count, setCount] = useState("000");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Récupérer l'ID de l'utilisateur
  //       const userResponse = await axios.get('/user');
  //       const userId = userResponse.data.id;
  //       console.log('ID de l\'utilisateur:', userId);

  //       // Récupérer les informations des produits associés à l'utilisateur
  //       const productsResponse = await axios.get('/products');
  //       const products = productsResponse.data;
  //       console.log('Informations des produits:', products);

  //       // Filtrer les produits pour ne conserver que ceux associés à l'utilisateur
  //       const userProducts = products.filter(product => product.id_user === userId);

  //       if (userProducts.length > 0) {
  //         // Prendre le premier produit de la liste (ou ajuster la logique selon les besoins)
  //         const userProduct = userProducts[0];
  //         const productId = userProduct.id;
  //         console.log('ID du produit correspondant:', productId);

  //         // Récupérer les données en fonction de l'ID du produit
  //         const paymentResponse = await axios.get(`/payments/sum-and-count/${productId}`);
  //         const { investorsCount, projectsCount, fundsRaisedCount } = paymentResponse.data;
  //         setInvestorsCount(investorsCount);
  //         setProjectsCount(projectsCount);
  //         setFundsRaisedCount(fundsRaisedCount);
  //         console.log('Données de paiement:', paymentResponse.data);

  //         const { total_amount, count } = paymentResponse.data;
  //         setTotalAmount(total_amount.toString());
  //         setCount(count.toString());
  //         console.log('Données de paiement:', paymentResponse.data);
  //         // Utiliser les valeurs extraites
  //         // console.log("Total amount:", total_amount);
  //         // console.log("Count:", count);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get('/user');
        const userId = userResponse.data.data.id;
        // console.log('ID de l\'utilisateur:', userId);
  
        const productsResponse = await axios.get('/products');
        const products = productsResponse.data;
        // console.log('Informations des produits:', products);
  
        const userProduct = products.find(product => product.user_id === userId);
  
        if (userProduct) {
          const productId = userProduct.id;
          // console.log('ID du produit correspondant:', productId);
  
          const paymentResponse = await axios.get(`/payments/sum-and-count/${productId}`);
          const { investorsCount, projectsCount, fundsRaisedCount, total_amount, count } = paymentResponse.data;
          setInvestorsCount(investorsCount);
          setProjectsCount(projectsCount);
          setFundsRaisedCount(fundsRaisedCount);
          setTotalAmount(total_amount.toString());
          setCount(count.toString());
          console.log('Données de paiement:', paymentResponse.data);
        } else {
          console.log('Aucun produit associé à l\'utilisateur.');
          // Arrêter le processus ou effectuer d'autres actions nécessaires
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  

  // console.log('investorsCount:', investorsCount);
  // console.log('projectsCount:', projectsCount);
  // console.log('fundsRaisedCount:', fundsRaisedCount);

  useEffect(() => {
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 4000;

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);

      return () => {
        clearInterval(counter);
      };
    });
  }, []);




  return (
    <div className="wrapperx">
      <div className="containerz">
        <i className="fas fa-smile-beam"></i>
        <span className="num" data-val="300">{count}</span>
        {/* <span className="num" data-val="400">{totalAmount}</span> */}
        <span className="text">Investisseurs</span>
      </div>
      <div className="containerz">
        <i className="fas fa-list"></i>
        <span className="num" data-val="400">000</span>
        <span className="text">Vos projet</span>
      </div>
      <div className="containerz">
        <i className="fas fa-flag"></i>
        <span className="num" data-val="400">{totalAmount}</span>
        <span className="text">levée de fonds</span>
      </div>
    </div>
  );
};

export default Componentstat;

{/* <div className="containerz">
        <i className="fas fa-utensils"></i>
        <span className="num" data-val="400">000</span>
        <span className="text">Meals Delivered</span>
      </div> */}