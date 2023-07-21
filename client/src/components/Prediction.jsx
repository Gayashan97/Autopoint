import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'lightblue',
  boxShadow: 24,
  p: 4,
  textAlign: 'center'
};

export default function BasicModal(props) {

  const { showPrice, setShowPrice, data, isLoading } = props;

  return (
    <div>
      {isLoading ? <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="primary" />
      </Backdrop> :
        <Modal
          open={showPrice}
          onClose={() => setShowPrice(false)}
        >
          {data > 0 ?
            <Box sx={style}>
              <Typography id="price-title" variant="h4" component="h2" color="darkcyan" fontWeight="bold">
                Predicted Price
              </Typography>
              <Typography id="price-value" variant="h5" sx={{ mt: 2 }} color="darkslategray" fontWeight="bold">
                {"Rs " + parseInt(data).toLocaleString()}
              </Typography>
            </Box> : data === -1 ?
              <Box sx={style}>
                <Typography id="price-error" variant="h5" color="darkslategray" fontWeight="bold">
                  No data found!
                </Typography>
              </Box> : <Typography id="price-error" variant="h5" color="darkslategray" fontWeight="bold">
                Inaccurate data!
              </Typography>
          }
        </Modal>}
    </div>
  );
}