import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { PiCaretDoubleRightBold } from 'react-icons/pi';
import UserRegister from '../../InformationPersonnel/UserRegistration';
import FormComponent4 from '../../InformationPersonnel/Formulaire2';
const style = {
  position: 'absolute',
 
  top: '52%',
  left: '47%',
  transform: 'translate(-50%, -50%)',
  boxShadow: '5px 9px 0px yellow',
  transition: ' 0.2s',
  '&:hover': {
    paddingRight: '30px',
    color: 'white', 
    boxShadow: '8px 3px 0px aqua',
  },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
 
};


export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} sx={{ ...style, width: 150,transform: 'skewX(-15deg)',cursor: 'pointer',boxShadow: '8px 3px 0px ', }}>
            Continuer
                
            <PiCaretDoubleRightBold/>
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{  width: 400 }}>
            <FormComponent4/>
        </Box>
      </Modal>
    </div>
  );
}
