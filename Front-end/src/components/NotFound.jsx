import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import Link from "@mui/material/Link";

const primary = purple[500]; // #f44336

export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        ouppss.. cette page n'existe pas.
      </Typography>
      <Button  path='/' variant="container" style={{ backgroundColor: 'yellow',  width: '10%'}} ><Link href=""></Link>
        Back Home
        </Button>
    </Box>
  );
}