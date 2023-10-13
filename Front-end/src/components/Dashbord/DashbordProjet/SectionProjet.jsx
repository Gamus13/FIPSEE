import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SliderComponent from './CarousselAccueil';
import TextSlider from './TextAccueil';
import "./TextSlider.css";
// import StatisticSection from './StatData';
// import "./StartData.css";
// import LearnMoreButton from './ProgressBtn';

export default function FixedContainer() {
  return (
    <React.Fragment>
      
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
        >
          <TextSlider />
          <SliderComponent />
          {/* <LearnMoreButton /> */}
          {/* <StatisticSection/> */}
        </Box>
        
      </Container>
    </React.Fragment>
  );
}

