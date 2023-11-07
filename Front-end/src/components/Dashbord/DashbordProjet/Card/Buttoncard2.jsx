// import * as React from 'react';
// import Button from '@mui/material/Button';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Link } from 'react-router-dom';
// export default function OutlinedButtons() {
//   // const Notify = () => {
//   //   // toast("Default Notification !", {
//   //   //   position: toast.POSITION.TOP_CENTER
//   //   // });
//   //   toast.warning("pour soutenir ce projet, veuillez vous connecter comme investisseur !!!" , {
//   //     position: toast.POSITION.TOP_CENTER
//   //   })
    
//   // }
//   return (
//     <div style={{ display: 'flex' }}>
//       <div style={{ marginLeft: 'auto' }}>
//         <Button
//           variant="outlined"
//           sx={{ width: '100px', borderRadius: '20px' }}
//           onClick={ e => Notify()}
//           // component={Link}
//           // to=""
//         >
//           Investir
//         </Button>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardFormComponent from '../../DashbordInvestisseur/InvestFormulaire';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 0,
  bgcolor: 'black',
  
  boxShadow: 34,
  
};

export default function OutlinedButtons() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button 
        variant="outlined"
        onClick={handleOpen}
        sx={{ width: '100px', borderRadius: '20px' }}
      >
        Investir</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          
          <CardFormComponent/>
        </Box>
      </Modal>
    </div>
  );
}