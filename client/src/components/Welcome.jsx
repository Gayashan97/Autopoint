import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function TransitionsModal(props) {

    const handleClose = () => setOpenWelcome(false);

    const [openWelcome, setOpenWelcome] = React.useState(true);

    useEffect(() => {
        // Check the local storage for the key
        const welcomeMessageShown = localStorage.getItem('welcomeMessageShown');

        if (welcomeMessageShown === 'true') {
            // Welcome message has already been shown, so don't render it
            setOpenWelcome(false);
        } else {
            // Welcome message hasn't been shown, set the key in local storage
            localStorage.setItem('welcomeMessageShown', 'true');
        }
    }, []);

    return (
        <div>
            <Modal
                open={openWelcome}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={openWelcome}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            WELCOME TO AUTOPOINT !
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}