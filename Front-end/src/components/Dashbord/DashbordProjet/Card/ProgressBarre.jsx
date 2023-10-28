import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import axios from '../../../../axios';

// export default function LinearDeterminate() {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/projects/{projectId}/current-amount');
//         const currentAmount = response.data.current_amount;

//         // Remplacez cette valeur par le montant fixe de départ
//         const expectedAmount = 1000;

//         // Calculer le pourcentage de progression
//         const progressPercentage = (currentAmount / expectedAmount) * 100;

//         setProgress(progressPercentage);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Box sx={{ width: '100%', marginTop: '11%' }}>
//       <LinearProgress variant="determinate" value={progress} sx={{ height: 20, borderRadius: 22 }} />
//     </Box>
//   );
// }

// const LinearDeterminate = () => {
//   const [investorsCount, setInvestorsCount] = useState(0);
//   const [projectsCount, setProjectsCount] = useState(0);
//   const [fundsRaisedCount, setFundsRaisedCount] = useState(0);
//   const [totalAmount, setTotalAmount] = useState("000");
//   const [count, setCount] = useState("000");
//   const [progress, setProgress] = useState(0);
//   const [maxValue, setMaxValue] = useState(100);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userResponse = await axios.get('/user');
//         const userId = userResponse.data.data.id;
//         // console.log('ID de l\'utilisateur:', userId);

//         const productsResponse = await axios.get('/products');
//         const products = productsResponse.data;
//         // console.log('Informations des produits:', products);

//         const userProduct = products.find(product => product.user_id === userId);

//         if (userProduct) {
//           const productId = userProduct.id;
//           // console.log('ID du produit correspondant:', productId);

//           const paymentResponse = await axios.get(`/payments/sum-and-count/${productId}`);
//           const { investorsCount, projectsCount, fundsRaisedCount, total_amount, count } = paymentResponse.data;
//           setInvestorsCount(investorsCount);
//           setProjectsCount(projectsCount);
//           setFundsRaisedCount(fundsRaisedCount);
//           setTotalAmount(total_amount.toString());
//           setCount(count.toString());
//           console.log('Données de paiement:', paymentResponse.data);
//         } else {
//           console.log('Aucun produit associé à l\'utilisateur.');
//           // Arrêter le processus ou effectuer d'autres actions nécessaires
//         }

//         // ... Votre deuxième logique pour récupérer les données de la console

        

//         // Comparaison des valeurs pour déterminer la progression
//         const min = Math.min(totalAmount, MontantDeLevee, fundsRaisedCount, count);
//         const max = Math.max(totalAmount, MontantDeLevee, fundsRaisedCount, count);

//         // Mise à jour de la progression et de la valeur maximale
//         setProgress(min);
//         setMaxValue(max);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div >
//       <progress id="myProgress" value={progress} max={maxValue}  />
//     </div>
//   );
// };

// export default LinearDeterminate;


const LinearDeterminate = () => {
  const [investorsCount, setInvestorsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [fundsRaisedCount, setFundsRaisedCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState("");
  const [count, setCount] = useState("000");
  const [progress, setProgress] = useState(0);
  const [maxValue, setMaxValue] = useState(100);
  const [montantDeLevee, setMontantDeLevee] = useState("");
  const [formData, setFormData] = useState({});
  const [customId, setCustomId] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get('/user');
        const userId = userResponse.data.data.id;
        // console.log('ID de l\'utilisateur:', userId);

        //recuperer l'utilisateur connecter
        const userProductsResponse = await axios.get('/products');
        const userProductsData = userProductsResponse.data;
        // console.log('Informations des produits:', userProductsData);
        const userProduct = userProductsData.find(product => product.user_id === userId);

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

        const userData = userResponse.data.data;
        setFormData(userData);
        console.log('Données utilisateur1 :', userData);

        const customIdData = userData.id;
        console.log('ID personnalisé de l\'utilisateur : ', customIdData);
        setCustomId(customIdData);

        const productsResponse = await axios.get('/products');
        const productsData = productsResponse.data;
        console.log('Produits : ', productsData);
        
        const userProducts = productsData.filter((product) => product.user_id === customIdData);
        console.log('Produits de l\'utilisateur : ', userProducts);
        setProducts(userProducts);
        
        const productId = userProducts[0].id; // Supposons que vous souhaitez récupérer l'ID du premier produit filtré
        const consoleResponse = await axios.get(`/products/${productId}`);
        const consoleData = consoleResponse.data;
        console.log('Données du produit :', consoleData);

        const { product } = consoleData;
        const { Montant_de_levée } = product;
        console.log('Données du produit :', product);
        console.log('Montant de levée :', Montant_de_levée);
        setMontantDeLevee(Montant_de_levée);

        const min = Math.min(totalAmount, Montant_de_levée, );
        const max = Math.max(totalAmount, Montant_de_levée, );

        console.log('Valeurs pour le calcul de min et max :');
        console.log('totalAmount:', totalAmount);
        console.log('Montant_de_levée:', Montant_de_levée);

        console.log('Valeur min:', min);
        console.log('Valeur max:', max);

        // Mise à jour de la progression et de la valeur maximale
        setProgress(min);
        setMaxValue(max);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations :', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        borderRadius: '10%',
      }}
      title={`Progression: bonjour`}  
    >
      <progress
        id="myProgress"
        value={progress}
        max={maxValue}
        style={{
          position:'relative',
          top:'15px',
          width: '275px',
          height: '20px',
         
        }}
        
      />
    </div>
  );
};

export default LinearDeterminate;