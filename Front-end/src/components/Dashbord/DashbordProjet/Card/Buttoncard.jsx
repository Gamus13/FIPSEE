import * as React from 'react';
import Button from '@mui/material/Button';

export default function OutlinedButtons() {
  return (
    <div style={{ display: 'flex', }}>
      <div style={{ marginLeft: 'auto' }}>
        <Button variant="outlined" sx={{ width: '100px', borderRadius: '20px' }}>
          Investir
        </Button>
      </div>
    </div>
  );
}