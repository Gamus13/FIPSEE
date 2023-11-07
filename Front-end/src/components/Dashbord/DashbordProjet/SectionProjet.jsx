import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SliderComponent from './CarousselAccueil';
import ChildModal from './Entrepreuneurbtn';
import TextSlider from './TextAccueil';
import "./TextSlider.css";
import Componentstat from './CounterStat';
import "./SectionProjet.css";
export default function FixedContainer() {
  return (
    // ce composant material ui est celui afficher dans la vue dashbord et contenant plusieur autre composant appeler sous forme de balise
    <React.Fragment>
      <div className="containergloball">
        <Container fixed>
          <Box 
          sx={{ 
            bgcolor: 'hsl(210, 20%, 20%)',
            display: 'flex',
            width: '79%', 
            height: 500, 
            marginTop: -63,
            marginLeft: '-70px',
            }}

            md={{ 
              width: '100%', 
              height: 500, 
              marginTop: -63,
              marginLeft: '-70px',
            }}
          >
            <TextSlider />
            <SliderComponent />
            <ChildModal/>
            <Componentstat/>
            {/* <LearnMoreButton /> */}
            {/* <StatisticSection/> */}
          </Box>
          
        </Container>
      </div>
      
    </React.Fragment>
  );
}

