import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export default function OutlinedBtn() {
  return (
    <div style={{ display: 'flex', }}>
      <div style={{ marginLeft: 'auto' }}>
        <Button variant="outlined"
         sx={{ width: '100px', borderRadius: '20px' }}
         component={Link}
         to="/detail_du_projet"
        >
          Details
        </Button>
      </div>
    </div>
  );
}