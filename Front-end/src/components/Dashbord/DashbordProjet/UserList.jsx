import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import BasicButtons from './FollowBtn';
import LoadingButtonsTransition from './ShowProjet';
import  { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import '../../../Styles/DashbordClient/UserList.css';
import axios from '../../../axios';

export default function AlignItemsList() {

    const [customId, setCustomId] = useState(null);
    const [FormData, setFormData] = useState(null);
    const [products, setProducts] = useState([]);

    const [dureeDeLaLevee, setDureeDeLaLevee] = useState("");
    const [localisation, setLocalisation] = useState("");
    const [monnaie, setMonnaie] = useState("");
    const [montantDeLevee, setMontantDeLevee] = useState("");
    const [prixDesActions, setPrixDesActions] = useState("");
    const [secteur, setSecteur] = useState("");
    const [status, setStatus] = useState("");
    const [courteDescription, setCourteDescription] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);
    const [titre, setTitre] = useState("");

   
    useEffect(() => {
        const fetchData = async () => {
          try {
            // je recupere l'utilisateur connecter
            const response = await axios.get('/user');
            const { data } = response.data;
            setFormData(data);
            console.log('Données utilisateur1 :', data);
            // je stocke son id
            const customIdData = data.id;
            console.log('ID personnalisé de l\'utilisateur : ', customIdData);
            setCustomId(customIdData);
            // je recupere tous les projets
            const productsResponse = await axios.get('/products');
            const productsData = productsResponse.data;
            console.log('Produits : ', productsData);
            // je compare les id des 2 premier requette pour recuperer uniquement celle de l'utilisateur
            const userProducts = productsData.filter((product) => product.user_id === customIdData);
            console.log('Produits de l\'utilisateur : ', userProducts);
            setProducts(userProducts);
            // j'affiche les donnees qu'il contient
            const consoleResponse = await axios.get('/console');
            const consoleData = consoleResponse.data;
            console.log('Données de la console:', consoleData);
            // ici j'effectue une destructuration des donnees retourner en console
             const {
              Duree_de_la_levée,
              Localisation,
              Monnaie,
              Montant_de_levée,
              Prix_des_actions,
              Secteur,
              Status,
              courte_description,
              description,
              images,
              titre
            } = consoleData;
      
            setDureeDeLaLevee(Duree_de_la_levée);
            setLocalisation(Localisation);
            setMonnaie(Monnaie);
            setMontantDeLevee(Montant_de_levée);
            setPrixDesActions(Prix_des_actions);
            setSecteur(Secteur);
            setStatus(Status);
            setCourteDescription(courte_description);
            setDescription(description);
            setImages(images);
            setTitre(titre);
          } catch (error) {
            console.error('Erreur lors de la récupération des informations :', error);
          }
        };
      
        fetchData();
    }, []);

    const renderItems = () => {}
  
    return (
        <>
            <h1 style={{ textAlign: 'right', marginRight: '-10%', fontSize: '1.1rem', color: 'white',fontWeight: '500px', }}>Voici tous vos projets sur la plateforme </h1>
            
            <List sx={{ width: '100%', maxWidth: 460, height: 500, bgcolor: 'rgba(255, 255, 255, 0.2)', backdropfilter: 'blur(17px)',  borderleft: '1px solid rgba(255, 255, 255, 0.7)', overflow: 'auto', cursor: 'pointer', marginLeft: '790px', }}  > 
        
                <div id='scrollbar' style={{  height: 500,  }}>
                    
                    <List>
                        {products.map((product, index) => (
                            <React.Fragment key={product.id}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                <Avatar alt="Cindy Baker" src={`http://localhost:8000/storage/${images}`} />
                                </ListItemAvatar>
                                <ListItemText
                                primary={product.titre} // Affiche le titre du produit
                                secondary={
                                    <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {product.Secteur}, {product.Montant_de_levée}{product.Monnaie}
                                    </Typography>
                                    <BasicButtons />
                                    {/* Ajoutez le code pour afficher les images */}
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                            {index !== products.length - 1 && (
                                <Divider
                                variant="inset"
                                component="li"
                                style={{ backgroundColor: 'black' }}
                                />
                            )}
                            </React.Fragment>
                        ))}
                        </List>
                
                    <Divider variant="inset" component="li"  style={{ backgroundColor: 'black', }}/>
                    <LoadingButtonsTransition/>
                </div>
           </List>
        </>
    
    );
}