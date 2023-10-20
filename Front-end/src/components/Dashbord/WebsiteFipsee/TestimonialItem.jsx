import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const TestimonialItemContainer = styled(Grid)(({ theme }) => ({
  position: 'relative',
  backgroundColor: 'white',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  padding: theme.spacing(2),
}));

const ClientImage = styled('img')(({ theme }) => ({
  width: 45,
  height: 45,
  flexShrink: 0,
  borderRadius: theme.shape.borderRadius,
}));

const TestimonialItem = ({ testimonial }) => {
  const { text, clientName, profession, imageSrc } = testimonial;

  return (
    <TestimonialItemContainer item xs={12} sm={6} md={4} lg={3}>
      <Typography>{text}</Typography>
      <Box display="flex" alignItems="center">
        <ClientImage src={'https://media.istockphoto.com/id/1168369576/photo/people-hands-throwing-coins-in-piggy-bank-for-crowdfunding.jpg?s=2048x2048&w=is&k=20&c=_IUk8A_KwxuMKVEQBbHn9nGzvzoIa1AJa5BTYUBnbvk='} alt="Client" />
        <Box ps={3}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            {clientName}
          </Typography>
          <Typography variant="body2">{profession}</Typography>
        </Box>
      </Box>
      <i className="fas fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    </TestimonialItemContainer>
  );
};

export default TestimonialItem;