import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'blue',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
};

export default function TransitionsModal(props) {

  const { openWelcome, setOpenWelcome } = props;

  const handleClose = () => setOpenWelcome(false);

  return (
    <div>
      <Modal
        open={openWelcome}
        onClose={handleClose}
      >
        <Fade in={openWelcome}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2" fontWeight="bold" color="white" >
              WELCOME TO AUTOPOINT !
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}