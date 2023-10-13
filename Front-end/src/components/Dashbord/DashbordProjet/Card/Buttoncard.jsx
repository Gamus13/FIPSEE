import * as React from 'react';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
export default function OutlinedButtons() {
  const Notify = () => {
    // toast("Default Notification !", {
    //   position: toast.POSITION.TOP_CENTER
    // });
    toast.warning("pour soutenir ce projet, veuillez vous connecter comme investisseur !!!" , {
      position: toast.POSITION.TOP_CENTER
    })
    
  }
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginLeft: 'auto' }}>
        <Button
          variant="outlined"
          sx={{ width: '100px', borderRadius: '20px' }}
          onClick={ e => Notify()}
          // component={Link}
          // to=""
        >
          Investir
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
}