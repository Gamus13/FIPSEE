import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import "../../../Styles/Website/ServicesComponent.css";


const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
    sectionTitle: {
      textAlign: 'center',
      color: theme.palette.primary.main,
      textTransform: 'uppercase',
      fontSize: '40px',
    },
    serviceItem: {
      height: 320,
      padding: 30,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      background: '#FFFFFF',
      boxShadow: '0 0 45px rgba(0, 0, 0, .08)',
      transition: '.5s',
      textDecoration: 'none',
      borderRadius: '2%',
      '&:hover': {
        background: theme.palette.primary.main,
      },
    },
    serviceIcon: {
      margin: '0 auto 30px auto',
      width: 65,
      height: 65,
      transition: '.5s',
      backgroundColor: 'transparent',
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: '5%',
      padding: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    serviceItemHover: {
      '&:hover $serviceIcon, &:hover $serviceTitle, &:hover $serviceDescription': {
        color: '#FFFFFF !important',
      },
    },
    serviceTitle: {
      transition: '.5s',
    },
    serviceDescription: {
      transition: '.5s',
    },
  }));

const ServicesComponent = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xxl" className={classes.container}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <Typography variant="h6" className={classes.sectionTitle}>
              Our Services
            </Typography>
            <Typography variant="h1" className="mb-5" style={{ fontSize: '50px', }}>
              Explore Our{' '}
              <span className={classes.sectionTitle}>Services</span>
            </Typography>
          </div>
        </Grid>
        <Grid item lg={4} md={6} xs={12} className="wow fadeInUp" data-wow-delay="0.1s">
          <a className={classes.serviceItem} href="">
            <div className={classes.serviceIcon}>
              <i className="fa fa-hotel fa-2x text-primary"></i>
            </div>
            <Typography variant="h5" className="mb-3">
              Rooms & Appartment
            </Typography>
            <Typography variant="body1" className="text-body mb-0">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.
            </Typography>
          </a>
        </Grid>
        <Grid item lg={4} md={6} xs={12} className="wow fadeInUp" data-wow-delay="0.2s">
          <a className={classes.serviceItem} href="">
            <div className={classes.serviceIcon}>
              <i className="fa fa-utensils fa-2x text-primary"></i>
            </div>
            <Typography variant="h5" className="mb-3">
              Food & Restaurant
            </Typography>
            <Typography variant="body1" className="text-body mb-0">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.
            </Typography>
          </a>
        </Grid>
        <Grid item lg={4} md={6} xs={12} className="wow fadeInUp" data-wow-delay="0.3s">
          <a className={classes.serviceItem} href="">
            <div className={classes.serviceIcon}>
              <i className="fa fa-spa fa-2x text-primary"></i>
            </div>
            <Typography variant="h5" className="mb-3">
              Spa & Fitness
            </Typography>
            <Typography variant="body1" className="text-body mb-0">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.
            </Typography>
          </a>
        </Grid>
        <Grid item lg={4} md={6} xs={12} className="wow fadeInUp" data-wow-delay="0.4s">
          <a className={classes.serviceItem} href="">
            <div className={classes.serviceIcon}>
              <i className="fa fa-swimmer fa-2x text-primary"></i>
            </div>
            <Typography variant="h5" className="mb-3">
              Sports & Gaming
            </Typography>
            <Typography variant="body1" className="text-body mb-0">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.
            </Typography>
          </a>
        </Grid>
        <Grid item lg={4} md={6} xs={12} className="wow fadeInUp" data-wow-delay="0.5s">
          <a className={classes.serviceItem} href="">
<div className={classes.serviceIcon}>
              <i className="fa fa-glass-cheers fa-2x text-primary"></i>
            </div>
            <Typography variant="h5" className="mb-3">
              Event & Party
            </Typography>
            <Typography variant="body1" className="text-body mb-0">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.
            </Typography>
          </a>
        </Grid>
        <Grid item lg={4} md={6} xs={12} className="wow fadeInUp" data-wow-delay="0.6s">
          <a className={classes.serviceItem} href="">
            <div className={classes.serviceIcon}>
              <i className="fa fa-dumbbell fa-2x text-primary"></i>
            </div>
            <Typography variant="h5" className="mb-3">
              GYM & Yoga
            </Typography>
            <Typography variant="body1" className="text-body mb-0">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.
            </Typography>
          </a>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServicesComponent;