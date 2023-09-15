import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function FixedContainer() {
  return (
    <React.Fragment>
      
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc',  width: '79%', height: 500, marginTop: -63,marginLeft: '-70px', }} />
      </Container>
    </React.Fragment>
  );
}

