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
import axios from '../../../axios';

export default function AlignItemsList() {

    const [customId, setCustomId] = useState(null);
    const [FormData, setFormData] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('/user');
            const user = response.data.data;
            setFormData(user);
            console.log('Données utilisateur1 :', user);
      
            const customIdData = user.id;
            console.log('ID personnalisé de l\'utilisateur : ', customIdData);
            setCustomId(customIdData);
      
            const productsResponse = await axios.get('/products');
            const productsData = productsResponse.data;
            console.log('Produits : ', productsData);
      
            const userProducts = productsData.filter((product) => product.user_id === customIdData);
            console.log('Produits de l\'utilisateur : ', userProducts);
            setProducts(userProducts);
          } catch (error) {
            console.error('Erreur lors de la récupération des informations de l\'utilisateur :', error);
          }
        };
      
        fetchData();
      }, []);
  
  return (
    <>
        <h1 style={{ textAlign: 'right', marginRight: '-10%', fontSize: '1.1rem', color: 'white',fontWeight: '500px', }}>Voici tous vos projets sur la plateforme </h1>
        
        <List sx={{ width: '100%', maxWidth: 460, height: 500, bgcolor: 'rgba(255, 255, 255, 0.2)', backdropfilter: 'blur(17px)',  borderleft: '1px solid rgba(255, 255, 255, 0.7)', overflow: 'auto', cursor: 'pointer', marginLeft: '790px', }}  > 
      {/* <Divider sx={{ flexGrow: 1 }} /> */}
      
        <div id='scrollbar' style={{  height: 500,  }}>
            <ListItem alignItems="right">
                <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ marginTop: '-30px', }} />
                </ListItemAvatar>
                <ListItemText
                primary="Brunch this weekend?"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Ali Connors
                    </Typography>
                   
                    {/* {" — I'll be in your neighborhood doing errands this…"} */}
                    <BasicButtons/>
                    </React.Fragment>
                    
                }
                
                />
            </ListItem>
            
            <Divider variant="inset" component="li"  style={{ backgroundColor: 'gray', }}/>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary="Summer BBQ"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        to Scott, Alex, Jennifer
                    </Typography>
                    <BasicButtons/>
                    {/* {" — Wish I could come, but I'm out of town this…"} */}
                    </React.Fragment>
                }
                />
            </ListItem> 
            <Divider variant="inset" component="li"  style={{ backgroundColor: 'black', }}/>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary="Summer BBQ"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        to Scott, Alex, Jennifer
                    </Typography>
                    <BasicButtons/>
                    </React.Fragment>
                }
                />
            </ListItem>
           <Divider variant="inset" component="li"  style={{ backgroundColor: 'black', }}/>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary="Oui Oui"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Sandra Adams
                    </Typography>
                    <BasicButtons/>
                    {/* {' — Do you have Paris recommendations? Have you ever…'} */}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li"  style={{ backgroundColor: 'black', }}/>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary="Oui Oui"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Sandra Adams
                    </Typography>
                    <BasicButtons/>
                    {/* {' — Do you have Paris recommendations? Have you ever…'} */}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li"  style={{ backgroundColor: 'black', }}/>
            <LoadingButtonsTransition/>
        </div>
    </List>
    </>
   
  );
}