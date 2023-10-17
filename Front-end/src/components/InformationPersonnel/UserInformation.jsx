import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TabsComponent from './TabsComponent';

export default function MenuTab() {
  return (
    <React.Fragment>
      <CssBaseline /> 
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '96vh', width: '90vw', marginLeft: '-65%', }} >
          <TabsComponent/>
        </Box>
        
      </Container>
    </React.Fragment>
  );
}