import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" style={{ right: '-69%', width: '100px',borderColor: 'white', color: 'white', borderRadius: '16px', }}>Suivre</Button>
    </Stack>
  );
}