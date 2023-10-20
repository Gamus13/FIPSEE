import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import TestimonialItem from './TestimonialItem';

const TestimonialContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#333333',
  margin: theme.spacing(5),
  padding: theme.spacing(5),
}));

const TestimonialCarousel = styled(Grid)(({ theme }) => ({
  paddingTop: theme.spacing(5),
}));

const Testimonial = () => {
  const testimonials = [
    {
      text: 'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos',
      clientName: 'Client Name',
      profession: 'Profession',
      imageSrc: 'https://cdn.pixabay.com/photo/2018/08/01/09/41/crowdfunding-3576868_1280.jpg',
    },
    {
      text: 'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos',
      clientName: 'Client Name',
      profession: 'Profession',
      imageSrc: 'https://cdn.pixabay.com/photo/2018/08/01/09/41/crowdfunding-3576868_1280.jpg',
    },
    {
      text: 'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos',
      clientName: 'Client Name',
      profession: 'Profession',
      imageSrc: 'https://cdn.pixabay.com/photo/2018/08/01/09/41/crowdfunding-3576868_1280.jpg',
    },
  ];

  return (
    <TestimonialContainer className="wow zoomIn" data-wow-delay="0.1s">
      <Container maxWidth="xxl">
        <TestimonialCarousel container justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <TestimonialItem key={index} testimonial={testimonial} />
          ))}
        </TestimonialCarousel>
      </Container>
    </TestimonialContainer>
  );
};

export default Testimonial;