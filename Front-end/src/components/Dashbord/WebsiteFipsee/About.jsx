import { Container, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FaHotel, FaUsersCog, FaUsers } from 'react-icons/fa';
// import React, { useEffect } from 'react';
// import $ from 'jquery';
// import { CountUp } from 'react-countup';
// import 'counterup';
const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    top: '550px',
    // backgroundColor: 'white',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  sectionTitle: {
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
  },
  aboutTitle: {
    marginBottom: theme.spacing(5),
    fontSize: '2rem',
    fontWeight: '500',
  },
  aboutText: {
    marginBottom: theme.spacing(4),
  },
  statItem: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
  },
  icon: {
    fontSize: '2rem',
    marginBottom: theme.spacing(2),
  },
  exploreButton: {
    marginTop: theme.spacing(2),
    padding: `${theme.spacing(1.5)}px ${theme.spacing(3)}px`,
  },
  image: {
    width: '100%',
    height: '130%',
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(1),
  },
  smallImage: {
    maxWidth: '90%',
    width: 'auto',
    height: '100%',
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(4),
  },
  largeImage: {
    width: '90%',
    
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
  },
  mediumImage: {
    width: '95%',
    height: '70%',
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(1),
  },
}));

function About() {
  const classes = useStyles();

  // ici je vais utiliser jquery pour animer le decompte des objectifs.
    // useEffect(() => {
    //     $('[data-toggle="counter-up"]').counterUp({
    //     delay: 10,
    //     time: 2000
    //     });
    // }, []);

  return (
    <div className={classes.container}>
      <Container>
        <Grid container spacing={10} alignItems="center">
          <Grid item lg={6}>
            <Typography variant="h6" className={classes.sectionTitle}>
              Nos Missions
            </Typography>
            <Typography variant="h1" className={classes.aboutTitle}>
              Bienvenue sur <span className={classes.sectionTitle}>Fipsee</span>
            </Typography>
            <Typography variant="body1" className={classes.aboutText}>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum
              et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </Typography>
            <Grid container spacing={3} className={classes.statItems}>
              <Grid item sm={4} xs={12}>
                <div className={classes.statItem}>
                  <div className={classes.statItemInner}>
                    <FaHotel className={classes.icon} />
                    <Typography variant="h2" >1234</Typography>
                    <Typography variant="body2">Rooms</Typography>
                  </div>
                </div>
              </Grid>
              <Grid item sm={4} xs={12}>
                <div className={classes.statItem}>
                  <div className={classes.statItemInner}>
                    <FaUsersCog className={classes.icon} />
                    <Typography variant="h2" >1234</Typography>
                    <Typography variant="body2">Staffs</Typography>
                  </div>
                </div>
              </Grid>
              <Grid item sm={4} xs={12}>
                <div className={classes.statItem}>
                  <div className={classes.statItemInner}>
                    <FaUsers className={classes.icon} />
                    <Typography variant="h2" >1234</Typography>
                    <Typography variant="body2">Clients</Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Button className={classes.exploreButton} variant="contained" color="primary" href="">
              Explore More
            </Button>
          </Grid>
          <Grid item lg={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <img
                  className={classes.smallImage}
                  src={"https://media.istockphoto.com/id/1167999978/photo/people-collecting-money-to-piggy-bank-for-spending-on-crowdfunding.jpg?s=612x612&w=0&k=20&c=vY6vvswqP8bz4830M6CHn4FKnaLiqwXUa_lJjzpPB2A="}
                  alt="About 1"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  className={classes.largeImage}
                  src={"https://cdn.pixabay.com/photo/2019/03/21/12/53/fantasy-4070966_640.jpg"}
                  alt="About 2"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  className={classes.mediumImage}
                  src={"https://cdn.pixabay.com/photo/2019/03/21/12/53/fantasy-4070966_640.jpg"}
                  alt="About 3"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  className={classes.image}
                  src={"https://cdn.pixabay.com/photo/2019/03/21/12/53/fantasy-4070966_640.jpg"}
                  alt="About 4"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;