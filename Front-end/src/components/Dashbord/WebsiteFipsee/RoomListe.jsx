import React from 'react';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import "../../../Styles/Website/Rooms.css";
const Rooms = () => {
  return (
    <Container maxWidth="xxl" className="py-5 px-0 wow zoomIn" data-wow-delay="0.1s"  >
      
      <Grid container spacing={0}>
        <Grid item md={6} className="bg-dark d-flex align-items-center justify-content-center" style={{ backgroundColor: '#0F172B', justifyContent: 'center', alignItems: 'center' }}>
          <div className="p-5" >
            <Typography variant="h6" className="text-start text-white text-uppercase mb-3" style={{ fontSize: '25px',fontWeight: '500px',}}>Luxury Living</Typography>
            <Typography variant="h1" className="text-white mb-6" style={{ fontSize: '38px', fontWeight: '500px',  }}>Discover A Brand Luxurious Hotel</Typography>
            <Typography variant="body1" className="text-white mb-4" style={{ fontSize: '18px' }}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</Typography>
            <div style={{ display: 'flex' }}>
              <Button variant="contained" color="primary" size="large" className="me-3" style={{ display: 'flex', width: '170px', }}>
                Our Rooms
              </Button>
              <Button variant="contained" color="default" size="large" style={{ display: 'flex', width: '170px', }}>
                Book A Room
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item md={6}>
          <div className="video">
            <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
              <span></span>
            </button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Rooms;