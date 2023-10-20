import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import '../../../Styles/Website/Avis.css';

const TeamContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: theme.spacing(5),
}));

const TeamMember = styled(Grid)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(5),
}));

const Team = () => {
  return (
    <TeamContainer className="container-xxl py-5">
      <Container>
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <Typography variant="h6" className="section-title text-center text-primary text-uppercase">
            Our Team
          </Typography>
          <Typography variant="h1" className="mb-5">
            Explore Our <span className="text-primary text-uppercase">Staffs</span>
          </Typography>
        </div>
        <Grid container spacing={4}>
          <TeamMember item xs={12} sm={6} md={3} className="wow fadeInUp" data-wow-delay="0.1s">
            <div className="rounded shadow overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid" src="img/team-1.jpg" alt="" />
                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                  <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="text-center p-4 mt-3">
                <Typography variant="h5" className="fw-bold mb-0">Full Name</Typography>
                <Typography variant="body2">Designation</Typography>
              </div>
            </div>
          </TeamMember>
          <TeamMember item xs={12} sm={6} md={3} className="wow fadeInUp" data-wow-delay="0.3s">
            <div className="rounded shadow overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid" src="img/team-2.jpg" alt="" />
                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                  <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="text-center p-4 mt-3">
                <Typography variant="h5" className="fw-bold mb-0">Full Name</Typography>
                <Typography variant="body2">Designation</Typography>
              </div>
            </div>
          </TeamMember>
          <TeamMember item xs={12} sm={6} md={3} className="wow fadeInUp" data-wow-delay="0.5s">
            <div className="rounded shadow overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid" src="img/team-3.jpg" alt="" />
                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                  <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="text-center p-4 mt-3">
                <Typography variant="h5" className="fw-bold mb-0">Full Name</Typography>
                <Typography variant="body2">Designation</Typography>
              </div>
            </div>
          </TeamMember>
          <TeamMember item xs={12} sm={6} md={3} className="wow fadeInUp" data-wow-delay="0.7s">
            <div className="rounded shadow overflow-hidden">
              <div className="position-relative">
                <img className="img-fluid" src="img/team-4.jpg" alt />
                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                  <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="text-center p-4 mt-3">
                <Typography variant="h5" className="fw-bold mb-0">Full Name</Typography>
                <Typography variant="body2">Designation</Typography>
              </div>
            </div>
          </TeamMember>
        </Grid>
      </Container>
    </TeamContainer>
  );
};

export default Team;