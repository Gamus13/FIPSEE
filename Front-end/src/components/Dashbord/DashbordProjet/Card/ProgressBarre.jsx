import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import axios from 'axios';

export default function LinearDeterminate() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/projects/{projectId}/current-amount');
        const currentAmount = response.data.current_amount;

        // Remplacez cette valeur par le montant fixe de départ
        const expectedAmount = 1000;

        // Calculer le pourcentage de progression
        const progressPercentage = (currentAmount / expectedAmount) * 100;

        setProgress(progressPercentage);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ width: '100%', marginTop: '11%' }}>
      <LinearProgress variant="determinate" value={progress} sx={{ height: 20, borderRadius: 22 }} />
    </Box>
  );
}