import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import BasicButtons from './FollowBtn';
import LoadingButtonsTransition from './ShowProjet';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function AlignItemsList() {
  return (
    <>
        <h1 style={{ textAlign: 'right', marginRight: '-2.6%', fontSize: '1.1rem', color: '#a1e2f9', }}>Projets avec le plus investisseur</h1>
        
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